import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <span className="text-xl font-display font-bold text-primary-foreground">MB</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-primary-foreground leading-tight">
                  Manda Birliği
                </h3>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Türkiye Damızlık Manda Yetiştiricileri Merkez Birliği, manda yetiştiriciliğinin 
              geliştirilmesi için çalışan sivil toplum kuruluşudur.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {[
                { label: "Hakkımızda", href: "#hakkimizda" },
                { label: "Projeler", href: "#projeler" },
                { label: "Haberler", href: "#haberler" },
                { label: "İstatistikler", href: "#istatistikler" },
                { label: "Mevzuat", href: "#mevzuat" },
                { label: "İletişim", href: "#iletisim" },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {[
                "Damızlık Islahı",
                "Soy Kütüğü Kaydı",
                "Genetik Çalışmalar",
                "Yetiştirici Eğitimi",
                "Teknik Danışmanlık",
                "Süt Kalite Kontrolü",
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Lodumlu Mahallesi, Dumlupınar Bulvarı No:123<br />
                  Çankaya, Ankara / TÜRKİYE
                </span>
              </li>
              <li>
                <a href="tel:+903123456789" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  <Phone className="h-5 w-5 text-accent" />
                  +90 312 345 67 89
                </a>
              </li>
              <li>
                <a href="mailto:info@mandamb.org.tr" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  <Mail className="h-5 w-5 text-accent" />
                  info@mandamb.org.tr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2024 Türkiye Damızlık Manda Yetiştiricileri Merkez Birliği. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                KVKK
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-elevated hover:bg-primary/90 transition-all z-50"
        aria-label="Yukarı git"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
