
# WEB TEAM PROFILE KELOMPOK 3

Dibuatnya web ini ialah untuk membantu mencapai kesehatan optimal dan tubuh impian.

## Struktur dan Penjelasan Proyek

### 1. Struktur HTML
HTML (HyperText Markup Language) adalah fondasi dari setiap website. Struktur HTML mencakup penggunaan elemen-elemen seperti header, paragraf, gambar, tautan, dan formulir. Menggunakan tag HTML yang semantik, seperti `<header>`, `<nav>`, `<main>`, `<section>`, dan `<footer>`, dapat membantu membuat website lebih mudah dipahami oleh browser dan mesin pencari.

**Penerapan pada Website "Grup3":**
- **Struktur Utama:**
  - `<!DOCTYPE html>`: Deklarasi HTML5 dengan bahasa diatur ke Indonesia (`<html lang="id">`).
  - `<head>`: Metadata halaman, font Rubik dari Google Fonts, dan koneksi ke file CSS eksternal.
- **Body:**
  - Overlay: `div` kosong untuk efek latar transparan.
  - Header: Kontainer dengan nama grup dan navigasi menuju halaman kalkulator dan tentang tim.
- **Konten Utama:**
  - Judul dan Deskripsi: `<h1>` untuk judul, `<p>` untuk deskripsi singkat tentang kalkulator BMR.
  - Form Kalkulator BMR: Form input untuk berat, tinggi, usia, jenis kelamin, dan tingkat aktivitas.
  - Tombol Hitung: Tombol submit untuk kalkulasi BMR yang diproses melalui JavaScript.
  - Bagian Informasi BMR: `div` terpisah untuk memberikan informasi tambahan tentang BMR.
- **Halaman Tentang Kami:**
  - Profil Tim: `div` untuk setiap anggota dengan foto, nama, dan media sosial.
- **Footer:**
  - Menyertakan tautan media sosial dan hak cipta, serta pengaturan agar konten footer responsif dan rapi.

### 2. Desain CSS
CSS (Cascading Style Sheets) adalah bahasa untuk mendesain dan menata tampilan website. Dengan CSS, kita dapat mengubah warna, font, tata letak, ukuran, dan bahkan menambahkan animasi.

**Penerapan pada Website "Grup3":**
- **Body:** Latar belakang gambar tetap, font Rubik, margin/padding dihilangkan untuk tampilan penuh.
- **Overlay:** Transparan hitam untuk kontras dengan teks.
- **Header & Navigasi:** Menggunakan Flexbox, warna cerah dengan efek hover dan bayangan teks.
- **Konten Utama:** Form kalkulator BMR di kontainer dengan latar belakang transparan, radius sudut, dan bayangan.
- **Tombol:** Lebar penuh, warna biru dengan efek hover yang membuatnya transparan.
- **Bagian Informasi:** Teks besar, kecerahan tinggi untuk keterbacaan.
- **Animasi:** Transisi halus untuk elemen konten dan navigasi.
- **Footer:** Latar belakang hitam semi-transparan, Flexbox untuk menata tautan media sosial dan hak cipta.

### 3. Kreativitas dan Desain
Kreativitas dalam desain website melibatkan pemilihan tema, warna, tata letak, dan elemen visual yang menarik, tetapi tetap mudah digunakan.

**Penerapan pada Website "Grup3":**
- **Pemilihan Tema Warna:** Menggunakan kombinasi warna serasi dan konsisten di seluruh website untuk kesan profesional. Misalnya, warna biru muda untuk kesan tenang dan terpercaya, serta warna hitam untuk kesan profesional.
- **Tipografi yang Menarik:** Pemilihan font Rubik untuk tampilan profesional dan minimalis.
- **Animasi dan Transisi Halus:** Memberikan efek transisi halus setiap ganti halaman atau saat pengguna meng-hover pada elemen tertentu, seperti tombol navigasi dan tombol Hitung BMR.

### 4. Dokumentasi dan SRS
Dokumentasi dan Software Requirement Specification (SRS) penting untuk menjelaskan setiap bagian dan fungsi dari website, serta memberikan panduan pengembangan.

**Penerapan pada Website "Grup3":**
- **Dokumentasi:**
  - **Tujuan Website:** Kalkulator Basal Metabolic Rate (BMR) yang membantu pengguna menghitung kebutuhan kalori dasar.
  - **Struktur Navigasi:**
    - **Kalkulator BMR:** Menyediakan form untuk menghitung BMR berdasarkan input pengguna.
    - **Tentang Kami:** Memuat profil anggota tim pengembang.
  - **File dan Kode Utama:**
    - `index.html`: Struktur dasar halaman utama dengan form input untuk perhitungan BMR.
    - `styles.css`: Gaya tampilan halaman, termasuk latar belakang, header, navigasi, dan animasi.
    - `script.js`: Fungsi interaktif untuk menghitung BMR dan menampilkan hasilnya.
    - `tentang-kami.html`: Profil tim pengembang dengan nama, foto, dan media sosial.
    - `tk.css`: Gaya tampilan halaman Tentang Kami.
  - **Desain dan Gaya Tampilan:** Mengatur tampilan menggunakan CSS untuk layout, animasi, dan gaya tombol serta form input.

- **SRS (Software Requirements Specification):**
  - **Tujuan:** Memberikan panduan lengkap untuk pengembangan website kalkulator BMR.
  - **Perspektif Produk:** Website ini berfungsi tanpa backend, semua perhitungan dilakukan di frontend dengan HTML, CSS, dan JavaScript.
  - **Fungsi Utama:**
    - **Kalkulator BMR:** Menghitung BMR berdasarkan rumus Harris-Benedict.
    - **Profil Tim:** Menyediakan informasi dan media sosial pengembang.
  - **Karakteristik Pengguna:** Untuk pengguna yang tertarik dengan kesehatan dan kalori harian.
  - **Batasan:** Website offline dan optimal untuk desktop.
  - **Kebutuhan Fungsional dan Non-Fungsional:**
    - **Kebutuhan Fungsional:** Detail form input untuk kalkulator dan informasi tim.
    - **Non-Fungsional:** Aspek keamanan, kompatibilitas, dan desain responsif.
  - **Desain Antarmuka:** Halaman kalkulator yang mudah dipahami.
  - **Persyaratan Implementasi:** Menggunakan HTML, CSS, dan JavaScript.

### 5. Fungsionalitas JavaScript
JavaScript digunakan untuk membuat website lebih interaktif dengan menambahkan fungsionalitas yang dapat berinteraksi langsung dengan pengguna.

**Penerapan pada Website "Grup3":**
- **Perhitungan BMR:** Menggunakan JavaScript untuk mengambil input dari pengguna, mengolahnya menggunakan rumus BMR, dan menampilkan hasilnya.
- **Validasi Input:** Memastikan pengguna hanya memasukkan angka yang valid.
- **Umpan Balik Dinamis:** Menampilkan pesan kesalahan atau informasi sesuai input pengguna.

## Akses Website
Pengunjung bisa mengakses website dengan mengklik tautan berikut:
[https://nagantnia.github.io/index.html](https://nagantnia.github.io/index.html)
