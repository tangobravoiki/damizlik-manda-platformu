import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";
import heroBuffalo from "@/assets/hero-buffalo.jpg";

const values = [
  {
    icon: Target,
    title: "Misyonumuz",
    description: "Türkiye'de manda yetiştiriciliğini geliştirmek, yetiştiricilerimizi desteklemek ve manda ürünlerinin kalitesini artırarak sektörün sürdürülebilir büyümesini sağlamak.",
  },
  {
    icon: Eye,
    title: "Vizyonumuz",
    description: "Türkiye'yi dünya manda yetiştiriciliğinde söz sahibi bir ülke konumuna getirmek ve manda ürünlerini uluslararası pazarlarda tercih edilen markalar haline getirmek.",
  },
  {
    icon: Award,
    title: "Kalite Odaklılık",
    description: "Her aşamada en yüksek kalite standartlarını uygulayarak, üyelerimize ve tüketicilere güvenilir ürünler sunmayı taahhüt ediyoruz.",
  },
  {
    icon: Users,
    title: "Birlik Ruhu",
    description: "Tüm manda yetiştiricilerini tek çatı altında toplayarak, ortak sorunlara ortak çözümler üretiyoruz.",
  },
];

const Hakkimizda = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src={heroBuffalo}
          alt="Manda Birliği"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary-foreground text-center"
          >
            Hakkımızda
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                <strong className="text-foreground">Türkiye Damızlık Manda Yetiştiricileri Merkez Birliği</strong>, 
                5996 sayılı Veteriner Hizmetleri, Bitki Sağlığı, Gıda ve Yem Kanunu ile 5200 sayılı 
                Tarımsal Üretici Birlikleri Kanunu çerçevesinde kurulmuş, tüzel kişiliğe sahip bir 
                sivil toplum kuruluşudur.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Birliğimiz, Türkiye genelinde faaliyet gösteren il damızlık manda yetiştiricileri 
                birliklerini çatısı altında toplamaktadır. Amacımız, manda yetiştiriciliğinin 
                geliştirilmesi, damızlık manda ıslahı, soy kütüğü kayıtlarının tutulması ve 
                yetiştiricilerimizin menfaatlerinin korunmasıdır.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-6">
                Görev ve Sorumluluklarımız
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li>Damızlık manda yetiştiriciliğinin ülke genelinde yaygınlaştırılması</li>
                <li>Soy kütüğü kayıt sisteminin yürütülmesi ve genetik ilerlemenin takibi</li>
                <li>Üye birliklerin koordinasyonu ve ortak politikaların belirlenmesi</li>
                <li>Yetiştirici eğitim programlarının düzenlenmesi</li>
                <li>Manda sütü ve ürünlerinin pazarlanmasına destek verilmesi</li>
                <li>Ulusal ve uluslararası kuruluşlarla işbirliği yapılması</li>
                <li>Mevzuat çalışmalarına katkı sağlanması</li>
              </ul>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="service-card p-8"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hakkimizda;
