# 🇮🇩 Pancasila Web - Platform Pembelajaran Interaktif untuk Anak

Platform edukasi interaktif yang dirancang khusus untuk memperkenalkan nilai-nilai Pancasila kepada anak-anak dengan cara yang menyenangkan dan engaging.

## 🌟 Fitur Utama

### 🏠 **Beranda (Hero)**
- Logo Pancasila dengan efek visual menarik
- Navigasi sederhana ke berbagai fitur
- Animasi background yang lembut dan tidak mengganggu
- Design ramah anak dengan warna-warna cerah

### 📚 **Pembelajaran Interaktif**
- **5 Sila Pancasila** dengan gambar dan penjelasan lengkap
- Layout horizontal untuk kemudahan membaca
- Contoh penerapan setiap sila dalam kehidupan sehari-hari
- Navigasi yang mudah dipahami anak-anak

### 🎵 **Lagu Pancasila**
- Audio player untuk lagu "Garuda Pancasila"
- Lirik yang dapat diikuti bait per bait
- Kontrol musik lengkap (play, pause, volume, progress)
- Layout yang mudah digunakan untuk anak-anak

### 🎮 **Games & Quiz**
- Permainan edukatif tentang Pancasila
- Kuis interaktif untuk menguji pemahaman
- Feedback positif untuk motivasi belajar

## 🚀 Teknologi yang Digunakan

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Audio**: HTML5 Audio API

## 📁 Struktur Proyek

```
project/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Halaman utama
│   │   ├── Navigation.tsx    # Menu navigasi
│   │   ├── Learning.tsx      # Halaman pembelajaran
│   │   ├── Song.tsx          # Halaman lagu
│   │   ├── Games.tsx         # Halaman permainan
│   │   └── Quiz.tsx          # Halaman kuis
│   ├── utils/
│   │   └── pancasilaData.ts  # Data 5 sila Pancasila
│   ├── App.tsx               # Komponen utama
│   └── main.tsx              # Entry point
├── public/
│   ├── Pancasila.png         # Logo Pancasila
│   ├── Sila 1.png           # Gambar sila ke-1
│   ├── Sila 2.png           # Gambar sila ke-2
│   ├── Sila 3.png           # Gambar sila ke-3
│   ├── Sila 4.png           # Gambar sila ke-4
│   ├── Sila 5.png           # Gambar sila ke-5
│   └── Garuda Pancasila - Lagu Nasional Indonesia (dengan Lirik).mp3
├── dist/                     # Build output
├── netlify.toml             # Netlify deployment config
├── vite.config.ts           # Vite configuration
└── README.md
```

## 🛠️ Instalasi & Setup

### Prerequisites
- Node.js (versi 16 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd pancasilaweb/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Siapkan file multimedia**
   Pastikan file-file berikut ada di folder `public/`:
   - `Pancasila.png` - Logo Pancasila
   - `Sila 1.png` sampai `Sila 5.png` - Gambar setiap sila
   - `Garuda Pancasila - Lagu Nasional Indonesia (dengan Lirik).mp3` - File audio lagu

4. **Jalankan development server**
   ```bash
   npm run dev
   ```

5. **Buka browser**
   Akses `http://localhost:5173`

## 🔧 Development & Build

### Scripts
```bash
npm run dev      # Jalankan development server
npm run build    # Build untuk production
npm run preview  # Preview build production
npm run lint     # Lint code dengan ESLint
```

### Build Process
Aplikasi menggunakan Vite untuk build process yang cepat dan optimized:

- **Code Splitting**: Vendor libraries dipisah untuk optimasi caching
- **Asset Optimization**: Gambar dan CSS dioptimasi untuk performa
- **TypeScript**: Full type checking selama build
- **Tree Shaking**: Dead code elimination untuk bundle size yang minimal

### Build Configuration
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          lucide: ['lucide-react'],
        },
      },
    },
  },
});
```

## 🚀 Deployment

### Netlify (Recommended)
1. **Push ke Git repository**
2. **Connect repository ke Netlify**
3. **Konfigurasi build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy otomatis**

### Vercel
1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```
2. **Deploy**:
   ```bash
   vercel --prod
   ```

### GitHub Pages
1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```
2. **Update package.json**:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://username.github.io/repository-name"
   }
   ```
3. **Deploy**:
   ```bash
   npm run build && npm run deploy
   ```

