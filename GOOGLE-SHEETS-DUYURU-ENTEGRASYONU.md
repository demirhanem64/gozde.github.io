# Google Sheets Duyuru Entegrasyonu

## 📋 Genel Bakış

Bu entegrasyon, gozdeeksi.com.tr sitesindeki duyuruların Google Sheets'ten otomatik olarak çekilmesini sağlar. Artık duyuruları güncellemek için kod değiştirmenize gerek yok - sadece Google Sheets'i düzenleyin!

## 🎯 Özellikler

- ✅ Google Sheets'ten otomatik veri çekme
- ✅ 5 dakikalık akıllı önbellekleme (cache)
- ✅ Hata durumunda fallback mekanizması
- ✅ Aktif/Pasif duyuru kontrolü
- ✅ Otomatik tarih ve saat formatlaması

## 📊 Google Sheets Yapılandırması

### Adım 1: Sheets Yapısı

Google Sheets tablonuzda aşağıdaki sütunlar olmalıdır (tam olarak bu sırayla):

| Başlık | Tarih | Saat | Özet | İçerik | Aktif Mi? |
|--------|-------|------|------|--------|-------|
| Yeni Dönem Başladı | 15/01/2025 | 09:00 | Kısa özet buraya | Detaylı içerik buraya | Evet |
| Sınav Tarihleri | 10/01/2025 | 14:30 | Sınav tarihleri açıklandı | Detaylı sınav bilgileri | Evet |

**Sütun Açıklamaları:**

1. **Başlık** (Zorunlu): Duyuru başlığı (max 200 karakter)
2. **Tarih** (Zorunlu): DD/MM/YYYY formatında (örn: 15/01/2025)
3. **Saat** (Zorunlu): HH:MM formatında (örn: 09:00)
4. **Özet** (Zorunlu): Kısa özet (max 150 karakter)
5. **İçerik** (Zorunlu): Detaylı duyuru içeriği
6. **Aktif Mi?* (Opsiyonel): "Evet" veya "Hayır" (boş bırakılırsa "Evet" kabul edilir)

### Adım 2: Google Sheets'i Web'e Yayınlama

1. Google Sheets dosyanızı açın: https://docs.google.com/spreadsheets/d/1FXAumUTfYi0Q4XInTnF4oext2YobLw2rm3DoNsQHwJ0/edit

2. **Dosya** menüsünden **Paylaş** → **Web'de yayınla** seçeneğine tıklayın

3. Açılan pencerede:
   - **Yayınlanacak içerik**: "Tüm belge" veya sadece kullandığınız sayfayı seçin
   - **Format**: "Web sayfası" seçili olmalı
   - **Yayınla** butonuna tıklayın

4. ⚠️ **ÖNEMLİ**: Sheets'in herkese açık olması gerekiyor. Bunun için:
   - Sağ üstteki **Paylaş** butonuna tıklayın
   - "Genel erişim" bölümünde **"Bağlantıya sahip olan herkes"** seçeneğini seçin
   - Rol olarak **"Görüntüleyici"** seçin
   - **Bitti** butonuna tıklayın

### Adım 3: Sheets ID'yi Kontrol Etme

Google Sheets URL'inizden ID'yi alın:
```
https://docs.google.com/spreadsheets/d/[BURASI_SHEETS_ID]/edit
```

Örnek:
```
https://docs.google.com/spreadsheets/d/1FXAumUTfYi0Q4XInTnF4oext2YobLw2rm3DoNsQHwJ0/edit
```

Bu örnekte Sheets ID: `1FXAumUTfYi0Q4XInTnF4oext2YobLw2rm3DoNsQHwJ0`

Bu ID zaten `js/announcements.js` dosyasında tanımlı. Farklı bir Sheets kullanacaksanız, dosyayı düzenleyin:

```javascript
// js/announcements.js dosyasında
const SPREADSHEET_ID = 'BURAYA_KENDI_SHEETS_ID_NIZI_GIRIN';
const SHEET_NAME = 'Sheet1'; // Sayfa adınız farklıysa değiştirin
```

## 🚀 Kullanım

### Yeni Duyuru Ekleme

1. Google Sheets'i açın
2. Yeni bir satır ekleyin
3. Tüm zorunlu alanları doldurun
4. "Aktif" sütununa "Evet" yazın
5. Kaydedin
6. Site 5 dakika içinde otomatik olarak güncellenecektir

### Duyuru Güncelleme

1. Google Sheets'te ilgili satırı bulun
2. Değişiklik yapın
3. Kaydedin
4. Site 5 dakika içinde güncellenecektir

### Duyuru Silme/Gizleme

