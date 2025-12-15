import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users, Target } from "lucide-react";
import buffaloHerd from "@/assets/buffalo-herd.jpg";
import buffaloDairy from "@/assets/buffalo-dairy.jpg";
import heroBuffalo from "@/assets/hero-buffalo.jpg";

const projeler = [
  {
    id: 1,
    image: buffaloHerd,
    title: "Damızlık Manda Genetik Islah Projesi",
    status: "Devam Ediyor",
    period: "2020 - 2025",
    location: "Türkiye Geneli",
    beneficiaries: "15.000+ Yetiştirici",
    description: "Türkiye manda popülasyonunun genetik potansiyelini artırmak amacıyla yürütülen kapsamlı ıslah programı. Suni tohumlama, embriyo transferi ve genetik değerlendirme çalışmalarını içermektedir.",
    objectives: [
      "Süt veriminde %25 artış sağlanması",
      "Genetik veri tabanının oluşturulması",
      "500 adet elit damızlık manda yetiştirilmesi",
      "Suni tohumlama altyapısının güçlendirilmesi",
    ],
  },
  {
    id: 2,
    image: buffaloDairy,
    title: "Manda Sütü Kalite Geliştirme Projesi",
    status: "Devam Ediyor",
    period: "2022 - 2026",
    location: "32 İl",
    beneficiaries: "8.000+ Yetiştirici",
    description: "Manda sütünün kalitesini artırarak katma değerli ürünlerin üretilmesini destekleyen proje. Hijyen standartları, soğuk zincir ve işleme tesisleri konularında destek sağlanmaktadır.",
    objectives: [
      "Süt kalite standartlarının yükseltilmesi",
      "50 adet soğutma tankı kurulumu",
      "Üretici eğitim programları",
      "Manda kaymağı ve peyniri markalaşma desteği",
    ],
  },
  {
    id: 3,
    image: heroBuffalo,
    title: "Yetiştirici Kapasite Geliştirme Programı",
    status: "Devam Ediyor",
    period: "2023 - 2025",
    location: "81 İl",
    beneficiaries: "25.000+ Yetiştirici",
    description: "Manda yetiştiricilerinin teknik bilgi ve becerilerini artırmaya yönelik kapsamlı eğitim programı. Saha eğitimleri, online kurslar ve teknik yayınları kapsamaktadır.",
    objectives: [
      "Yıllık 5.000 yetiştiriciye eğitim verilmesi",
      "Online eğitim platformu kurulması",
      "Teknik rehber ve kitapçıkların hazırlanması",
      "Demonstration çiftlikleri oluşturulması",
    ],
  },
  {
    id: 4,
    image: buffaloHerd,
    title: "Organik Manda Yetiştiriciliği Projesi",
    status: "Planlama",
    period: "2025 - 2028",
    location: "Pilot 10 İl",
    beneficiaries: "2.000+ Yetiştirici",
    description: "Organik manda yetiştiriciliğinin yaygınlaştırılması ve organik manda ürünlerinin pazarlanmasına yönelik pilot proje.",
    objectives: [
      "Organik sertifikasyon desteği",
      "Organik yem üretimi altyapısı",
      "Pazarlama ve markalaşma desteği",
      "Premium fiyat garantisi mekanizması",
    ],
  },
];

const Projeler = () => {
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
            Projelerimiz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-center mt-4 max-w-2xl mx-auto"
          >
            Manda yetiştiriciliğinin geliştirilmesi için yürüttüğümüz projeler
          </motion.p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-5xl mx-auto">
            {projeler.map((proje, index) => (
              <motion.div
                key={proje.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={proje.image}
                      alt={proje.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-medium ${
                      proje.status === "Devam Ediyor" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-accent text-accent-foreground"
                    }`}>
                      {proje.status}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    {proje.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      {proje.period}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      {proje.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      {proje.beneficiaries}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {proje.description}
                  </p>

                  <div className="bg-muted rounded-xl p-6">
                    <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Proje Hedefleri
                    </h4>
                    <ul className="space-y-2">
                      {proje.objectives.map((objective, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projeler;
