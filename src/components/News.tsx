import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import buffaloHerd from "@/assets/buffalo-herd.jpg";
import buffaloDairy from "@/assets/buffalo-dairy.jpg";
import heroBuffalo from "@/assets/hero-buffalo.jpg";

const news = [
  { id: 1, slug: "bakanlık-ziyareti", image: buffaloHerd, date: "05 Aralık 2024", title: "Merkez Birliği'nden Tarım ve Orman Bakanlığı'na Ziyaret", excerpt: "Genel Başkan ve yönetim kurulu üyeleri, manda yetiştiriciliğinin sorunlarını görüşmek üzere bakanlık yetkililerini ziyaret etti." },
  { id: 2, slug: "manda-sutu-yeni-donem", image: buffaloDairy, date: "02 Aralık 2024", title: "Manda Sütü Üretiminde Yeni Dönem Başlıyor", excerpt: "Kaliteli manda sütü üretimi için yeni destek programları açıklandı. Üreticiler için önemli fırsatlar sunuluyor." },
  { id: 3, slug: "genetik-islah-projesi", image: heroBuffalo, date: "28 Kasım 2024", title: "Damızlık Manda Islahı Projesi Genişliyor", excerpt: "Genetik iyileştirme çalışmaları kapsamında yeni il birlikleri projeye dahil edildi." },
  { id: 4, slug: "yetistirici-egitimleri", image: buffaloHerd, date: "25 Kasım 2024", title: "Yetiştirici Eğitim Programları Başladı", excerpt: "Modern manda yetiştiriciliği teknikleri konusunda kapsamlı eğitim programları düzenleniyor." },
  { id: 5, slug: "genel-kurul-2024", image: buffaloDairy, date: "20 Kasım 2024", title: "11. Olağan Genel Kurul Gerçekleştirildi", excerpt: "Merkez Birliği 11. Olağan Genel Kurul toplantısı başarıyla tamamlandı. Yeni dönem hedefleri belirlendi." },
  { id: 6, slug: "uluslararasi-kongre", image: heroBuffalo, date: "15 Kasım 2024", title: "Uluslararası Manda Kongresi'ne Katılım", excerpt: "Birliğimiz, uluslararası manda kongresi'nde Türkiye'yi temsil ederek sunumlar gerçekleştirdi." },
];

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="haberler" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">Güncel</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="section-title">Son Haberler</motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
            <Link to="/haberler" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">Tüm Haberler <ArrowRight className="h-4 w-4" /></Link>
          </motion.div>
        </div>

        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <motion.div key={item.id} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } } }}>
              <Link to={`/haberler/${item.slug}`} className="news-card block">
                <div className="relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="news-card-image" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3"><Calendar className="h-4 w-4" /><span>{item.date}</span></div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{item.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default News;
