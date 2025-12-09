import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import buffaloHerd from "@/assets/buffalo-herd.jpg";
import buffaloDairy from "@/assets/buffalo-dairy.jpg";
import heroBuffalo from "@/assets/hero-buffalo.jpg";

const news = [
  {
    id: 1,
    image: buffaloHerd,
    date: "05 Aralık 2024",
    title: "Merkez Birliği'nden Tarım ve Orman Bakanlığı'na Ziyaret",
    excerpt: "Genel Başkan ve yönetim kurulu üyeleri, manda yetiştiriciliğinin sorunlarını görüşmek üzere bakanlık yetkililerini ziyaret etti.",
    href: "#haber-1",
  },
  {
    id: 2,
    image: buffaloDairy,
    date: "02 Aralık 2024",
    title: "Manda Sütü Üretiminde Yeni Dönem Başlıyor",
    excerpt: "Kaliteli manda sütü üretimi için yeni destek programları açıklandı. Üreticiler için önemli fırsatlar sunuluyor.",
    href: "#haber-2",
  },
  {
    id: 3,
    image: heroBuffalo,
    date: "28 Kasım 2024",
    title: "Damızlık Manda Islahı Projesi Genişliyor",
    excerpt: "Genetik iyileştirme çalışmaları kapsamında yeni il birlikleri projeye dahil edildi.",
    href: "#haber-3",
  },
  {
    id: 4,
    image: buffaloHerd,
    date: "25 Kasım 2024",
    title: "Yetiştirici Eğitim Programları Başladı",
    excerpt: "Modern manda yetiştiriciliği teknikleri konusunda kapsamlı eğitim programları düzenleniyor.",
    href: "#haber-4",
  },
  {
    id: 5,
    image: buffaloDairy,
    date: "20 Kasım 2024",
    title: "11. Olağan Genel Kurul Gerçekleştirildi",
    excerpt: "Merkez Birliği 11. Olağan Genel Kurul toplantısı başarıyla tamamlandı. Yeni dönem hedefleri belirlendi.",
    href: "#haber-5",
  },
  {
    id: 6,
    image: heroBuffalo,
    date: "15 Kasım 2024",
    title: "Uluslararası Manda Kongresi'ne Katılım",
    excerpt: "Birliğimiz, uluslararası manda kongresi'nde Türkiye'yi temsil ederek sunumlar gerçekleştirdi.",
    href: "#haber-6",
  },
];

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="haberler" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4"
            >
              Güncel
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-title"
            >
              Son Haberler
            </motion.h2>
          </div>
          <motion.a
            href="#tum-haberler"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Tüm Haberler
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {news.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              variants={itemVariants}
              className="news-card"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="news-card-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default News;
