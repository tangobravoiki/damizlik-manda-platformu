import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dna, FlaskConical, Database, TrendingUp } from "lucide-react";
import buffaloHerd from "@/assets/buffalo-herd.jpg";

const calismalar = [
  {
    icon: Dna,
    title: "Suni Tohumlama",
    description: "Yüksek genetik değere sahip boğaların spermaları kullanılarak suni tohumlama uygulamaları gerçekleştirilmektedir.",
    stats: "25.000+ uygulama/yıl",
  },
  {
    icon: FlaskConical,
    title: "Embriyo Transferi",
    description: "Elit damızlık mandalardan elde edilen embriyolar, taşıyıcı annelere transfer edilerek genetik ilerleme hızlandırılmaktadır.",
    stats: "500+ transfer/yıl",
  },
  {
    icon: Database,
    title: "Genetik Değerlendirme",
    description: "Tüm kayıtlı mandaların genetik değerlendirilmesi yapılarak damızlık değerleri hesaplanmaktadır.",
    stats: "150.000+ kayıt",
  },
  {
    icon: TrendingUp,
    title: "Islah Programları",
    description: "Süt verimi, yağ oranı ve döl verimi özelliklerini iyileştirmeye yönelik kapsamlı ıslah programları yürütülmektedir.",
    stats: "%15 genetik ilerleme",
  },
];

const sonuclar = [
  { label: "Ortalama Süt Verimi Artışı", value: "28%", period: "2018-2024" },
  { label: "Genetik Değerlendirilen Manda", value: "150.000+", period: "Toplam" },
  { label: "Suni Tohumlama Başarı Oranı", value: "65%", period: "2024" },
  { label: "Elit Damızlık Boğa", value: "180", period: "Aktif" },
];

const Genetik = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={buffaloHerd}
          alt="Genetik Çalışmalar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-primary-foreground"
            >
              Genetik Çalışmalar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto px-4"
            >
              Damızlık manda ıslahı ve genetik iyileştirme programlarımız
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed text-center"
            >
              Türkiye Damızlık Manda Yetiştiricileri Merkez Birliği, manda popülasyonunun 
              genetik potansiyelini artırmak amacıyla kapsamlı ıslah programları yürütmektedir. 
              Suni tohumlama, embriyo transferi ve moleküler genetik çalışmalar ile 
              sürdürülebilir genetik ilerleme hedeflenmektedir.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Çalışmalar */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12 after:left-1/2 after:-translate-x-1/2"
          >
            Yürütülen Çalışmalar
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {calismalar.map((calisma, index) => (
              <motion.div
                key={calisma.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card p-8"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <calisma.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {calisma.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {calisma.description}
                </p>
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {calisma.stats}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sonuçlar */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-primary-foreground text-center mb-12"
          >
            Elde Edilen Sonuçlar
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {sonuclar.map((sonuc, index) => (
              <motion.div
                key={sonuc.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-2">
                  {sonuc.value}
                </p>
                <p className="text-primary-foreground/80 text-sm mb-1">
                  {sonuc.label}
                </p>
                <p className="text-primary-foreground/60 text-xs">
                  {sonuc.period}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hedefler */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12 after:left-1/2 after:-translate-x-1/2"
          >
            2028 Hedeflerimiz
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {[
                "Ortalama süt verimini 2.500 lt/yıl seviyesine çıkarmak",
                "300.000 baş mandayı genetik değerlendirmeden geçirmek",
                "Genomik seleksiyon altyapısını kurmak",
                "500 adet elit damızlık boğa yetiştirmek",
                "Embriyo transferi sayısını yılda 2.000'e çıkarmak",
                "Uluslararası genetik materyal değişimi programları başlatmak",
              ].map((hedef, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {hedef}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Genetik;
