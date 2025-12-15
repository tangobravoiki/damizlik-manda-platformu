import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const timeline = [
  {
    year: "2010",
    title: "Kuruluş Çalışmaları",
    description: "Türkiye'de manda yetiştiriciliğinin organize edilmesi için ilk adımlar atıldı. Yetiştirici birlikleri oluşturulmaya başlandı.",
  },
  {
    year: "2012",
    title: "İlk İl Birliklerinin Kurulması",
    description: "Afyonkarahisar, İstanbul, Diyarbakır ve Muş'ta ilk damızlık manda yetiştiricileri birlikleri kuruldu.",
  },
  {
    year: "2014",
    title: "Merkez Birliği'nin Kuruluşu",
    description: "Türkiye Damızlık Manda Yetiştiricileri Merkez Birliği resmen kuruldu ve faaliyetlerine başladı.",
  },
  {
    year: "2015",
    title: "Soy Kütüğü Sistemi",
    description: "Ulusal manda soy kütüğü kayıt sistemi oluşturuldu ve kayıt işlemleri başlatıldı.",
  },
  {
    year: "2017",
    title: "Genetik Islah Programı",
    description: "Damızlık manda genetik ıslah programı başlatıldı. İlk suni tohumlama çalışmaları gerçekleştirildi.",
  },
  {
    year: "2019",
    title: "Uluslararası İşbirlikleri",
    description: "İtalya ve Pakistan manda yetiştirici birlikleri ile işbirliği protokolleri imzalandı.",
  },
  {
    year: "2021",
    title: "Dijital Dönüşüm",
    description: "Online üye takip sistemi ve mobil uygulama devreye alındı. Dijital soy kütüğü kaydına geçildi.",
  },
  {
    year: "2023",
    title: "81 İl Birliği",
    description: "Türkiye genelinde tüm illerde damızlık manda yetiştiricileri birlikleri kurularak tam kapsama ulaşıldı.",
  },
  {
    year: "2024",
    title: "Yeni Dönem Hedefleri",
    description: "Manda popülasyonunu 500.000'e çıkarmak ve organik manda ürünleri pazarını geliştirmek için yeni projeler başlatıldı.",
  },
];

const Tarihce = () => {
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
            Tarihçe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-center mt-4 max-w-2xl mx-auto"
          >
            Merkez Birliği'nin kuruluşundan bugüne gelişim süreci
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year Circle */}
                  <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                    <span className="text-primary-foreground font-display font-bold text-sm">
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="service-card p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-5/12" />
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

export default Tarihce;
