# Google Sheets Duyuru Şablonu

## 📋 Sheets Yapısı

Aşağıdaki yapıyı Google Sheets'inize kopyalayın:

### İlk Satır (Başlık Satırı)

| Başlık | Tarih | Saat | Özet | İçerik | Aktif |
|--------|-------|------|------|--------|-------|

### Örnek Veriler

| Başlık | Tarih | Saat | Özet | İçerik | Aktif |
|--------|-------|------|------|--------|-------|
| Yeni Dönem Ofis Saatleri | 15/01/2025 | 09:00 | Bahar dönemi ofis saatlerim güncellendi. Randevu almak için lütfen e-posta ile iletişime geçin. | Değerli öğrenciler, 2025 Bahar dönemi ofis saatlerim Pazartesi ve Çarşamba günleri 14:00-16:00 arası olarak belirlenmiştir. Randevu almak için en az bir gün öncesinden gozde.eksi@istinye.edu.tr adresine e-posta göndermenizi rica ederim. Acil durumlar için ofis telefon numaramdan ulaşabilirsiniz. | Evet |
| Araştırma Projesi Başvuruları | 10/01/2025 | 14:30 | Lisans öğrencileri için araştırma projesi başvuruları başladı. | Lisans öğrencilerimize yönelik araştırma projesi başvuruları 10 Ocak - 31 Ocak tarihleri arasında kabul edilecektir. Proje konuları ilk ve acil yardım, halk sağlığı ve aile sağlığı alanlarını kapsamaktadır. İlgilenen öğrencilerin CV ve motivasyon mektubunu e-posta ile göndermeleri gerekmektedir. Seçilen öğrenciler 1 Şubat'ta duyurulacaktır. | Evet |
| Konferans Duyurusu | 05/01/2025 | 10:15 | 25 Ocak'ta düzenlenecek konferansa davetlisiniz. | İstinye Üniversitesi Sağlık Hizmetleri Meslek Yüksekokulu tarafından düzenlenen 'Acil Sağlık Hizmetlerinde Yenilikler' konulu konferansa tüm öğrenci ve akademisyenlerimiz davetlidir. Konferans 25 Ocak 2025 Cumartesi günü saat 10:00'da Topkapı Kampüsü Konferans Salonu'nda gerçekleştirilecektir. Katılım ücretsizdir ancak kayıt zorunludur. | Evet |
| Ders Materyalleri Güncellendi | 20/12/2024 | 16:45 | İlk ve Acil Yardım dersi için yeni materyaller sisteme yüklendi. | İlk ve Acil Yardım dersi için hafta 3-4 ders materyalleri sisteme yüklenmiştir. Öğrencilerin materyalleri indirip haftalık okuma ödevlerini tamamlamaları beklenmektedir. Sorularınız için ofis saatlerimde veya e-posta ile ulaşabilirsiniz. | Evet |
| Sınav Tarihleri Açıklandı | 15/12/2024 | 11:00 | 2025 Bahar dönemi ara sınav ve final tarihleri belirlendi. | 2025 Bahar dönemi sınav takvimi açıklanmıştır:\n\nAra Sınav: 17-21 Mart 2025\nFinal Sınavı: 19-30 Mayıs 2025\nBütünleme Sınavı: 2-6 Haziran 2025\n\nSınav programı detayları öğrenci portalında yayınlanacaktır. Öğrencilerin sınav tarihlerini takip etmeleri ve çakışma durumunda en geç 1 Mart'a kadar başvuruda bulunmaları gerekmektedir. | Evet |

## 📝 Sütun Açıklamaları

### 1. Başlık (Zorunlu)
- **Tip:** Metin
- **Maksimum:** 200 karakter
- **Örnek:** "Yeni Dönem Ofis Saatleri"
- **Açıklama:** Duyurunun kısa ve öz başlığı

### 2. Tarih (Zorunlu)
- **Tip:** Tarih veya Metin
- **Format:** DD/MM/YYYY
- **Örnek:** 15/01/2025
- **Açıklama:** Duyurunun yayınlanma tarihi

### 3. Saat (Zorunlu)
- **Tip:** Metin
- **Format:** HH:MM
- **Örnek:** 09:00, 14:30
- **Açıklama:** Duyurunun yayınlanma saati

### 4. Özet (Zorunlu)
- **Tip:** Metin
- **Maksimum:** 150 karakter
- **Örnek:** "Bahar dönemi ofis saatlerim güncellendi."
- **Açıklama:** Duyurunun kısa özeti (kart görünümünde gösterilir)

### 5. İçerik (Zorunlu)
- **Tip:** Metin (Uzun)
- **Maksimum:** Sınırsız
- **Örnek:** "Değerli öğrenciler, 2025 Bahar dönemi..."
- **Açıklama:** Duyurunun detaylı içeriği (popup'ta gösterilir)
- **Not:** Satır atlamak için \n kullanabilirsiniz

### 6. Aktif (Opsiyonel)
- **Tip:** Metin veya Boolean
- **Değerler:** "Evet", "Hayır", TRUE, FALSE
- **Varsayılan:** Evet (boş bırakılırsa)
- **Örnek:** Evet
- **Açıklama:** Duyurunun sitede görünüp görünmeyeceği

## 🎨 Sheets Formatlaması (Opsiyonel)

Daha iyi görünüm için:

1. **Başlık satırını** (1. satır) kalın yapın ve arka plan rengi verin
2. **Tarih sütununu** tarih formatına çevirin
3. **Aktif sütununa** koşullu biçimlendirme ekleyin:
   - "Evet" → Yeşil arka plan
   - "Hayır" → Kırmızı arka plan

## 🔗 Hızlı Başlangıç

1. Bu şablonu kopyalayın
2. Google Sheets'inize yapıştırın
3. Kendi duyurularınızı ekleyin
4. Sheets'i "Web'de yayınla" ile yayınlayın
5. Herkese açık yapın (Görüntüleyici)
6. Site otomatik olarak güncellenecektir!

## ⚠️ Önemli Notlar

- İlk satır mutlaka başlık satırı olmalıdır
- Sütun sırası değiştirilmemelidir
- Boş satırlar otomatik olarak atlanır
- Tarih formatı DD/MM/YYYY olmalıdır
- Saat formatı HH:MM olmalıdır (24 saat formatı)

## 📊 Mevcut Sheets

Şu anda kullanılan Sheets:
- **ID:** 1FXAumUTfYi0Q4XInTnF4oext2YobLw2rm3DoNsQHwJ0
- **URL:** https://docs.google.com/spreadsheets/d/1FXAumUTfYi0Q4XInTnF4oext2YobLw2rm3DoNsQHwJ0/edit

Bu Sheets'i düzenleyerek duyurularınızı yönetebilirsiniz!
