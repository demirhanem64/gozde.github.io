# 🚀 Google Sheets Duyuru Entegrasyonu - Hızlı Kurulum

## ✅ Yapılanlar

Google Sheets'ten otomatik duyuru çekme sistemi başarıyla kuruldu!

### Eklenen Dosyalar

1. **js/google-sheets-integration.js** - Google Sheets entegrasyon modülü
2. **GOOGLE-SHEETS-DUYURU-ENTEGRASYONU.md** - Detaylı kullanım kılavuzu
3. **GOOGLE-SHEETS-SABLON.md** - Sheets şablonu ve örnek veriler
4. **test-google-sheets-integration.html** - Test sayfası
5. **index.html** - Güncellendi (Google Sheets script'i eklendi)
6. **js/announcements.js** - Güncellendi (Google Sheets entegrasyonu eklendi)

## 🎯 Nasıl Çalışır?

1. **Google Sheets'te duyuru ekliyorsunuz**
2. **Sistem otomatik olarak çekiyor** (5 dakikada bir)
3. **Sitede görünüyor** (anasayfada duyurular bölümünde)

## 📋 Hemen Başlamak İçin

### Adım 1: Google Sheets'i Hazırlayın

Sheets'iniz zaten var: https://docs.google.com/spreadsheets/d/1FXAumUTfYi0Q4XInTnF4oext2YobLw2rm3DoNsQHwJ0/edit

Şu sütunları ekleyin (tam olarak bu sırayla):

```
Başlık | Tarih | Saat | Özet | İçerik | Aktif
```

### Adım 2: Örnek Veri Ekleyin

```
Yeni Dönem Başladı | 15/01/2025 | 09:00 | Bahar dönemi başladı | Detaylı açıklama buraya | Evet
```

### Adım 3: Sheets'i Yayınlayın

1. **Dosya** → **Paylaş** → **Web'de yayınla**
2. **Yayınla** butonuna tıklayın
3. **Paylaş** butonuna tıklayın
4. **"Bağlantıya sahip olan herkes"** seçin
5. Rol: **"Görüntüleyici"**
6. **Bitti**

### Adım 4: Test Edin

1. `test-google-sheets-integration.html` dosyasını tarayıcıda açın
2. **"Sheets'ten Veri Çek"** butonuna tıklayın
3. Duyurularınızı görmelisiniz!

### Adım 5: Siteyi Açın

1. `index.html` dosyasını tarayıcıda açın
2. Anasayfada duyurular bölümünü kontrol edin
3. Duyurular Google Sheets'ten gelecektir!

## 🎨 Sheets Formatı

| Sütun | Format | Örnek | Zorunlu |
|-------|--------|-------|---------|
| Başlık | Metin (max 200 kar.) | "Yeni Dönem Başladı" | ✅ |
| Tarih | DD/MM/YYYY | 15/01/2025 | ✅ |
| Saat | HH:MM | 09:00 | ✅ |
| Özet | Metin (max 150 kar.) | "Kısa açıklama" | ✅ |
| İçerik | Metin (uzun) | "Detaylı açıklama..." | ✅ |
| Aktif | Evet/Hayır | Evet | ❌ (varsayılan: Evet) |

## 🔧 Özellikler

- ✅ **Otomatik çekme** - 5 dakikada bir güncellenir
- ✅ **Akıllı önbellek** - Performans için cache kullanır
- ✅ **Hata yönetimi** - Sorun olursa eski veriler gösterilir
- ✅ **Aktif/Pasif kontrol** - Duyuruları gizleyebilirsiniz
- ✅ **Tarih sıralama** - En yeni duyurular önce gösterilir

## 💡 Kullanım İpuçları

### Yeni Duyuru Eklemek
1. Google Sheets'i açın
2. Yeni satır ekleyin
3. Tüm alanları doldurun
4. "Aktif" sütununa "Evet" yazın
5. Kaydedin → 5 dakika içinde sitede görünür!

### Duyuru Güncellemek
1. İlgili satırı bulun
2. Değişiklik yapın
3. Kaydedin → 5 dakika içinde güncellenir!

### Duyuru Gizlemek
1. "Aktif" sütununa "Hayır" yazın
2. Kaydedin → Artık sitede görünmez!

### Hemen Güncellemek İstiyorsanız
Tarayıcı konsolunda (F12):
```javascript
localStorage.clear();
location.reload();
```

## 🐛 Sorun Giderme

### Duyurular Görünmüyor?

1. **Sheets erişimini kontrol edin:**
   - Herkese açık mı?
   - "Bağlantıya sahip olan herkes" görüntüleyebiliyor mu?

2. **Test sayfasını kullanın:**
   - `test-google-sheets-integration.html` açın
   - Hata mesajlarını kontrol edin

3. **Tarayıcı konsolunu kontrol edin:**
   - F12 tuşuna basın
   - Console sekmesine gidin
   - Hata var mı?

4. **Cache'i temizleyin:**
   ```javascript
   localStorage.clear();
   location.reload();
   ```

### Değişiklikler Görünmüyor?

- 5 dakika bekleyin (cache süresi)
- Veya yukarıdaki cache temizleme komutunu kullanın

### CORS Hatası?

- "Web'de yayınla" özelliğini kullandığınızdan emin olun
- Sheets'in herkese açık olduğunu kontrol edin

## 📞 Yardım

Detaylı bilgi için:
- **GOOGLE-SHEETS-DUYURU-ENTEGRASYONU.md** - Tam dokümantasyon
- **GOOGLE-SHEETS-SABLON.md** - Sheets şablonu ve örnekler
- **test-google-sheets-integration.html** - Test ve debug aracı

## 🎉 Başarılı Kurulum Kontrolü

Tarayıcı konsolunda şunu görmelisiniz:
```
✅ X duyuru Google Sheets'ten yüklendi
```

Eğer bu mesajı görüyorsanız, her şey çalışıyor demektir! 🚀

---

**Not:** Sheets ID'niz zaten kodda tanımlı:
```
1FXAumUTfYi0Q4XInTnF4oext2YobLw2rm3DoNsQHwJ0
```

Farklı bir Sheets kullanmak isterseniz, `js/announcements.js` dosyasındaki `SPREADSHEET_ID` değişkenini değiştirin.
