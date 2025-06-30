export interface SilaData {
  id: number;
  title: string;
  symbol: string;
  image: string;
  description: string;
  examples: string[];
}

export const pancasilaData: SilaData[] = [
  {
    id: 1,
    title: "Ketuhanan Yang Maha Esa",
    symbol: "⭐",
    image: "/Sila 1.png",
    description: "Sila pertama ini mengajarkan kita untuk percaya kepada Tuhan Yang Maha Esa dan menghormati semua agama yang ada di Indonesia. Kita harus rajin beribadah dan saling menghormati perbedaan keyakinan.",
    examples: [
      "Rajin beribadah sesuai agama masing-masing",
      "Menghormati teman yang berbeda agama",
      "Tidak mengejek cara ibadah orang lain",
      "Berdoa sebelum belajar dan makan",
      "Berbuat baik kepada semua orang"
    ]
  },
  {
    id: 2,
    title: "Kemanusiaan Yang Adil dan Beradab",
    symbol: "🤝",
    image: "/Sila 2.png",
    description: "Sila kedua mengajarkan kita untuk memperlakukan semua orang dengan baik dan adil. Kita harus saling tolong-menolong dan tidak membeda-bedakan teman berdasarkan warna kulit, suku, atau asal daerah.",
    examples: [
      "Membantu teman yang kesulitan",
      "Tidak mem-bully atau mengejek teman",
      "Bermain bersama tanpa membeda-bedakan",
      "Berbagi makanan dengan teman",
      "Menghormati perbedaan suku dan budaya"
    ]
  },
  {
    id: 3,
    title: "Persatuan Indonesia",
    symbol: "🇮🇩",
    image: "/Sila 3.png",
    description: "Sila ketiga mengajarkan kita untuk mencintai Indonesia dan menjaga persatuan. Meskipun kita berbeda suku, agama, dan bahasa daerah, kita tetap satu sebagai bangsa Indonesia.",
    examples: [
      "Bangga menjadi anak Indonesia",
      "Menghafal lagu kebangsaan Indonesia Raya",
      "Berteman dengan anak dari daerah lain",
      "Menggunakan bahasa Indonesia dengan baik",
      "Menjaga kebersihan lingkungan sekolah dan rumah"
    ]
  },
  {
    id: 4,
    title: "Kerakyatan Yang Dipimpin Oleh Hikmat Kebijaksanaan Dalam Permusyawaratan/Perwakilan",
    symbol: "🗳️",
    image: "/Sila 4.png",
    description: "Sila keempat mengajarkan kita untuk selalu bermusyawarah atau berdiskusi ketika ingin memutuskan sesuatu. Kita harus mendengarkan pendapat orang lain dan mencari solusi bersama-sama.",
    examples: [
      "Memilih ketua kelas dengan voting",
      "Berdiskusi untuk menentukan permainan",
      "Mendengarkan pendapat teman saat kerja kelompok",
      "Mencari solusi bersama saat ada masalah",
      "Menerima keputusan yang sudah disepakati bersama"
    ]
  },
  {
    id: 5,
    title: "Keadilan Sosial Bagi Seluruh Rakyat Indonesia",
    symbol: "⚖️",
    image: "/Sila 5.png",
    description: "Sila kelima mengajarkan kita untuk berlaku adil dan membantu sesama. Kita harus berbagi dengan yang membutuhkan dan tidak boleh egois. Semua orang berhak mendapatkan perlakuan yang sama.",
    examples: [
      "Berbagi bekal dengan teman yang tidak membawa",
      "Membantu teman yang kurang mampu",
      "Tidak iri dengan mainan teman yang bagus",
      "Antri dengan tertib saat mau jajan",
      "Memberikan kesempatan bermain kepada semua teman"
    ]
  }
];