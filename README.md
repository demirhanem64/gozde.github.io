# Gözde Ekşi Portfolio Web Sitesi

Modern, KVKK uyumlu akademik portfolio ve öğrenci etkileşim platformu.

## 📋 İçindekiler

- [Genel Bakış](#genel-bakış)
- [Özellikler](#özellikler)
- [Teknoloji Stack](#teknoloji-stack)
- [Kurulum](#kurulum)
- [Google Sheets Duyuru Entegrasyonu](#google-sheets-duyuru-entegrasyonu)
- [Deployment](#deployment)
- [Webhook Konfigürasyonu](#webhook-konfigürasyonu)
- [Anket Yönetimi](#anket-yönetimi)
- [Bakım ve Güncelleme](#bakım-ve-güncelleme)
- [Tarayıcı Desteği](#tarayıcı-desteği)
- [Lisans](#lisans)

## 🎯 Genel Bakış

Bu proje, İstinye Üniversitesi İlk ve Acil Yardım Bölümü öğretim görevlisi ve bölüm başkanı Gözde Ekşi için geliştirilmiş modern bir web sitesidir. Site, öğrencilerle etkileşim kurmak, anketler düzenlemek ve akademik içerik paylaşmak için tasarlanmıştır.

### Temel Özellikler

- ✅ **KVKK Uyumlu**: Kişisel verilerin korunması kanununa tam uyumluluk
- 📱 **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- 🎨 **Modern UI/UX**: Sağlık ve eğitim sektörüne uygun profesyonel tasarım
- 📊 **Anket Sistemi**: Çoklu anket desteği ile öğrenci geri bildirimi toplama
- 🔗 **Webhook Entegrasyonu**: n8n platformu ile otomatik veri işleme
- ♿ **Erişilebilirlik**: WCAG 2.1 AA standartlarına uygun
- ⚡ **Yüksek Performans**: Optimize edilmiş yükleme süreleri

## 🚀 Özellikler

### Sayfa Yapısı

1. **Anasayfa**: Hoş geldiniz mesajı, duyurular ve genel bilgiler
2. **Anketler**: Dinamik anket sistemi ile öğrenci geri bildirimi
3. **Hakkımda**: Akademik geçmiş ve uzmanlık alanları
4. **İletişim**: İletişim bilgileri ve sosyal medya linkleri
5. **Üniversitem**: İstinye Üniversitesi ve bölüm bilgileri

### Duyuru Sistemi

- Google Sheets tabanlı duyuru yönetimi
- Kod değiştirmeden içerik güncelleme
- 5 dakikalık akıllı önbellekleme sistemi
- Otomatik tarih sıralama (en yeni önce)
- "Yeni" rozeti (son 7 gün içindeki duyurular)
- Responsive grid layout (desktop 3 sütun, tablet 2 sütun, mobil 1 sütun)
- Popup modal ile detaylı görüntüleme

### Anket Sistemi

- Çoklu anket desteği (gozdeanket1, gozdeanket2, gozdeanket3, vb.)
- Her anket için özel webhook endpoint'i
- KVKK aydınlatma metni ve onay mekanizması
- Real-time form validasyonu
- Başarılı gönderim sonrası otomatik teşekkür mesajı

### Güvenlik ve Gizlilik

- KVKK hassas alanları (telefon, TCKN) form dışında tutulur
- Zorunlu aydınlatma metni onayı
- Güvenli HTTPS bağlantısı
- External linkler için güvenlik önlemleri (noopener, noreferrer)

## 💻 Teknoloji Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling**: CSS Custom Properties, Flexbox, CSS Grid
- **Animasyonlar**: CSS Animations, Transitions, Intersection Observer API
- **HTTP İletişimi**: Fetch API
- **Form Validasyonu**: HTML5 Validation + Custom JavaScript
- **Testing**: Jest, fast-check (Property-Based Testing)

### Dosya Yapısı

```
gozdeeksi.com.tr/
├── index.html                 # Ana sayfa
├── css/
│   ├── variables.css         # Renk paleti ve değişkenler
│   ├── base.css              # Temel stiller
│   ├── components.css        # Bileşen stilleri
│   ├── layout.css            # Layout yapısı
│   ├── animations.css        # Animasyon tanımları
│   ├── responsive.css        # Responsive tasarım
│   ├── accessibility.css     # Erişilebilirlik stilleri
│   └── browser-compat.css    # Tarayıcı uyumluluğu
├── js/
│   ├── navigation.js                # Sayfa navigasyonu
│   ├── animations.js                # Animasyon kontrolü
│   ├── announcements.js             # Duyuru yönetimi
│   ├── google-sheets-integration.js # Google Sheets entegrasyonu
│   ├── forms.js                     # Form yönetimi
│   ├── webhook.js                   # Webhook entegrasyonu
│   ├── accessibility.js             # Erişilebilirlik özellikleri
│   └── utils.js                     # Yardımcı fonksiyonlar
├── assets/
│   ├── images/               # Görseller
│   └── icons/                # İkonlar ve favicon
├── data/
│   └── surveys.json          # Anket konfigürasyonları
├── tests/                                    # Test dosyaları
├── __tests__/                                # Jest unit testleri
├── GOOGLE-SHEETS-DUYURU-ENTEGRASYONU.md     # Google Sheets detaylı kılavuz
├── GOOGLE-SHEETS-KURULUM-OZET.md            # Google Sheets hızlı kurulum
├── GOOGLE-SHEETS-SABLON.md                  # Google Sheets şablon ve örnekler
└── README.md                                 # Bu dosya
```

## 🔧 Kurulum

### Gereksinimler

- Modern web tarayıcı (Chrome, Firefox, Safari, Edge)
- Web sunucusu (Apache, Nginx, veya statik hosting)
- HTTPS desteği (Let's Encrypt önerilir)

### Yerel Geliştirme

1. **Projeyi klonlayın**:
```bash
git clone [repository-url]
cd gozdeeksi-portfolio
```

2. **Yerel sunucu başlatın**:
```bash
# Python ile
python -m http.server 8000

# Node.js ile
npx http-server -p 8000

# PHP ile
php -S localhost:8000
```

3. **Tarayıcıda açın**:
```
http://localhost:8000
```

### Test Çalıştırma

```bash
# Tüm testleri çalıştır
npm test

# Property-based testleri çalıştır
npm run test:pbt

# Belirli bir test dosyasını çalıştır
npm test -- forms.test.js
```

## 📊 Google Sheets Duyuru Entegrasyonu

Site, duyuruları Google Sheets'ten otomatik olarak çeker. Bu sayede kod değiştirmeden içerik yönetimi yapabilirsiniz.

### Hızlı Başlangıç

1. **Google Sheets'i Açın**: [Duyuru Sheets'i](https://docs.google.com/spreadsheets/d/1FXAumUTfYi0Q4XInTnF4oext2YobLw2rm3DoNsQHwJ0/edit)

2. **Duyuru Ekleyin**: Yeni satır ekleyip aşağıdaki sütunları doldurun:
   - **Başlık**: Duyuru başlığı (max 200 karakter)
   - **Tarih**: DD/MM/YYYY formatında (örn: 15/01/2025)
   - **Saat**: HH:MM formatında (örn: 09:00)
   - **Özet**: Kısa özet (max 150 karakter)
   - **İçerik**: Detaylı açıklama
   - **Aktif**: "Evet" veya "Hayır"

3. **Kaydedin**: Değişiklikler 5 dakika içinde sitede görünür!

### Özellikler

- ✅ **Otomatik Senkronizasyon**: 5 dakikalık cache ile performans optimizasyonu
- ✅ **Aktif/Pasif Kontrol**: Duyuruları gizleyebilir veya gösterebilirsiniz
- ✅ **Hata Yönetimi**: API hatalarında cache veya fallback data kullanılır
- ✅ **Tarih Sıralama**: En yeni duyurular otomatik olarak önce gösterilir
- ✅ **"Yeni" Rozeti**: Son 7 gün içindeki duyurular otomatik işaretlenir

### Detaylı Dokümantasyon

Daha fazla bilgi için:
- **[GOOGLE-SHEETS-DUYURU-ENTEGRASYONU.md](GOOGLE-SHEETS-DUYURU-ENTEGRASYONU.md)**: Detaylı kullanım kılavuzu
- **[GOOGLE-SHEETS-KURULUM-OZET.md](GOOGLE-SHEETS-KURULUM-OZET.md)**: Hızlı kurulum özeti
- **[GOOGLE-SHEETS-SABLON.md](GOOGLE-SHEETS-SABLON.md)**: Sheets şablonu ve örnekler

### Sorun Giderme

**Duyurular görünmüyor?**
1. Google Sheets'in herkese açık olduğunu kontrol edin
2. Tarayıcı konsolunda (F12) hata mesajlarını inceleyin
3. Cache'i temizleyin: `localStorage.clear(); location.reload();`

**Değişiklikler görünmüyor?**
- 5 dakika bekleyin (cache süresi) veya manuel cache temizleyin

## 📦 Deployment

### Statik Hosting Platformları

#### Netlify

1. **Netlify'a bağlanın**:
   - GitHub/GitLab repository'nizi bağlayın
   - Build settings: Yok (statik site)
   - Publish directory: `/` (root)

2. **Domain ayarları**:
   - Custom domain: `gozdeeksi.com.tr`
   - SSL: Otomatik Let's Encrypt

3. **Deploy**:
```bash
# Manuel deploy
netlify deploy --prod
```

#### Vercel

1. **Vercel'e deploy**:
```bash
vercel --prod
```

2. **Domain konfigürasyonu**:
   - Dashboard'dan custom domain ekleyin
   - DNS ayarlarını güncelleyin

#### GitHub Pages

1. **Repository ayarları**:
   - Settings → Pages
   - Source: main branch
   - Custom domain: `gozdeeksi.com.tr`

2. **CNAME dosyası oluşturun**:
```bash
echo "gozdeeksi.com.tr" > CNAME
```

### Geleneksel Web Hosting

1. **Dosyaları yükleyin**:
   - FTP/SFTP ile tüm dosyaları sunucuya yükleyin
   - Public_html veya www dizinine yerleştirin

2. **.htaccess yapılandırması**:
```apache
# HTTPS yönlendirmesi
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
</IfModule>
```

### DNS Ayarları

Domain sağlayıcınızda aşağıdaki DNS kayıtlarını ekleyin:

```
Type    Name    Value                   TTL
A       @       [hosting-ip-address]    3600
CNAME   www     gozdeeksi.com.tr        3600
```

### SSL Sertifikası

**Let's Encrypt ile**:
```bash
certbot certonly --webroot -w /var/www/gozdeeksi -d gozdeeksi.com.tr -d www.gozdeeksi.com.tr
```

### Deployment Checklist

- [ ] Tüm dosyalar sunucuya yüklendi
- [ ] HTTPS aktif ve çalışıyor
- [ ] Domain doğru yönlendiriliyor
- [ ] Webhook URL'leri production ortamına ayarlandı
- [ ] robots.txt ve sitemap.xml mevcut
- [ ] Favicon ve meta tags doğru
- [ ] Tüm formlar test edildi
- [ ] Responsive tasarım tüm cihazlarda kontrol edildi
- [ ] Performance testi yapıldı (Lighthouse)
- [ ] Accessibility testi yapıldı

## 🔗 Webhook Konfigürasyonu

### n8n Webhook Kurulumu

1. **n8n workflow oluşturun**:
   - Webhook node ekleyin
   - HTTP Method: POST
   - Path: `/webhook/gozdeanket1` (her anket için farklı)

2. **Webhook URL'sini alın**:
```
https://demirhanem.com.tr/webhook/gozdeanket1
```

3. **surveys.json dosyasını güncelleyin**:
```json
{
  "surveys": [
    {
      "id": "gozdeanket1",
      "title": "Ders Değerlendirme Anketi",
      "description": "Derslerin kalitesini değerlendirmek için görüşlerinizi paylaşın",
      "webhookUrl": "https://demirhanem.com.tr/webhook/gozdeanket1",
      "fields": [...]
    }
  ]
}
```

### Webhook Veri Formatı

Webhook'a gönderilen JSON payload formatı:

```json
{
  "surveyId": "gozdeanket1",
  "timestamp": "2024-12-05T10:30:00Z",
  "responses": {
    "firstName": "Ahmet",
    "lastName": "Yılmaz",
    "departmentClass": "İlk ve Acil Yardım - 2. Sınıf",
    "email": "ahmet.yilmaz@example.com"
  },
  "kvkkConsent": true,
  "userAgent": "Mozilla/5.0...",
  "submissionId": "uuid-here"
}
```

### Webhook Test Etme

```bash
# cURL ile test
curl -X POST https://demirhanem.com.tr/webhook/gozdeanket1 \
  -H "Content-Type: application/json" \
  -d '{
    "surveyId": "gozdeanket1",
    "timestamp": "2024-12-05T10:30:00Z",
    "responses": {
      "firstName": "Test",
      "lastName": "User",
      "departmentClass": "Test Sınıf",
      "email": "test@example.com"
    },
    "kvkkConsent": true
  }'
```

### Webhook Hata Yönetimi

**Yaygın Hatalar**:

1. **CORS Hatası**:
   - n8n webhook ayarlarında CORS'u etkinleştirin
   - Allowed Origins: `https://gozdeeksi.com.tr`

2. **Timeout**:
   - Webhook response süresi 10 saniyeyi geçmemeli
   - Uzun işlemler için async processing kullanın

3. **Authentication**:
   - Gerekirse webhook'a authentication ekleyin
   - Bearer token veya API key kullanın

## 📊 Anket Yönetimi

### Yeni Anket Ekleme

1. **surveys.json dosyasını açın**:
```json
{
  "surveys": [
    // Mevcut anketler...
    {
      "id": "gozdeanket4",
      "title": "Yeni Anket Başlığı",
      "description": "Anket açıklaması",
      "webhookUrl": "https://demirhanem.com.tr/webhook/gozdeanket4",
      "fields": [
        {
          "name": "firstName",
          "type": "text",
          "label": "Ad",
          "required": true,
          "validation": { "minLength": 2 }
        },
        {
          "name": "lastName",
          "type": "text",
          "label": "Soyad",
          "required": true,
          "validation": { "minLength": 2 }
        },
        {
          "name": "departmentClass",
          "type": "text",
          "label": "Bölüm - Sınıf",
          "required": true,
          "placeholder": "Örn: İlk ve Acil Yardım - 2. Sınıf"
        },
        {
          "name": "email",
          "type": "email",
          "label": "E-posta",
          "required": true,
          "validation": { "pattern": "email" }
        }
      ],
      "customQuestions": [
        {
          "id": "q1",
          "type": "text",
          "label": "Özel soru metni",
          "required": false
        }
      ]
    }
  ]
}
```

2. **n8n'de yeni webhook oluşturun**:
   - Path: `/webhook/gozdeanket4`
   - Veri işleme workflow'unu ayarlayın

3. **Testi yapın**:
   - Anketler sayfasında yeni anketi görün
   - Form doldurup gönderin
   - n8n'de verinin geldiğini kontrol edin

### Anket Düzenleme

**Başlık/Açıklama Değiştirme**:
```json
{
  "id": "gozdeanket1",
  "title": "Güncellenmiş Başlık",  // Değiştir
  "description": "Yeni açıklama",  // Değiştir
  "webhookUrl": "...",
  "fields": [...]
}
```

**Özel Soru Ekleme**:
```json
{
  "customQuestions": [
    {
      "id": "satisfaction",
      "type": "select",
      "label": "Dersten memnuniyet düzeyiniz?",
      "required": true,
      "options": [
        "Çok Memnunum",
        "Memnunum",
        "Kararsızım",
        "Memnun Değilim"
      ]
    }
  ]
}
```

### Anket Silme

1. `surveys.json` dosyasından ilgili anket objesini kaldırın
2. n8n'deki webhook workflow'unu devre dışı bırakın veya silin
3. Değişiklikleri deploy edin

### KVKK Uyumluluk Kontrol Listesi

Yeni anket eklerken kontrol edin:

- [ ] Telefon numarası alanı YOK
- [ ] TCKN alanı YOK
- [ ] Aydınlatma metni checkbox'ı aktif
- [ ] Tüm alanlar için açık label'lar mevcut
- [ ] Email validasyonu aktif
- [ ] Zorunlu alan validasyonları çalışıyor

## 🔧 Bakım ve Güncelleme

### Düzenli Bakım Görevleri

#### Haftalık

- [ ] Webhook endpoint'lerinin çalıştığını kontrol et
- [ ] Form submission'larının başarılı olduğunu doğrula
- [ ] Hata loglarını incele (browser console)

#### Aylık

- [ ] SSL sertifikasının geçerliliğini kontrol et
- [ ] Backup al (tüm dosyalar + surveys.json)
- [ ] Performance metrikleri ölç (Lighthouse)
- [ ] Broken link kontrolü yap
- [ ] Tarayıcı uyumluluğunu test et

#### Üç Aylık

- [ ] Dependency güncellemelerini kontrol et
- [ ] Security audit yap
- [ ] Accessibility audit yap (WAVE, axe)
- [ ] Mobile cihazlarda test et
- [ ] Content güncellemelerini yap (bio, iletişim)

### İçerik Güncelleme

#### Hakkımda Sayfası

`index.html` dosyasında ilgili section'ı bulun:

```html
<section id="hakkimda" class="page-section">
  <div class="container">
    <h2>Hakkımda</h2>
    <div class="bio-content">
      <!-- İçeriği buradan güncelleyin -->
      <p>Güncellenmiş biyografi metni...</p>
    </div>
  </div>
</section>
```

#### İletişim Bilgileri

```html
<section id="iletisim" class="page-section">
  <div class="contact-info">
    <p><strong>E-posta:</strong> yeni.email@istinye.edu.tr</p>
    <p><strong>Ofis:</strong> Yeni ofis bilgisi</p>
    <!-- Sosyal medya linklerini güncelleyin -->
  </div>
</section>
```

### Renk Paleti Değiştirme

`css/variables.css` dosyasını düzenleyin:

```css
:root {
  /* Ana renkler */
  --color-turquoise: #0891b2;      /* Değiştir */
  --color-turquoise-light: #06b6d4;
  --color-turquoise-dark: #0e7490;
  
  --color-orange: #f97316;          /* Değiştir */
  --color-orange-light: #fb923c;
  --color-orange-dark: #ea580c;
}
```

### Performance Optimizasyonu

**CSS Minify**:
```bash
# cssnano ile
npx cssnano css/styles.css css/styles.min.css
```

**JavaScript Minify**:
```bash
# terser ile
npx terser js/forms.js -o js/forms.min.js
```

**Image Optimization**:
```bash
# imagemin ile
npx imagemin assets/images/* --out-dir=assets/images/optimized
```

### Hata Ayıklama

**Form gönderilmiyor**:
1. Browser console'da hata var mı kontrol edin
2. Network tab'da webhook request'i görüyor musunuz?
3. CORS hatası var mı?
4. Webhook URL doğru mu?

**Animasyonlar çalışmıyor**:
1. `animations.js` yüklendi mi?
2. Intersection Observer destekleniyor mu?
3. CSS animation class'ları doğru mu?

**Responsive tasarım bozuk**:
1. `responsive.css` yüklendi mi?
2. Viewport meta tag mevcut mu?
3. Media query breakpoint'leri doğru mu?

### Backup Stratejisi

**Otomatik Backup** (cPanel/hosting):
```bash
# Günlük backup
0 2 * * * tar -czf /backups/gozdeeksi-$(date +\%Y\%m\%d).tar.gz /var/www/gozdeeksi
```

**Manuel Backup**:
1. Tüm dosyaları indirin (FTP/SFTP)
2. `surveys.json` dosyasını ayrıca yedekleyin
3. Database varsa export alın
4. Tarih etiketli klasöre kaydedin

### Güvenlik Güncellemeleri

**Headers Ekleyin** (.htaccess):
```apache
# Security headers
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"
```

**CSP (Content Security Policy)**:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline'; 
               connect-src 'self' https://demirhanem.com.tr;">
```

## 🌐 Tarayıcı Desteği

### Desteklenen Tarayıcılar

| Tarayıcı | Minimum Versiyon | Test Edildi |
|----------|------------------|-------------|
| Chrome   | 90+              | ✅          |
| Firefox  | 88+              | ✅          |
| Safari   | 14+              | ✅          |
| Edge     | 90+              | ✅          |
| Opera    | 76+              | ✅          |

### Mobile Tarayıcılar

| Tarayıcı        | Minimum Versiyon | Test Edildi |
|-----------------|------------------|-------------|
| Chrome Mobile   | 90+              | ✅          |
| Safari iOS      | 14+              | ✅          |
| Samsung Internet| 14+              | ✅          |

### Bilinen Sorunlar

- **IE 11**: Desteklenmiyor (ES6+ kullanımı nedeniyle)
- **Safari < 14**: CSS Grid bazı özellikleri desteklemiyor
- **Firefox < 88**: Intersection Observer performans sorunları

## 📞 Destek ve İletişim

### Teknik Destek

- **Email**: [teknik-destek-email]
- **GitHub Issues**: [repository-url]/issues

### Dokümantasyon

- **Spec Dosyaları**: `.kiro/specs/gozde-eksi-portfolio-website/`
- **Requirements**: `requirements.md`
- **Design**: `design.md`
- **Tasks**: `tasks.md`

### Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje [Lisans Türü] altında lisanslanmıştır.

## 🙏 Teşekkürler

- İstinye Üniversitesi
- n8n webhook platform
- Tüm katkıda bulunanlar

---

**Son Güncelleme**: Aralık 2024  
**Versiyon**: 1.0.0  
**Geliştirici**: [Geliştirici Adı]
