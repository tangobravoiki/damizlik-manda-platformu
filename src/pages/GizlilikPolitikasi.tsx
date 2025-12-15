import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GizlilikPolitikasi = () => {
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
            Gizlilik Politikası
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <p className="text-muted-foreground">
                Son güncelleme: 01 Aralık 2024
              </p>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  1. Giriş
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Türkiye Damızlık Manda Yetiştiricileri Merkez Birliği olarak, kişisel verilerinizin 
                  güvenliği konusunda azami hassasiyet göstermekteyiz. Bu gizlilik politikası, 
                  web sitemizi ziyaret ettiğinizde toplanan bilgiler ve bu bilgilerin nasıl 
                  kullanıldığı hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  2. Toplanan Bilgiler
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Web sitemizi ziyaret ettiğinizde aşağıdaki bilgiler toplanabilir:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>İletişim formları aracılığıyla gönderdiğiniz ad, e-posta ve telefon bilgileri</li>
                  <li>Üyelik başvurularında verilen kişisel ve kurumsal bilgiler</li>
                  <li>IP adresi ve tarayıcı bilgileri</li>
                  <li>Çerezler aracılığıyla toplanan kullanım verileri</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  3. Bilgilerin Kullanımı
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Toplanan bilgiler aşağıdaki amaçlarla kullanılmaktadır:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>İletişim taleplerinize yanıt vermek</li>
                  <li>Üyelik işlemlerini gerçekleştirmek</li>
                  <li>Hizmet kalitemizi artırmak</li>
                  <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                  <li>İstatistiksel analizler yapmak</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  4. Bilgi Güvenliği
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kişisel verilerinizin güvenliği için gerekli teknik ve idari tedbirleri almaktayız. 
                  Verileriniz yetkisiz erişime, kayba veya değişikliğe karşı korunmaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  5. Üçüncü Taraflarla Paylaşım
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmamaktadır. 
                  Yasal talepler doğrultusunda yetkili kurumlarla bilgi paylaşımı yapılabilir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  6. Çerezler
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır. 
                  Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz, ancak bu durumda 
                  bazı özellikler düzgün çalışmayabilir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  7. Haklarınız
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  KVKK kapsamında aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                  <li>Verilerin düzeltilmesini veya silinmesini isteme</li>
                  <li>İşlemenin kısıtlanmasını talep etme</li>
                  <li>Verilerin aktarılmasını isteme</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  8. İletişim
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Gizlilik politikamız hakkında sorularınız için{" "}
                  <a href="mailto:kvkk@mandamb.org.tr" className="text-primary hover:underline">
                    kvkk@mandamb.org.tr
                  </a>{" "}
                  adresinden bize ulaşabilirsiniz.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GizlilikPolitikasi;
