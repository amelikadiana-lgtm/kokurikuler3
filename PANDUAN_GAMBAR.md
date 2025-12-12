# 📸 Panduan Lengkap Menambahkan Gambar untuk Website Budaya

## 🎯 Tujuan
Website ini membutuhkan **60 gambar** untuk 60 budaya Indonesia yang berbeda. Panduan ini menjelaskan cara menambahkan gambar dengan efisien.

---

## 📂 Struktur Folder

Saat ini struktur project Anda:
```
kokulikuler.web/
├── index.html
├── batik-penting.html
├── cara-melestarikan.html
├── script.js
├── styles.css
├── TODO.md
└── placeholders.html (baru - untuk referensi)
```

**Tambahkan folder baru:**
```
kokulikuler.web/
├── images/              ← BUAT FOLDER BARU INI
│   ├── saman2.jpg
│   ├── tari-piring.jpg
│   ├── batik.jpg
│   └── ... (60 gambar total)
├── ... (file lainnya)
```

---

## 🔍 Cara Menemukan Gambar

### **Opsi 1: Google Images (Gratis, Mudah)**
1. Buka https://www.google.com/images
2. Cari budaya, contoh: "Tari Saman Indonesia"
3. Klik **Tools** → **Usage Rights** → **Creative Commons & similar licenses**
4. Pilih gambar berkualitas tinggi, klik untuk preview
5. Klik kanan → **Save image as**
6. Simpan dengan nama sesuai yang ditunjukkan di `placeholders.html`

### **Opsi 2: Unsplash (Gratis, Kualitas Tinggi)**
1. Buka https://unsplash.com
2. Cari budaya, contoh: "Wayang Kulit"
3. Klik gambar yang disukai
4. Klik **Download** (bebas royalti)
5. Rename ke nama yang sesuai

### **Opsi 3: Pixabay (Gratis, Banyak Pilihan)**
1. Buka https://pixabay.com
2. Cari budaya
3. Download langsung (100% gratis)
4. Rename sesuai nama file di script

### **Opsi 4: Pexels (Gratis, Kualitas Premium)**
1. Buka https://pexels.com
2. Cari budaya
3. Download langsung
4. Rename file

### **Opsi 5: Wikimedia Commons (Dokumentasi Resmi)**
1. Buka https://commons.wikimedia.org
2. Cari budaya spesifik
3. Gunakan foto dari museum atau dokumentasi resmi
4. Download dan rename

---

## 📝 Daftar Lengkap Gambar yang Dibutuhkan

### **SUMATRA (11 gambar)**
Buka file `placeholders.html` untuk melihat visualisasi semua budaya.

**Nama file yang harus digunakan:**
```
1. saman2.jpg.jpg          → Tari Saman
2. tari-piring.jpg         → Tari Piring
3. melayu-deli.jpg         → Tari Melayu Deli
4. gelang-alas.jpg         → Tari Gelang Alas
5. zapin.jpg               → Tari Zapin
6. gadang.jpg.jpg          → Rumah Gadang
7. istana-maimun.jpg       → Istana Maimun
8. boang.jpg               → Rumah Boang Aceh
9. rendang.jpg             → Rendang
10. gulai-tambusu.jpg      → Gulai Tambusu
11. ulos.jpg               → Ulos Batak
```

### **JAWA (10 gambar)**
```
12. wayang2.jpg.jpg        → Wayang Kulit
13. batik.jpg              → Batik
14. reog.jpg               → Reog Ponorogo
15. angklung.jpg           → Angklung
16. keris.jpg              → Keris
17. wayang-orang.jpg       → Wayang Orang
18. gamelan-jawa.jpg       → Gamelan Jawa
19. lurik.jpg              → Kain Lurik
20. serimpi.jpg            → Tari Serimpi
21. gunungan.jpg           → Gunungan Wayang
```

### **KALIMANTAN (10 gambar)**
```
22. betang.jpg             → Rumah Betang
23. tari-gong.jpg          → Tari Gong
24. mandau.jpg             → Mandau
25. ikat-dayak.jpg         → Tenun Ikat Dayak
26. tiwah.jpg              → Upacara Tiwah
27. hudoq.jpg              → Tari Hudoq
28. pahat-dayak.jpg        → Seni Pahat Dayak
29. tambi-halu.jpg         → Rumah Tambi Halu
30. sago-lempeng.jpg       → Sago Lempeng
31. anyaman-rotan.jpg      → Anyaman Rotan Dayak
```

### **SULAWESI (10 gambar)**
```
32. tongkonan.jpg          → Tongkonan
33. pakarena.jpg           → Tari Pakarena
34. rambu-solo.jpg         → Rambu Solo
35. tenun-toraja.jpg       → Tenun Toraja
36. bugis.jpg              → Pakaian Adat Bugis
37. cakalele.jpg           → Tari Cakalele
38. batik-makassar.jpg     → Batik Makassar
39. gong-toraja.jpg        → Gong Toraja
40. coto-makassar.jpg      → Coto Makassar
41. poco-poco.jpg          → Tari Poco-Poco
```

