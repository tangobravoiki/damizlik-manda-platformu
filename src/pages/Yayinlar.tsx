import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download, BookOpen, File } from "lucide-react";

const yayinlar = [
  {
    category: "Teknik Rehberler",
    items: [
      {
        title: "Manda Yetiştiriciliği El Kitabı",
        description: "Manda yetiştiriciliğinin temellerini anlatan kapsamlı rehber.",
        pages: "186 sayfa",
        year: "2024",
      },
      {
        title: "Manda Besleme Kılavuzu",
        description: "Dönemlere göre manda besleme programları ve rasyon örnekleri.",
        pages: "92 sayfa",
        year: "2024",
      },
      {
        title: "Sağım ve Süt Hijyeni",
        description: "Kaliteli manda sütü üretimi için sağım teknikleri ve hijyen kuralları.",
        pages: "64 sayfa",
        year: "2023",
      },
      {
        title: "Manda Barınak Tasarımı",
        description: "Modern manda barınaklarının tasarım ve yapım kriterleri.",
        pages: "78 sayfa",
        year: "2023",
      },
    ],
  },
  {
    category: "Araştırma Raporları",
    items: [
      {
        title: "Türkiye Manda Yetiştiriciliği Durum Raporu 2024",
        description: "Sektörün güncel durumu, sorunları ve çözüm önerileri.",
        pages: "124 sayfa",
        year: "2024",
      },
      {
        title: "Genetik Islah Programı Sonuç Raporu",
        description: "2018-2024 dönemi genetik ıslah çalışmalarının değerlendirmesi.",
        pages: "86 sayfa",
        year: "2024",
      },
      {
        title: "Manda Sütü Kalite Araştırması",
        description: "Türkiye'de manda sütü kalite parametrelerinin analizi.",
        pages: "54 sayfa",
        year: "2023",
      },
    ],
  },
  {
    category: "Broşürler",
    items: [
      {
        title: "Damızlık Manda Seçimi",
        description: "İyi bir damızlık manda nasıl seçilir?",
        pages: "12 sayfa",
        year: "2024",
      },
      {
        title: "Manda Hastalıkları ve Korunma",
        description: "Yaygın manda hastalıkları ve koruyucu önlemler.",
        pages: "16 sayfa",
        year: "2024",
      },
      {
        title: "Suni Tohumlama Rehberi",
        description: "Yetiştiriciler için suni tohumlama bilgilendirme broşürü.",
        pages: "8 sayfa",
        year: "2023",
      },
    ],
  },
];

const Yayinlar = () => {
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
            Yayınlar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-center mt-4 max-w-2xl mx-auto"
          >
            Teknik yayınlar, rehberler ve araştırma raporları
          </motion.p>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {yayinlar.map((kategori, categoryIndex) => (
              <motion.div
                key={kategori.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title mb-8">
                  {kategori.category}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {kategori.items.map((yayin, index) => (
                    <motion.div
                      key={yayin.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="service-card p-6 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {kategori.category === "Teknik Rehberler" ? (
                            <BookOpen className="h-7 w-7 text-primary" />
                          ) : kategori.category === "Araştırma Raporları" ? (
                            <FileText className="h-7 w-7 text-primary" />
                          ) : (
                            <File className="h-7 w-7 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {yayin.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                            {yayin.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span>{yayin.pages}</span>
                              <span>•</span>
                              <span>{yayin.year}</span>
                            </div>
                            <button className="flex items-center gap-2 text-primary text-sm font-medium hover:underline">
                              <Download className="h-4 w-4" />
                              İndir
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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

export default Yayinlar;
