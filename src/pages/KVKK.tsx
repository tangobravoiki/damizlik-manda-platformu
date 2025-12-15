import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const KVKK = () => {
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
            KVKK Aydınlatma Metni
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
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Veri Sorumlusu
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz; 
                  veri sorumlusu olarak Türkiye Damızlık Manda Yetiştiricileri Merkez Birliği tarafından 
                  aşağıda açıklanan kapsamda işlenebilecektir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  İşlenen Kişisel Veriler
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, TC kimlik numarası</li>
                  <li><strong>İletişim Bilgileri:</strong> Telefon, e-posta, adres</li>
                  <li><strong>Mesleki Bilgiler:</strong> İşletme bilgileri, üyelik durumu</li>
                  <li><strong>Finansal Bilgiler:</strong> Banka hesap bilgileri, aidat ödemeleri</li>
                  <li><strong>Görsel Kayıtlar:</strong> Fotoğraf, etkinlik kayıtları</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Kişisel Verilerin İşlenme Amaçları
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Üyelik işlemlerinin yürütülmesi</li>
                  <li>Birlik faaliyetlerinin gerçekleştirilmesi</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                  <li>Destekleme ödemelerinin takibi</li>
                  <li>Eğitim ve bilgilendirme faaliyetleri</li>
                  <li>İletişim faaliyetlerinin yürütülmesi</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Kişisel Verilerin Aktarımı
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kişisel verileriniz; Tarım ve Orman Bakanlığı, Sosyal Güvenlik Kurumu, 
                  vergi daireleri ve diğer yetkili kamu kurum ve kuruluşlarına yasal 
                  yükümlülükler kapsamında aktarılabilmektedir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Veri İşlemenin Hukuki Sebepleri
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Kanunlarda açıkça öngörülmesi</li>
                  <li>Sözleşmenin kurulması veya ifası için gerekli olması</li>
                  <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi</li>
                  <li>Veri sorumlusunun meşru menfaatleri için zorunlu olması</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Veri Sahibinin Hakları
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
                  <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
                  <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                  <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                  <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                  <li>Kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                  <li>Kişisel verilerin düzeltilmesi, silinmesi veya yok edilmesine ilişkin işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                  <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                  <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Başvuru Yöntemi
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Yukarıda belirtilen haklarınızı kullanmak için{" "}
                  <a href="mailto:kvkk@mandamb.org.tr" className="text-primary hover:underline">
                    kvkk@mandamb.org.tr
                  </a>{" "}
                  adresine e-posta gönderebilir veya yazılı başvurunuzu Birlik merkezimize 
                  iletebilirsiniz. Başvurular en geç 30 gün içinde sonuçlandırılacaktır.
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

export default KVKK;
