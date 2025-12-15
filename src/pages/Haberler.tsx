import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import buffaloHerd from "@/assets/buffalo-herd.jpg";
import buffaloDairy from "@/assets/buffalo-dairy.jpg";
import heroBuffalo from "@/assets/hero-buffalo.jpg";

export const haberler = [
  {
    id: 1,
    slug: "bakanlık-ziyareti",
    image: buffaloHerd,
    date: "05 Aralık 2024",
    title: "Merkez Birliği'nden Tarım ve Orman Bakanlığı'na Ziyaret",
    excerpt: "Genel Başkan ve yönetim kurulu üyeleri, manda yetiştiriciliğinin sorunlarını görüşmek üzere bakanlık yetkililerini ziyaret etti.",
    content: `
      <p>Türkiye Damızlık Manda Yetiştiricileri Merkez Birliği Genel Başkanı Mehmet YILMAZ ve yönetim kurulu üyeleri, manda yetiştiriciliğinin güncel sorunlarını görüşmek üzere Tarım ve Orman Bakanlığı yetkililerini ziyaret etti.</p>
      
      <p>Ziyarette ele alınan konular arasında:</p>
      <ul>
        <li>Damızlık manda desteklemelerinin artırılması</li>
        <li>Manda sütü fiyatlarının belirlenmesi</li>
        <li>Genetik ıslah programlarının genişletilmesi</li>
        <li>Yetiştirici eğitim programlarının desteklenmesi</li>
      </ul>
      
      <p>Bakanlık yetkilileri, manda yetiştiriciliğinin Türkiye için önemini vurgulayarak, önümüzdeki dönemde desteklerin artırılacağı sinyalini verdi.</p>
      
      <p>Genel Başkan Mehmet YILMAZ, ziyaretin ardından yaptığı açıklamada: "Bakanlığımızla son derece verimli bir görüşme gerçekleştirdik. Yetiştiricilerimizin taleplerini ilettik ve olumlu geri dönüşler aldık. Önümüzdeki dönemde manda yetiştiriciliğine yönelik desteklerin artacağına inanıyoruz." dedi.</p>
    `,
  },
  {
    id: 2,
    slug: "manda-sutu-yeni-donem",
    image: buffaloDairy,
    date: "02 Aralık 2024",
    title: "Manda Sütü Üretiminde Yeni Dönem Başlıyor",
    excerpt: "Kaliteli manda sütü üretimi için yeni destek programları açıklandı. Üreticiler için önemli fırsatlar sunuluyor.",
    content: `
      <p>Tarım ve Orman Bakanlığı tarafından manda sütü üretimine yönelik yeni destek programları açıklandı. Bu kapsamda kaliteli süt üretimine teşvik primi verilecek.</p>
      
      <p>Yeni destek programının detayları:</p>
      <ul>
        <li>Kalite primi: Litre başına 2 TL ek destek</li>
        <li>Soğutma tankı desteği: %50 hibe</li>
        <li>Hijyen eğitimi: Ücretsiz sertifika programları</li>
        <li>Pazarlama desteği: Kooperatif ürünlerine öncelik</li>
      </ul>
      
      <p>Merkez Birliği olarak tüm üyelerimizi bu desteklerden yararlanmaya davet ediyoruz. Başvuru süreçlerinde il birliklerimiz yetiştiricilerimize yardımcı olacaktır.</p>
    `,
  },
  {
    id: 3,
    slug: "genetik-islah-projesi",
    image: heroBuffalo,
    date: "28 Kasım 2024",
    title: "Damızlık Manda Islahı Projesi Genişliyor",
    excerpt: "Genetik iyileştirme çalışmaları kapsamında yeni il birlikleri projeye dahil edildi.",
    content: `
      <p>Merkez Birliği koordinasyonunda yürütülen Damızlık Manda Genetik Islah Projesi kapsamında 10 yeni il birliği daha projeye dahil edildi.</p>
      
      <p>Proje kapsamında gerçekleştirilen çalışmalar:</p>
      <ul>
        <li>2.500 baş manda genetik değerlendirmeden geçirildi</li>
        <li>150 adet elit damızlık boğa seçildi</li>
        <li>Suni tohumlama altyapısı 15 ilde tamamlandı</li>
        <li>Genetik veri bankası oluşturuldu</li>
      </ul>
      
      <p>Projenin amacı, Türkiye manda popülasyonunun genetik potansiyelini artırarak süt verimini yükseltmektir. Hedef, 5 yıl içinde ortalama süt verimini %25 artırmaktır.</p>
    `,
  },
  {
    id: 4,
    slug: "yetistirici-egitimleri",
    image: buffaloHerd,
    date: "25 Kasım 2024",
    title: "Yetiştirici Eğitim Programları Başladı",
    excerpt: "Modern manda yetiştiriciliği teknikleri konusunda kapsamlı eğitim programları düzenleniyor.",
    content: `
      <p>Merkez Birliği tarafından düzenlenen yetiştirici eğitim programları 25 ilde eş zamanlı olarak başladı.</p>
      
      <p>Eğitim programının içeriği:</p>
      <ul>
        <li>Modern barınak tasarımı ve yapımı</li>
        <li>Rasyon hazırlama ve beslenme yönetimi</li>
        <li>Sağım hijyeni ve süt kalitesi</li>
        <li>Sürü sağlığı yönetimi</li>
        <li>Kayıt tutma ve işletme yönetimi</li>
      </ul>
      
      <p>Eğitimler, alanında uzman akademisyenler ve teknik personel tarafından verilmektedir. Tüm yetiştiricilerimizi eğitimlere katılmaya davet ediyoruz.</p>
    `,
  },
  {
    id: 5,
    slug: "genel-kurul-2024",
    image: buffaloDairy,
    date: "20 Kasım 2024",
    title: "11. Olağan Genel Kurul Gerçekleştirildi",
    excerpt: "Merkez Birliği 11. Olağan Genel Kurul toplantısı başarıyla tamamlandı. Yeni dönem hedefleri belirlendi.",
    content: `
      <p>Türkiye Damızlık Manda Yetiştiricileri Merkez Birliği 11. Olağan Genel Kurul toplantısı Ankara'da gerçekleştirildi.</p>
      
      <p>Genel Kurulda alınan önemli kararlar:</p>
      <ul>
        <li>2025 yılı çalışma programı onaylandı</li>
        <li>Bütçe kabul edildi</li>
        <li>Yönetim ve denetim kurulları ibra edildi</li>
        <li>Tüzük değişiklikleri kabul edildi</li>
      </ul>
      
      <p>Genel Başkan Mehmet YILMAZ, yeni dönem hedeflerini açıklarken, manda popülasyonunu 2028 yılına kadar 500.000 başa çıkarmayı hedeflediklerini belirtti.</p>
    `,
  },
  {
    id: 6,
    slug: "uluslararasi-kongre",
    image: heroBuffalo,
    date: "15 Kasım 2024",
    title: "Uluslararası Manda Kongresi'ne Katılım",
    excerpt: "Birliğimiz, uluslararası manda kongresi'nde Türkiye'yi temsil ederek sunumlar gerçekleştirdi.",
    content: `
      <p>İtalya'da düzenlenen Uluslararası Manda Kongresi'ne Merkez Birliği heyeti katıldı ve Türkiye manda yetiştiriciliği hakkında sunumlar gerçekleştirdi.</p>
      
      <p>Kongrede öne çıkan konular:</p>
      <ul>
        <li>Küresel manda popülasyonu durumu</li>
        <li>İklim değişikliği ve manda yetiştiriciliği</li>
        <li>Genetik koruma ve ıslah stratejileri</li>
        <li>Manda ürünlerinin pazarlanması</li>
      </ul>
      
      <p>Kongre sonucunda İtalya ve Pakistan manda yetiştirici birlikleri ile işbirliği protokolleri imzalandı. Bu protokoller kapsamında teknik bilgi ve genetik materyal değişimi yapılacak.</p>
    `,
  },
];

const Haberler = () => {
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
            Haberler
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-center mt-4 max-w-2xl mx-auto"
          >
            Güncel haberler, duyurular ve etkinlikler
          </motion.p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {haberler.map((haber, index) => (
              <motion.div
                key={haber.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/haberler/${haber.slug}`}
                  className="news-card block"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={haber.image}
                      alt={haber.title}
                      className="news-card-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{haber.date}</span>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {haber.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {haber.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm">
                      Devamını Oku
                      <ArrowRight className="h-4 w-4" />
                    </div>
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

export default Haberler;
