# TODO: Pelestarian Budaya Indonesia - Progress Tracker

## ✅ Selesai
- [x] Tambah 60 data budaya (dari 30 menjadi 60 item, 10 per region)
- [x] Implementasi quiz dengan animasi modern
  - [x] CSS styles untuk quiz section (buttons, questions, options, feedback)
  - [x] Hover dan click animations untuk tombol
  - [x] Fade-in animation untuk quiz questions
  - [x] Slide-in animation untuk answer options
  - [x] Smooth feedback animations (correct/incorrect)
  - [x] Animate progress bar
  - [x] Transition effects untuk quiz results
  - [x] Test animations di berbagai devices

## 📋 TODO: Menambahkan Gambar untuk Budaya
- [ ] Download atau ambil gambar untuk semua budaya dari internet
  - Sumber gratis: Google Images, Unsplash, Pixabay, Wikimedia Commons
  - Pastikan gambar bebas lisensi atau dengan lisensi yang sesuai
  
- [ ] Tempat untuk menyimpan gambar:
  - Buat folder `images/` atau `assets/` di root project
  - Simpan gambar dengan nama yang sesuai dengan `img` field di script.js
  
- [ ] Persiapan file gambar:
  - Format: JPG, PNG (JPG lebih ringan untuk loading)
  - Ukuran optimal: 400-600px lebar
  - Kompresi gambar agar tidak terlalu besar
  
## 🔗 Link Panduan Menambahkan Gambar
- Buka file `placeholders.html` untuk melihat daftar lengkap budaya dan nama file gambar yang dibutuhkan
- Setiap budaya menampilkan:
  - Nama budaya
  - Region & kategori
  - Nama file yang harus digunakan (gunakan tombol "Copy Nama File")
  - Emoji yang merepresentasikan budaya

## 📸 Langkah-langkah:
1. Buka `placeholders.html` di browser (untuk referensi visual)
2. Untuk setiap budaya, cari gambar berkualitas tinggi:
   - Google Images → filter by usage rights → Download
   - Unsplash.com → cari budaya → download free
   - Pixabay.com → cari → download
   - Wikimedia Commons → search → download
3. Rename gambar sesuai nama file yang ditunjukkan
4. Taruh di folder `images/` (buat folder jika belum ada)
5. Update path di `script.js` jika diperlukan (dari "nama.jpg" menjadi "images/nama.jpg")
6. Test di browser untuk memastikan gambar muncul

## 🎯 Prioritas Gambar:
### High Priority (Popular budaya):
- Tari Saman, Tari Piring, Wayang Kulit, Batik, Tari Kecak
- Rumah Gadang, Tongkonan, Rendang, Babi Guling

### Medium Priority:
- Semua tarian lainnya
- Arsitektur tradisional
- Alat musik tradisional
- Kain tradisional

### Low Priority:
- Upacara adat (sulit cari foto berkualitas)
- Warisan tradisional individual
- Atribut adat

## 💡 Tips:
- Gunakan advanced search di Google Images untuk filter quality
- Pilih gambar landscape (lebar > tinggi) untuk UI yang lebih baik
- Kompres gambar menggunakan TinyPNG atau Squoosh untuk web
- Konsistenkan style foto (jika mungkin gunakan foto dari museum/dokumentasi resmi)
