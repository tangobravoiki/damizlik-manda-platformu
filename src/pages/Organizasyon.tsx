import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Users, Briefcase, FileText, BarChart, Shield } from "lucide-react";

const birimler = [
  {
    icon: Building2,
    title: "Genel Sekreterlik",
    description: "Birliğin idari işlerinin yürütülmesi, koordinasyon ve planlama faaliyetleri",
    staff: "5 personel",
  },
  {
    icon: Users,
    title: "Üye İlişkileri Birimi",
    description: "İl birlikleri ile koordinasyon, üye kayıt ve takip işlemleri",
    staff: "4 personel",
  },
  {
    icon: Briefcase,
    title: "Projeler Birimi",
    description: "Ulusal ve uluslararası proje geliştirme ve yürütme faaliyetleri",
    staff: "3 personel",
  },
  {
    icon: FileText,
    title: "Soy Kütüğü Birimi",
    description: "Damızlık manda kayıt sistemi ve genetik veri yönetimi",
    staff: "4 personel",
  },
  {
    icon: BarChart,
    title: "İstatistik ve Araştırma",
    description: "Veri analizi, raporlama ve araştırma faaliyetleri",
    staff: "2 personel",
  },
  {
    icon: Shield,
    title: "Hukuk ve Mevzuat",
    description: "Yasal danışmanlık ve mevzuat takibi",
    staff: "2 personel",
  },
];

const Organizasyon = () => {
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
            Organizasyon Yapısı
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-center mt-4 max-w-2xl mx-auto"
          >
            Merkez Birliği teşkilat yapısı ve birimlerimiz
          </motion.p>
        </div>
      </section>

      {/* Organization Chart */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Top Level */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center mb-12"
            >
              <div className="service-card p-6 text-center max-w-md">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Genel Kurul
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  En üst karar organı - 81 İl Birliği Delegeleri
                </p>
              </div>
              <div className="w-0.5 h-8 bg-primary/30" />
            </motion.div>

            {/* Second Level */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
            >
              <div className="service-card p-6 text-center flex-1 max-w-xs">
                <h3 className="text-lg font-display font-bold text-foreground">
                  Yönetim Kurulu
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  7 Üye - İcra Organı
                </p>
              </div>
              <div className="service-card p-6 text-center flex-1 max-w-xs">
                <h3 className="text-lg font-display font-bold text-foreground">
                  Denetim Kurulu
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  3 Üye - Denetim Organı
                </p>
              </div>
            </motion.div>

            <div className="w-0.5 h-8 bg-primary/30 mx-auto" />
          </div>

          {/* Units */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mt-12 mb-12 after:left-1/2 after:-translate-x-1/2"
          >
            Birimlerimiz
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {birimler.map((birim, index) => (
              <motion.div
                key={birim.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <birim.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {birim.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {birim.description}
                </p>
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                  {birim.staff}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Organizasyon;
