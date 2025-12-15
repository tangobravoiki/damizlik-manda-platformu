import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play, Clock, Calendar } from "lucide-react";

const videolar = [
  {
    id: 1,
    title: "Manda Yetiştiriciliğine Giriş",
    description: "Manda yetiştiriciliğinin temelleri, manda türleri ve Türkiye'deki durumu hakkında kapsamlı bilgi.",
    duration: "18:45",
    date: "15 Kasım 2024",
    category: "Eğitim",
    thumbnail: "https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=640",
  },
  {
    id: 2,
    title: "Doğru Sağım Teknikleri",
    description: "Manda sağımında hijyen kuralları ve kaliteli süt elde etme yöntemleri.",
    duration: "12:30",
    date: "10 Kasım 2024",
    category: "Eğitim",
    thumbnail: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=640",
  },
  {
    id: 3,
    title: "Manda Besleme Programları",
    description: "Dönemlere göre manda besleme stratejileri ve rasyon hazırlama.",
    duration: "22:15",
    date: "05 Kasım 2024",
    category: "Eğitim",
    thumbnail: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=640",
  },
  {
    id: 4,
    title: "Suni Tohumlama Uygulaması",
    description: "Mandalarda suni tohumlama işleminin adım adım anlatımı.",
    duration: "15:20",
    date: "28 Ekim 2024",
    category: "Teknik",
    thumbnail: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=640",
  },
  {
    id: 5,
    title: "Modern Manda Barınakları",
    description: "Örnek manda çiftlikleri ve modern barınak tasarımları.",
    duration: "19:45",
    date: "20 Ekim 2024",
    category: "Tanıtım",
    thumbnail: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?w=640",
  },
  {
    id: 6,
    title: "Manda Kaymağı Üretimi",
    description: "Geleneksel manda kaymağı yapımı ve pazarlama.",
    duration: "14:10",
    date: "15 Ekim 2024",
    category: "Tanıtım",
    thumbnail: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=640",
  },
  {
    id: 7,
    title: "11. Olağan Genel Kurul",
    description: "Merkez Birliği 11. Olağan Genel Kurul görüntüleri.",
    duration: "45:30",
    date: "20 Kasım 2024",
    category: "Etkinlik",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=640",
  },
  {
    id: 8,
    title: "Uluslararası Manda Kongresi",
    description: "İtalya'da düzenlenen uluslararası kongreden görüntüler.",
    duration: "28:15",
    date: "15 Kasım 2024",
    category: "Etkinlik",
    thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=640",
  },
];

const kategoriler = ["Tümü", "Eğitim", "Teknik", "Tanıtım", "Etkinlik"];

const VideoGaleri = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary-foreground text-center"
          >
            Video Galeri
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-center mt-4 max-w-2xl mx-auto"
          >
            Eğitim ve tanıtım videolarımız
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {kategoriler.map((kategori) => (
              <button
                key={kategori}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  kategori === "Tümü"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {kategori}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {videolar.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="service-card overflow-hidden group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-foreground/80 text-primary-foreground text-xs rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs rounded">
                    {video.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Calendar className="h-3.5 w-3.5" />
                    {video.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoGaleri;
