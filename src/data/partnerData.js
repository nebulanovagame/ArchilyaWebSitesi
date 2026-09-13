export const PARTNER_FIRMS = [
  {
    id: 1,
    name: 'Archilya & Mimari Proje ve Ruhsat',
    type: 'merkez',
    category: 'Merkez',
    address: 'Çorlu Teknokent',
    city: 'Çorlu',
    country: 'Türkiye',
    latitude: 41.1540,
    longitude: 27.7990,
    phone: '0 (282) 606 06 39',
    email: 'info@nebulanovagames.com',
    website: 'https://archilya.com',
    socialMedia: {
      instagram: 'https://www.instagram.com/archilya.studio/',
    },
    description: 'Archilya merkez ofis — Çorlu Teknokent.',
  },
  {
    id: 4,
    name: 'Archilya & Mimari Proje ve Ruhsat',
    type: 'branch',
    category: 'Merkez',
    address: 'Gazi Osman Paşa, Gürsoy Sk. Say Apt Sitesi A Blok No:12a, 59500 Çerkezköy/Tekirdağ',
    city: 'Çerkezköy',
    country: 'Türkiye',
    latitude: 41.288693,
    longitude: 27.996380,
    phone: '0 (282) 606 06 39',
    email: 'info@nebulanovagames.com',
    website: 'https://archilya.com',
    socialMedia: {
      instagram: 'https://www.instagram.com/archilya.studio/',
    },
    description: 'Archilya Çerkezköy şubesi — mimari proje ve ruhsat hizmetleri.',
  },
  {
    id: 3,
    name: 'Archilya Mimarlık İnşaat',
    type: 'branch',
    category: 'Merkez',
    address: 'Denizli Merkez',
    city: 'Denizli',
    country: 'Türkiye',
    latitude: 37.777511,
    longitude: 29.048114,
    phone: '0 (282) 606 06 39',
    email: 'info@nebulanovagames.com',
    website: 'https://archilya.com',
    socialMedia: {
      instagram: 'https://www.instagram.com/archilya.studio/',
    },
    description: 'Archilya Denizli şubesi — mimarlık ve inşaat hizmetleri.',
  },
  {
    id: 2,
    name: 'Yıldırım Mimarlık',
    type: 'partner',
    category: 'Mimarlık Ofisi',
    address: 'Çekmeköy Merkez',
    city: 'Çekmeköy',
    country: 'Türkiye',
    latitude: 41.0352,
    longitude: 29.1739,
    phone: '+90 216 641 81 66',
    email: 'yildirimmimarlik@hotmail.com.tr',
    website: 'https://yildirimmimarlik.net',
    socialMedia: {
      instagram: 'https://www.instagram.com/yildirimmimarlik/',
    },
    description: 'İş birliği ortağımız — mimari proje hizmetleri.',
  },
];

export const BRANCHES = PARTNER_FIRMS.filter((f) => f.type === 'branch');
export const PARTNERS = PARTNER_FIRMS.filter((f) => f.type === 'partner');

export const FIRM_CATEGORIES = [
  { key: 'all', label: 'Tümü' },
  { key: 'branch', label: 'Şubelerimiz' },
  { key: 'partner', label: 'İş Ortaklarımız' },
];