1. Google Sheets'te ilgili satırı bulun
2. "Aktif" sütununa "Hayır" yazın
3. Kaydedin
4. Duyuru artık sitede görünmeyecektir

### Manuel Yenileme

Eğer değişikliklerin hemen görünmesini istiyorsanız:

1. Tarayıcınızın geliştirici konsolunu açın (F12)
2. Console sekmesine gidin
3. Şu komutu çalıştırın:

```javascript
// Cache'i temizle ve yeniden yükle
const sheetsIntegration = new GoogleSheetsIntegration('1FXAumUTfYi0Q4XInTnF4oext2YobLw2rm3DoNsQHwJ0', 'Sheet1');
sheetsIntegration.clearCache();
location.reload();
```

## 🔧 Teknik Detaylar

### Cache Mekanizması

- Veriler 5 dakika boyunca önbellekte tutulur
- Bu süre içinde Google Sheets'e tekrar istek atılmaz
- Performans ve Google API limitlerini korur

### Hata Yönetimi

Eğer Google Sheets'ten veri çekilemezse:

1. Önce önbellekteki eski veriler kullanılır
2. Önbellek de yoksa, fallback seed data kullanılır
3. Konsola hata mesajı yazılır

### Tarih Formatları

Sistem şu tarih formatlarını destekler:

- `DD/MM/YYYY` (örn: 15/01/2025)
- Google Sheets otomatik tarih formatı

### Saat Formatları

- `HH:MM` (örn: 09:00, 14:30)
- Sadece saat (örn: 9) → otomatik olarak 09:00'a çevrilir

### Duyuru Sıralaması

- Duyurular tarih ve saat bilgilerine göre sıralanır
- Tarih ve saat aynıysa, önceki duyuru önce gelir
- Son eklenen duyuru önce gelir

### Duyuru Başlıkları
- Duyuru başlıklarının başına numaralandırma yapılmayacak şekilde 100 karakter sınırı var

## 🐛 Sorun Giderme

### Duyurular Görünmüyor

1. **Google Sheets erişimi kontrol edin:**
   - Sheets herkese açık mı?
   - "Bağlantıya sahip olan herkes" görüntüleyebiliyor mu?

2. **Tarayıcı konsolunu kontrol edin:**
   - F12 tuşuna basın
   - Console sekmesine gidin
   - Hata mesajları var mı?

3. **Sheets yapısını kontrol edin:**
   - Sütun sırası doğru mu?
   - İlk satır başlık satırı mı?
   - Zorunlu alanlar dolu mu?

4. **Cache'i temizleyin:**
   ```javascript
   localStorage.clear();
   location.reload();
   ```

### Değişiklikler Görünmüyor

1. **5 dakika bekleyin** (cache süresi)
2. Veya manuel olarak cache'i temizleyin (yukarıdaki komutu kullanın)
3. Sayfayı yenileyin (Ctrl+F5 veya Cmd+Shift+R)

### CORS Hatası

Eğer konsolda CORS hatası görüyorsanız:

1. Google Sheets'in "Web'de yayınla" özelliğini kullandığınızdan emin olun
2. Sheets'in herkese açık olduğunu kontrol edin
3. Doğru Sheets ID'yi kullandığınızdan emin olun

## 📝 Örnek Veri

İşte örnek bir Google Sheets satırı:

| Başlık | Tarih | Saat | Özet | İçerik | Aktif |
|--------|-------|------|------|--------|-------|
| Yeni Dönem Ofis Saatleri | 15/01/2025 | 09:00 | Bahar dönemi ofis saatlerim güncellendi. | Değerli öğrenciler, 2025 Bahar dönemi ofis saatlerim Pazartesi ve Çarşamba günleri 14:00-16:00 arası olarak belirlenmiştir. Randevu almak için lütfen e-posta ile iletişime geçin. | Evet |

## 🔐 Güvenlik Notları

- Google Sheets sadece **görüntüleme** yetkisiyle paylaşılmalıdır
- Kimse düzenleme yetkisine sahip olmamalıdır (sizin dışınızda)
- Hassas bilgiler Sheets'e konulmamalıdır (herkes görebilir)

## 📞 Destek

Sorun yaşarsanız:

1. Bu dokümandaki "Sorun Giderme" bölümünü kontrol edin
2. Tarayıcı konsolundaki hata mesajlarını inceleyin
3. Google Sheets yapılandırmasını tekrar gözden geçirin

## 🎉 Başarılı Kurulum

Eğer her şey doğru çalışıyorsa, tarayıcı konsolunda şu mesajı görmelisiniz:

```
✅ X duyuru Google Sheets'ten yüklendi
```

Artık duyurularınızı Google Sheets'ten yönetebilirsiniz! 🚀
