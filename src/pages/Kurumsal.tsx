import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Users, History, Network } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "hakkimizda",
    icon: Building2,
    title: "Hakkımızda",
    path: "/kurumsal/hakkimizda",
  },
  {
    id: "yonetim",
    icon: Users,
    title: "Yönetim Kurulu",
    path: "/kurumsal/yonetim-kurulu",
  },
  {
    id: "tarihce",
    icon: History,
    title: "Tarihçe",
    path: "/kurumsal/tarihce",
  },
  {
    id: "organizasyon",
    icon: Network,
    title: "Organizasyon",
    path: "/kurumsal/organizasyon",
  },
];

const Kurumsal = () => {
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
            Kurumsal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-center mt-4 max-w-2xl mx-auto"
          >
            Türkiye Damızlık Manda Yetiştiricileri Merkez Birliği hakkında bilgi edinin
          </motion.p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={section.path}
                  className="service-card flex items-center gap-6 p-8 group"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <section.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Detaylı bilgi için tıklayın
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kurumsal;
