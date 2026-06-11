#!/usr/bin/env python3
"""
Archilya Google Search Console SEO performans raporu.

Kullanım:
  python scripts/search-console-report.py
  python scripts/search-console-report.py --site-url "sc-domain:archilya.com"
  python scripts/search-console-report.py --site-url "https://archilya.com/" --key-file "C:\\path\\to\\credentials.json"

Kimlik doğrulama:
  - Varsayılan olarak bu dosyanın yanındaki credentials.json kullanılır.
  - Alternatif olarak --key-file ile servis hesabı JSON dosyasını verin.
  - Ya da SEARCH_CONSOLE_KEY_FILE / GOOGLE_APPLICATION_CREDENTIALS ortam değişkenlerinden
    biriyle servis hesabı JSON dosyasının yolunu belirtin.

Gerekli paketler:
  pip install google-api-python-client google-auth

Notlar:
  - Search Console mülküne servis hesabı e-postasını kullanıcı olarak ekleyin.
  - Site URL değeri hem URL-prefix (https://archilya.com/) hem de domain property
    (sc-domain:archilya.com) formatlarını kabul eder.
"""

from __future__ import annotations

import argparse
import os
import sys
from datetime import date, timedelta
from pathlib import Path

try:
    from google.auth.exceptions import GoogleAuthError
    from google.oauth2 import service_account
    from googleapiclient.discovery import build
    from googleapiclient.errors import HttpError
except ImportError as exc:
    missing_name = getattr(exc, "name", "google-api-python-client/google-auth")
    print(
        "Eksik Python paketi: "
        f"{missing_name}\n"
        "Kurulum: pip install google-api-python-client google-auth",
        file=sys.stderr,
    )
    sys.exit(1)


SCOPE = "https://www.googleapis.com/auth/webmasters.readonly"
API_SERVICE_NAME = "webmasters"
API_VERSION = "v3"
DEFAULT_SITE_URL = "https://archilya.com"
DEFAULT_KEY_FILE = "credentials.json"
MAX_ROWS_FOR_FILTERED_REPORTS = 250


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Google Search Console Search Analytics raporu üretir."
    )
    parser.add_argument(
        "--site-url",
        default=DEFAULT_SITE_URL,
        help=(
            "Search Console mülk adresi. Örn: https://archilya.com/ veya "
            "sc-domain:archilya.com (varsayılan: https://archilya.com)"
        ),
    )
    parser.add_argument(
        "--key-file",
        default=DEFAULT_KEY_FILE,
        help=(
            "Servis hesabı JSON anahtar dosyası. Göreli yol verilirse önce script "
            "dizini, sonra çalışma dizini denenir (varsayılan: credentials.json)."
        ),
    )
    return parser.parse_args()


def normalize_site_url(site_url: str) -> str:
    cleaned = site_url.strip()
    if cleaned.startswith("sc-domain:"):
        return cleaned.rstrip("/")
    return cleaned


def resolve_key_file(key_file: str) -> Path:
    env_key_file = os.getenv("SEARCH_CONSOLE_KEY_FILE") or os.getenv(
        "GOOGLE_APPLICATION_CREDENTIALS"
    )
    selected_key_file = env_key_file if key_file == DEFAULT_KEY_FILE and env_key_file else key_file
    candidate = Path(selected_key_file).expanduser()

    if candidate.is_absolute():
        return candidate

    script_relative = Path(__file__).resolve().parent / candidate
    if script_relative.exists():
        return script_relative

    return Path.cwd() / candidate


def build_search_console_service(key_file: Path):
    if not key_file.exists():
        raise FileNotFoundError(
            f"Servis hesabı anahtar dosyası bulunamadı: {key_file}\n"
            "credentials.json dosyasını scripts dizinine koyun, --key-file kullanın "
            "veya SEARCH_CONSOLE_KEY_FILE / GOOGLE_APPLICATION_CREDENTIALS tanımlayın."
        )

    credentials = service_account.Credentials.from_service_account_file(
        str(key_file), scopes=[SCOPE]
    )
    return build(API_SERVICE_NAME, API_VERSION, credentials=credentials, cache_discovery=False)


def last_28_days() -> tuple[str, str]:
    end_date = date.today() - timedelta(days=1)
    start_date = end_date - timedelta(days=27)
    return start_date.isoformat(), end_date.isoformat()


