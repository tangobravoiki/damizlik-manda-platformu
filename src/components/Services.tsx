import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Building2, FolderKanban, BarChart3, BookOpen, Newspaper, FileText, Video, Dna } from "lucide-react";

const services = [
  { icon: Building2, title: "Kurumsal", description: "Merkez Birliği yapısı, yönetim kurulu ve organizasyon şeması", href: "/kurumsal", color: "bg-primary/10 text-primary" },
  { icon: FolderKanban, title: "Projeler", description: "Manda ıslahı ve yetiştiricilik projelerimiz", href: "/projeler", color: "bg-accent/20 text-accent-foreground" },
  { icon: BarChart3, title: "İstatistikler", description: "Türkiye manda popülasyonu ve üretim verileri", href: "/istatistikler", color: "bg-secondary text-secondary-foreground" },
  { icon: Dna, title: "Genetik Çalışmalar", description: "Damızlık manda genetik iyileştirme programları", href: "/genetik", color: "bg-primary/10 text-primary" },
  { icon: BookOpen, title: "Mevzuat", description: "Hayvancılık mevzuatı ve yönetmelikler", href: "/mevzuat", color: "bg-accent/20 text-accent-foreground" },
  { icon: Newspaper, title: "Haberler", description: "Güncel haberler ve duyurular", href: "/haberler", color: "bg-secondary text-secondary-foreground" },
  { icon: FileText, title: "Yayınlar", description: "Teknik yayınlar ve rehberler", href: "/yayinlar", color: "bg-primary/10 text-primary" },
  { icon: Video, title: "Video Galeri", description: "Eğitim ve tanıtım videoları", href: "/video-galeri", color: "bg-accent/20 text-accent-foreground" },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 section-gradient" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">Hizmetlerimiz</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="section-title text-center mb-4 after:left-1/2 after:-translate-x-1/2">Ne Yapıyoruz?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">Türkiye'de manda yetiştiriciliğinin geliştirilmesi ve sürdürülebilir üretimin sağlanması için kapsamlı hizmetler sunuyoruz.</motion.p>
        </div>

        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div key={service.title} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } } }}>
              <Link to={service.href} className="service-card group block">
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
