import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: "Ana Sayfa", href: "/" },
    {
      label: "Kurumsal",
      href: "/kurumsal",
      submenu: [
        { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
        { label: "Yönetim Kurulu", href: "/kurumsal/yonetim-kurulu" },
        { label: "Tarihçe", href: "/kurumsal/tarihce" },
        { label: "Organizasyon", href: "/kurumsal/organizasyon" },
      ],
    },
    { label: "Projeler", href: "/projeler" },
    { label: "İstatistikler", href: "/istatistikler" },
    { label: "Mevzuat", href: "/mevzuat" },
    { label: "Haberler", href: "/haberler" },
    { label: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-primary-foreground/90">
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+903123456789" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">+90 312 345 67 89</span>
              </a>
              <a href="mailto:info@mandamb.org.tr" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
                <Mail className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">info@mandamb.org.tr</span>
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Ankara, Türkiye</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-card/95 backdrop-blur-md shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <span className="text-2xl font-display font-bold text-primary-foreground">MB</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-display font-bold text-foreground leading-tight">
                  Türkiye Damızlık Manda
                </h1>
                <p className="text-sm text-muted-foreground">Yetiştiricileri Merkez Birliği</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={item.href} className="nav-link flex items-center gap-1">
                    {item.label}
                    {item.submenu && <ChevronDown className="h-4 w-4" />}
                  </Link>

                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full pt-2"
                      >
                        <div className="min-w-48 rounded-lg bg-card shadow-elevated p-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block rounded-md px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Menüyü aç/kapat"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border"
            >
              <div className="container mx-auto px-4 py-4">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 border-l-2 border-muted ml-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