def query_search_analytics(
    service,
    site_url: str,
    start_date: str,
    end_date: str,
    dimensions: list[str],
    row_limit: int,
) -> list[dict]:
    body = {
        "startDate": start_date,
        "endDate": end_date,
        "dimensions": dimensions,
        "rowLimit": row_limit,
        "startRow": 0,
    }
    response = service.searchanalytics().query(siteUrl=site_url, body=body).execute()
    return response.get("rows", [])


def row_label(row: dict) -> str:
    keys = row.get("keys") or ["-"]
    return keys[0] if keys else "-"


def format_ctr(ctr: float) -> str:
    return f"{ctr * 100:.2f}%"


def print_separator(width: int = 118) -> None:
    print("-" * width)


def print_header(title: str) -> None:
    print("\n" + "=" * 118)
    print(title)
    print("=" * 118)


def print_table(label_title: str, rows: list[dict], max_label_width: int = 72) -> None:
    if not rows:
        print("Kayıt bulunamadı.")
        return

    print(
        f"{label_title:<{max_label_width}} "
        f"{'Tıklama':>10} {'Gösterim':>12} {'CTR':>9} {'Pozisyon':>10}"
    )
    print_separator(max_label_width + 45)

    for row in rows:
        label = row_label(row).replace("\n", " ")
        if len(label) > max_label_width:
            label = label[: max_label_width - 1] + "…"

        clicks = int(row.get("clicks", 0))
        impressions = int(row.get("impressions", 0))
        ctr = float(row.get("ctr", 0))
        position = float(row.get("position", 0))

        print(
            f"{label:<{max_label_width}} "
            f"{clicks:>10,} {impressions:>12,} {format_ctr(ctr):>9} {position:>10.1f}"
        )


def print_report_summary(site_url: str, start_date: str, end_date: str, key_file: Path) -> None:
    print_header("ARCHILYA - GOOGLE SEARCH CONSOLE SEO PERFORMANS RAPORU")
    print(f"Mülk        : {site_url}")
    print(f"Tarih aralığı: {start_date} - {end_date} (son 28 gün)")
    print(f"Anahtar dosya: {key_file}")


def main() -> int:
    args = parse_args()
    site_url = normalize_site_url(args.site_url)
    key_file = resolve_key_file(args.key_file)
    start_date, end_date = last_28_days()

    try:
        service = build_search_console_service(key_file)

        top_queries = query_search_analytics(
            service, site_url, start_date, end_date, ["query"], 20
        )
        top_pages = query_search_analytics(
            service, site_url, start_date, end_date, ["page"], 20
        )
        pages_for_filtering = query_search_analytics(
            service,
            site_url,
            start_date,
            end_date,
            ["page"],
            MAX_ROWS_FOR_FILTERED_REPORTS,
        )
    except FileNotFoundError as exc:
        print(f"Kimlik doğrulama hatası:\n{exc}", file=sys.stderr)
        return 1
    except GoogleAuthError as exc:
        print(f"Google kimlik doğrulama hatası: {exc}", file=sys.stderr)
        return 1
    except HttpError as exc:
        status = getattr(exc.resp, "status", "?")
        print(
            "Google Search Console API hatası "
            f"(HTTP {status}): {exc}\n"
            "Mülk adresinin doğru olduğundan ve servis hesabının Search Console "
            "mülküne yetkili eklendiğinden emin olun.",
            file=sys.stderr,
        )
        return 1
    except OSError as exc:
        print(f"Anahtar dosyası okunamadı: {exc}", file=sys.stderr)
        return 1

    low_ctr_pages = sorted(
        (
            row
            for row in pages_for_filtering
            if row.get("impressions", 0) > 100 and row.get("ctr", 0) < 0.02
        ),
        key=lambda row: (-row.get("impressions", 0), row.get("ctr", 0)),
    )[:20]

    opportunity_pages = sorted(
        (
            row
            for row in pages_for_filtering
            if 5 <= row.get("position", 0) <= 20
        ),
        key=lambda row: (row.get("position", 0), -row.get("impressions", 0)),
    )[:20]

    print_report_summary(site_url, start_date, end_date, key_file)
    print_header("1) Tıklamaya Göre İlk 20 Sorgu")
    print_table("Sorgu", top_queries)
    print_header("2) Tıklamaya Göre İlk 20 Sayfa")
    print_table("Sayfa", top_pages)
    print_header("3) Düşük CTR Sayfaları (Gösterim > 100, CTR < %2)")
    print_table("Sayfa", low_ctr_pages)
    print_header("4) Sıralama Fırsatı Olan Sayfalar (Pozisyon 5-20)")
    print_table("Sayfa", opportunity_pages)
    print()

    return 0


if __name__ == "__main__":
    sys.exit(main())
