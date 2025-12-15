import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react";
import { haberler } from "./Haberler";

const HaberDetay = () => {
  const { slug } = useParams();
  const haber = haberler.find((h) => h.slug === slug);

  if (!haber) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold text-foreground mb-4">
              Haber Bulunamadı
            </h1>
            <Link to="/haberler" className="text-primary hover:underline">
              Haberlere Dön
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const otherNews = haberler.filter((h) => h.id !== haber.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={haber.image}
          alt={haber.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <Link
                to="/haberler"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Haberlere Dön
              </Link>
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-4">
                <Calendar className="h-4 w-4" />
                <span>{haber.date}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground">
                {haber.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8 pb-8 border-b border-border"
            >
              <span className="text-muted-foreground text-sm">Paylaş:</span>
              <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: haber.content }}
            />
          </div>
        </div>
      </section>

      {/* Related News */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12 after:left-1/2 after:-translate-x-1/2">
            Diğer Haberler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {otherNews.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/haberler/${item.slug}`}
                  className="news-card block"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="news-card-image"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
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

export default HaberDetay;