### **BALI & NUSA TENGGARA (10 gambar)**
```
42. kecak.jpg.jpg          → Tari Kecak
43. barong.jpg             → Tari Barong
44. penglipuran.jpg        → Penglipuran
45. gringsing.jpg          → Tenun Gringsing
46. gamelan-bali.jpg       → Gamelan Bali
47. legong.jpg             → Tari Legong
48. besakih.jpg            → Pura Besakih
49. lontar.jpg             → Lontar Bali
50. babi-guling.jpg        → Babi Guling
51. pendet.jpg             → Tari Pendet
```

### **PAPUA (10 gambar)**
```
52. honai.jpg              → Rumah Honai
53. tifa.jpg               → Tifa
54. yospan.jpg             → Tari Yospan
55. asmat.jpg              → Seni Ukir Asmat
56. koteka.jpg             → Koteka
57. poco-poco-papua.jpg    → Tari Poco-Poco Papua
58. noken.jpg              → Noken Papua
59. kariwari.jpg           → Rumah Kariwari
60. papeda.jpg             → Papeda
// 'Tari Tebus Sayap' telah dihapus dari daftar (tidak lagi digunakan)
```

---

## 🚀 Langkah-Langkah Instalasi Gambar

### **Langkah 1: Buat Folder Images**
1. Buka File Explorer
2. Navigasi ke: `C:\Users\Dian Novitaria\OneDrive\Documents\kokulikuler.web\`
3. Klik kanan → **New** → **Folder**
4. Rename menjadi `images`

### **Langkah 2: Download Gambar**
Lakukan untuk setiap budaya:

1. **Cari gambar** di Google, Unsplash, atau sumber lain
2. **Download** ke folder `Downloads` sementara
3. **Rename** dengan nama file dari daftar di atas
   - Contoh: `Wayang Kulit Performance.jpg` → `wayang2.jpg.jpg`
4. **Pindahkan** ke folder `images`

### **Langkah 3: Optimasi Gambar (Opsional, tapi Recommended)**
Untuk performa lebih baik:
1. Buka https://squoosh.app
2. Drag & drop gambar
3. Resize ke width 600px
4. Kompres hingga file size < 100KB
5. Download dan replace file lama

### **Langkah 4: Update Path di Script (jika diubah)**
Jika semua gambar di folder `images/`, update `script.js`:

**Cari:**
```javascript
const dataBudaya = [
  { name: "Tari Saman", region: "Sumatra", category: "Tarian", popular: 10, img: "saman2.jpg.jpg", ...}
```

**Ubah menjadi:**
```javascript
const dataBudaya = [
  { name: "Tari Saman", region: "Sumatra", category: "Tarian", popular: 10, img: "images/saman2.jpg.jpg", ...}
```

Atau gunakan script di bawah untuk mengupdate semuanya sekaligus.

---

## 🔧 Script untuk Update Path Otomatis (Optional)

Jika Anda gunakan folder `images/`, buka DevTools (F12) dan jalankan:

```javascript
const dataBudaya_updated = dataBudaya.map(item => ({
  ...item,
  img: item.img.startsWith('images/') ? item.img : 'images/' + item.img
}));

console.log(JSON.stringify(dataBudaya_updated, null, 2));
```

Copy output dan replace di `script.js`.

---

## ✅ Checklist Verifikasi

Setelah menambahkan semua gambar:

- [ ] Folder `images/` dibuat
- [ ] Semua 61 gambar didownload & disimpan
- [ ] Nama file sesuai dengan yang diminta
- [ ] Path di `script.js` sudah benar
- [ ] Test di browser → buka index.html
- [ ] Scroll ke gallery → lihat apakah semua gambar tampil
- [ ] Klik card → modal terbuka dengan gambar yang tepat
- [ ] Test di berbagai screen size (mobile, tablet, desktop)

---

## 💡 Tips & Trik

### **Pencarian Gambar yang Efektif:**
```
Tari Saman → cari: "Tari Saman Aceh" atau "Saman Dance Indonesia"
Batik → cari: "Indonesian Batik" atau "Batik Fabric Pattern"
Wayang Kulit → cari: "Wayang Kulit Performance" atau "Shadow Puppet"
Rumah Gadang → cari: "Rumah Gadang Minangkabau" atau "Traditional House Indonesia"
```

### **Ukuran File Optimal:**
- Lebar: 400-600px
- Tinggi: 300-450px (aspect ratio 4:3 atau 3:2)
- File size: 30-100KB per gambar
- Format: JPG (lebih ringan) atau PNG (jika transparan)

### **Batch Download:**
Gunakan software seperti **Free Download Manager** atau **DownThemAll** untuk download banyak file sekaligus.

### **Konsistensi Visual:**
- Usahakan style foto konsisten (jika bisa gunakan foto dari museum/dokumentasi resmi)
- Hindari gambar dengan watermark besar
- Pilih gambar dengan pencahayaan yang baik

---

## 🎓 Sumber Pembelajaran

- **Google Advanced Image Search**: https://www.google.com/advanced_image_search
- **Unsplash**: https://unsplash.com
- **Pixabay**: https://pixabay.com
- **Pexels**: https://pexels.com
- **Wikimedia Commons**: https://commons.wikimedia.org
- **Image Compression**: https://squoosh.app

---

## 📞 Bantuan

Jika ada pertanyaan:
1. Cek file `placeholders.html` untuk visualisasi semua budaya
2. Buka TODO.md untuk tracking progress
3. Pastikan nama file **PERSIS SAMA** dengan yang di script.js (case-sensitive pada Linux/Mac)

**Selamat mengumpulkan gambar! 🎉**
