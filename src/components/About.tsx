import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import buffaloHerd from "@/assets/buffalo-herd.jpg";

const features = [
  "Damızlık manda ıslah çalışmaları",
  "Soy kütüğü ve kayıt sistemleri",
  "Yetiştirici eğitim programları",
  "Süt kalitesi ve verim artırma",
  "Genetik materyal değişimi",
  "Teknik danışmanlık hizmetleri",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hakkimizda" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={buffaloHerd}
                alt="Manda sürüsü"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-elevated p-6 max-w-[200px]"
            >
              <div className="text-4xl font-display font-bold text-primary mb-1">27+</div>
              <div className="text-sm text-muted-foreground">Yıllık Deneyim</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Hakkımızda
            </span>
            <h2 className="section-title mb-6">
              Türkiye'nin Manda Yetiştiriciliği Merkezi
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed mt-8">
              Türkiye Damızlık Manda Yetiştiricileri Merkez Birliği, 1997 yılından bu yana 
              Türkiye genelinde manda yetiştiriciliğinin geliştirilmesi, damızlık manda 
              ıslahı ve sürdürülebilir üretimin sağlanması için çalışmaktadır.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              81 il birliğimiz ve 45.000'den fazla üyemizle Türkiye'nin en kapsamlı 
              manda yetiştirici organizasyonuyuz. Genetik iyileştirme, soy kütüğü 
              kaydı ve yetiştirici eğitimi konularında öncü hizmetler sunuyoruz.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a href="#kurumsal" className="btn-primary">
              Detaylı Bilgi
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