### Manual Deployment
1. **Build project**:
   ```bash
   npm run build
   ```
2. **Upload folder `dist/` ke web hosting**

## 🎨 Design Principles

### Ramah Anak
- **Warna cerah** tapi tidak berlebihan
- **Animasi halus** yang tidak mengganggu fokus
- **Font besar** untuk kemudahan membaca
- **Layout sederhana** dan intuitif

### Responsif
- Desktop dan mobile friendly
- Adaptive layout untuk berbagai ukuran layar
- Touch-friendly buttons untuk perangkat mobile

### Performance
- Lazy loading untuk gambar
- Code splitting untuk faster load times
- Optimized assets untuk bandwidth rendah
- Progressive Web App ready

### Accessibility
- Contrast ratio yang baik
- Navigasi keyboard friendly
- Alternative text untuk gambar
- Screen reader compatible

## 📖 Panduan Penggunaan

### Untuk Anak-anak
1. **Mulai dari Beranda** - Klik tombol yang menarik perhatian
2. **Belajar Sila** - Lihat gambar dan baca penjelasan setiap sila
3. **Dengarkan Lagu** - Nyanyikan bersama lagu Garuda Pancasila
4. **Main Games** - Bermain sambil belajar
5. **Coba Quiz** - Uji pemahaman dengan kuis yang menyenangkan

### Untuk Guru/Orang Tua
- Gunakan sebagai media pembelajaran interaktif
- Dampingi anak saat menggunakan aplikasi
- Diskusikan nilai-nilai Pancasila setelah sesi belajar
- Ajak anak mempraktikkan nilai Pancasila dalam kehidupan sehari-hari

## 🐛 Troubleshooting

### Build Issues
Jika mengalami masalah build:

```bash
# Clear cache
rm -rf node_modules dist
npm install
npm run build
```

### Audio Issues
Jika audio tidak berfungsi:
- Pastikan file audio ada di folder `public/`
- Check browser autoplay policy
- Gunakan HTTPS untuk production

### Asset Loading Issues
Jika gambar tidak muncul:
- Pastikan file ada di folder `public/`
- Check path relatif vs absolut
- Verify file permissions

## 🔧 Structure Pattern
- **Component-based**: Setiap halaman adalah komponen terpisah
- **State management**: Menggunakan React useState untuk state lokal
- **Type safety**: TypeScript untuk mencegah error
- **Modular**: Utility functions dan data terpisah

## 🎯 Target Audience

- **Anak-anak usia 6-12 tahun** sebagai pengguna utama
- **Guru sekolah dasar** sebagai media pembelajaran
- **Orang tua** untuk edukasi di rumah
- **Siswa** untuk belajar mandiri tentang Pancasila

## 🌈 Fitur Khusus

### Audio Player
- Play/Pause dengan visual feedback
- Progress bar interaktif
- Volume control dengan mute
- Time display (current/total)
- Auto-stop ketika lagu selesai

### Pembelajaran Sila
- Gambar visual untuk setiap sila
- Penjelasan sederhana dan mudah dipahami
- Contoh praktis dalam kehidupan sehari-hari
- Navigasi yang mudah antar sila

### Animasi & Visual
- Floating elements dengan opacity rendah
- Smooth transitions pada semua interaksi
- Gradient backgrounds yang lembut
- Icon dan emoji yang mendukung konten

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful component names
- Add comments for complex logic
- Test on multiple browsers
- Ensure responsive design

## 📄 License

Proyek ini dibuat untuk tujuan edukasi tentang Pancasila.

## 👥 Tim Pengembang

Dikembangkan sebagai bagian dari proyek pembelajaran Civic Web - Semester 6 UMS.

## 📞 Support

Jika ada pertanyaan atau masalah:
- Buat issue di repository ini
- Check troubleshooting section
- Review documentation

## 🔄 Updates & Changelog

### Version 1.0.0
- ✅ Initial release
- ✅ 5 Sila Pancasila learning modules
- ✅ Audio player dengan lagu Garuda Pancasila
- ✅ Interactive games dan quiz
- ✅ Responsive design
- ✅ Optimized build process

### Planned Features
- 🔄 More interactive games
- 🔄 Progress tracking
- 🔄 Offline support (PWA)
- 🔄 Multi-language support

---

**Mari bersama-sama menanamkan nilai-nilai Pancasila kepada generasi muda Indonesia! 🇮🇩**
