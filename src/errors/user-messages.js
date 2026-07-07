/**
 * Kullanıcı dostu hata mesajı dönüşüm fonksiyonu.
 * Teknik detay içermeyen, kurumsal Türkçe mesajlar döndürür.
 *
 * Kullanım:
 *   import { getUserFriendlyErrorMessage } from "../errors/user-messages";
 *   toast.error(getUserFriendlyErrorMessage(err, "Mesaj gönderilemedi."));
 */

export function getUserFriendlyErrorMessage(error, fallback) {
  if (!error) return fallback || 'Beklenmeyen bir hata oluştu.';

  const message = error.message || String(error);
  const lower = message.toLowerCase();

  // Ağ bağlantısı hataları
  if (
    lower.includes('network') ||
    lower.includes('fetch') ||
    lower.includes('econnrefused') ||
    lower.includes('failed to fetch') ||
    lower.includes('networkerror')
  ) {
    return 'İnternet bağlantınızı kontrol edip tekrar deneyin.';
  }

  // Zaman aşımı
  if (lower.includes('timeout') || lower.includes('abort')) {
    return 'Bağlantı zaman aşımına uğradı. Lütfen tekrar deneyin.';
  }

  // Oturum/auth hataları
  if (
    lower.includes('auth') ||
    lower.includes('oturum') ||
    lower.includes('giris') ||
    lower.includes('unauthorized') ||
    lower.includes('unauthenticated')
  ) {
    return 'Oturum süreniz dolmuş. Lütfen tekrar giriş yapın.';
  }

  // Giriş bilgisi hataları
  if (
    lower.includes('invalid login credentials') ||
    lower.includes('wrong password') ||
    lower.includes('invalid credential')
  ) {
    return 'E-posta veya şifre hatalı.';
  }

  // Kayıt hataları
  if (lower.includes('email already in use') || lower.includes('user already registered')) {
    return 'Bu e-posta adresi zaten kullanılıyor.';
  }

  // API/sunucu hataları
  if (
    lower.includes('internal server') ||
    lower.includes('500') ||
    lower.includes('sunucu') ||
    lower.includes('backend')
  ) {
    return 'İşleminiz tamamlanamadı. Lütfen daha sonra tekrar deneyin.';
  }

  // Bilinmeyen hata
  return fallback || 'Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
}
