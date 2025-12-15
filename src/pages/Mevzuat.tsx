import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download, ExternalLink, Calendar } from "lucide-react";

const kanunlar = [
  {
    title: "5996 Sayılı Veteriner Hizmetleri, Bitki Sağlığı, Gıda ve Yem Kanunu",
    date: "11.06.2010",
    description: "Veteriner hizmetleri, bitki sağlığı, gıda ve yem güvenilirliği ile hayvan sağlığı ve refahına ilişkin usul ve esasları belirleyen kanun.",
    type: "Kanun",
  },
  {
    title: "5200 Sayılı Tarımsal Üretici Birlikleri Kanunu",
    date: "29.06.2004",
    description: "Tarımsal üreticilerin, ürün veya ürün grubu temelinde bir araya gelerek birlik kurmalarına ilişkin usul ve esasları düzenleyen kanun.",
    type: "Kanun",
  },
  {
    title: "4631 Sayılı Hayvan Islahı Kanunu",
    date: "10.03.2001",
    description: "Hayvan ıslahına ilişkin esas ve usulleri belirleyen kanun.",
    type: "Kanun",
  },
];

const yonetmelikler = [
  {
    title: "Damızlık Manda Yetiştiricileri Birliklerinin Kuruluş ve Çalışma Usul ve Esasları Hakkında Yönetmelik",
    date: "08.12.2011",
    description: "Damızlık manda yetiştiricileri birliklerinin kuruluşu, işleyişi ve faaliyetlerine ilişkin usul ve esaslar.",
    type: "Yönetmelik",
  },
  {
    title: "Hayvancılık Desteklemeleri Hakkında Uygulama Esasları Tebliği",
    date: "01.04.2024",
    description: "Hayvancılık sektörüne yönelik destekleme programlarının uygulama esasları.",
    type: "Tebliğ",
  },
  {
    title: "Damızlık Hayvan Yetiştirici Birliklerinin Kurulması ve Hizmetleri Hakkında Yönetmelik",
    date: "14.10.2020",
    description: "Damızlık hayvan yetiştirici birliklerinin kurulması, çalışma usul ve esasları.",
    type: "Yönetmelik",
  },
  {
    title: "Sığır Cinsi Hayvanların Tanımlanması, Tescili ve İzlenmesi Yönetmeliği",
    date: "02.12.2011",
    description: "Sığır ve manda cinsi hayvanların tanımlanması ve izlenmesine ilişkin usul ve esaslar.",
    type: "Yönetmelik",
  },
];

const genelgeler = [
  {
    title: "2024/15 Sayılı Hayvancılık Destekleme Genelgesi",
    date: "15.03.2024",
    description: "2024 yılı hayvancılık destekleme uygulamalarına ilişkin genelge.",
    type: "Genelge",
  },
  {
    title: "2024/8 Sayılı Soy Kütüğü ve Ön Soy Kütüğü Sistemi Genelgesi",
    date: "01.02.2024",
    description: "Soy kütüğü ve ön soy kütüğü kayıt sistemine ilişkin uygulama genelgesi.",
    type: "Genelge",
  },
  {
    title: "2023/42 Sayılı Damızlık Manda Desteklemesi Genelgesi",
    date: "15.09.2023",
    description: "Damızlık manda yetiştiriciliği destekleme programı uygulama esasları.",
    type: "Genelge",
  },
];

const Mevzuat = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Kanun":
        return "bg-primary text-primary-foreground";
      case "Yönetmelik":
        return "bg-accent text-accent-foreground";
      case "Tebliğ":
        return "bg-secondary text-secondary-foreground";
      case "Genelge":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const MevzuatCard = ({ item, index }: { item: typeof kanunlar[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="service-card p-6 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <FileText className="h-6 w-6 text-primary" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
          {item.type}
        </span>
      </div>
      
      <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {item.title}
      </h3>
      
      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
        <Calendar className="h-4 w-4" />
        {item.date}
      </div>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {item.description}
      </p>
      
      <div className="flex gap-3">
        <button className="flex items-center gap-2 text-primary text-sm font-medium hover:underline">
          <ExternalLink className="h-4 w-4" />
          Görüntüle
        </button>
        <button className="flex items-center gap-2 text-muted-foreground text-sm font-medium hover:text-primary transition-colors">
          <Download className="h-4 w-4" />
          İndir
        </button>
      </div>
    </motion.div>
  );

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
            Mevzuat
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-center mt-4 max-w-2xl mx-auto"
          >
            Hayvancılık mevzuatı, yönetmelikler ve genelgeler
          </motion.p>
        </div>
      </section>

      {/* Kanunlar */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12 after:left-1/2 after:-translate-x-1/2"
          >
            Kanunlar
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {kanunlar.map((item, index) => (
              <MevzuatCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Yönetmelikler */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12 after:left-1/2 after:-translate-x-1/2"
          >
            Yönetmelik ve Tebliğler
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {yonetmelikler.map((item, index) => (
              <MevzuatCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Genelgeler */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12 after:left-1/2 after:-translate-x-1/2"
          >
            Genelgeler
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {genelgeler.map((item, index) => (
              <MevzuatCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mevzuat;
