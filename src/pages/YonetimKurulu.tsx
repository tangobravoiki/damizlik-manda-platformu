import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Phone, Mail } from "lucide-react";

const yonetimKurulu = [
  {
    name: "Mehmet YILMAZ",
    title: "Genel Başkan",
    city: "Afyonkarahisar",
  },
  {
    name: "Ahmet KAYA",
    title: "Genel Başkan Yardımcısı",
    city: "İstanbul",
  },
  {
    name: "Hasan DEMİR",
    title: "Genel Sekreter",
    city: "Diyarbakır",
  },
  {
    name: "Ali ÖZTÜRK",
    title: "Genel Sayman",
    city: "Muş",
  },
  {
    name: "Mustafa ŞAHİN",
    title: "Yönetim Kurulu Üyesi",
    city: "Bitlis",
  },
  {
    name: "İbrahim ARSLAN",
    title: "Yönetim Kurulu Üyesi",
    city: "Samsun",
  },
  {
    name: "Süleyman YILDIZ",
    title: "Yönetim Kurulu Üyesi",
    city: "Tokat",
  },
];

const denetimKurulu = [
  { name: "Osman ÇELIK", city: "Kayseri" },
  { name: "Kemal ACAR", city: "Amasya" },
  { name: "Yusuf GÜNEŞ", city: "Çorum" },
];

const YonetimKurulu = () => {
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
            Yönetim Kurulu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-center mt-4 max-w-2xl mx-auto"
          >
            Merkez Birliği yönetim ve denetim kurulu üyelerimiz
          </motion.p>
        </div>
      </section>

      {/* Yönetim Kurulu */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title text-center mb-12 after:left-1/2 after:-translate-x-1/2"
          >
            Yönetim Kurulu
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {yonetimKurulu.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="service-card p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-2">
                  {member.title}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.city} İl Birliği
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Denetim Kurulu */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12 after:left-1/2 after:-translate-x-1/2"
          >
            Denetim Kurulu
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {denetimKurulu.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {member.city} İl Birliği
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YonetimKurulu;
