import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const populasyonVerileri = [
  { il: "Diyarbakır", manda: 42500, oran: 12.5 },
  { il: "Muş", manda: 38200, oran: 11.2 },
  { il: "Bitlis", manda: 35800, oran: 10.5 },
  { il: "İstanbul", manda: 28500, oran: 8.4 },
  { il: "Afyonkarahisar", manda: 25200, oran: 7.4 },
  { il: "Samsun", manda: 22100, oran: 6.5 },
  { il: "Tokat", manda: 18500, oran: 5.4 },
  { il: "Amasya", manda: 15200, oran: 4.5 },
  { il: "Kayseri", manda: 12800, oran: 3.8 },
  { il: "Çorum", manda: 10500, oran: 3.1 },
];

const yillikVeriler = [
  { yil: "2018", populasyon: 185000, sut: 125000, trend: "up" },
  { yil: "2019", populasyon: 215000, sut: 145000, trend: "up" },
  { yil: "2020", populasyon: 248000, sut: 168000, trend: "up" },
  { yil: "2021", populasyon: 285000, sut: 195000, trend: "up" },
  { yil: "2022", populasyon: 320000, sut: 220000, trend: "up" },
  { yil: "2023", populasyon: 355000, sut: 245000, trend: "up" },
  { yil: "2024", populasyon: 398000, sut: 275000, trend: "up" },
];

const uretimVerileri = [
  { kategori: "Ortalama Süt Verimi", deger: "1.850 lt/yıl", degisim: "+8%", trend: "up" },
  { kategori: "Süt Yağ Oranı", deger: "%7.2", degisim: "+0.3%", trend: "up" },
  { kategori: "Süt Protein Oranı", deger: "%4.5", degisim: "0%", trend: "stable" },
  { kategori: "Laktasyon Süresi", deger: "280 gün", degisim: "+5 gün", trend: "up" },
  { kategori: "Buzağılama Aralığı", deger: "425 gün", degisim: "-15 gün", trend: "down" },
  { kategori: "İlk Buzağılama Yaşı", deger: "38 ay", degisim: "-2 ay", trend: "down" },
];

const Istatistikler = () => {
  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (trend === "down") return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

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
            İstatistikler
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-center mt-4 max-w-2xl mx-auto"
          >
            Türkiye manda yetiştiriciliği verileri ve analizleri
          </motion.p>
        </div>
      </section>

      {/* Yıllık Veriler */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12 after:left-1/2 after:-translate-x-1/2"
          >
            Yıllık Gelişim
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-display font-semibold text-foreground">Yıl</th>
                  <th className="text-right py-4 px-4 font-display font-semibold text-foreground">Manda Sayısı</th>
                  <th className="text-right py-4 px-4 font-display font-semibold text-foreground">Süt Üretimi (ton)</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-foreground">Trend</th>
                </tr>
              </thead>
              <tbody>
                {yillikVeriler.map((veri, index) => (
                  <motion.tr
                    key={veri.yil}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-foreground">{veri.yil}</td>
                    <td className="py-4 px-4 text-right text-muted-foreground">
                      {veri.populasyon.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right text-muted-foreground">
                      {veri.sut.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {getTrendIcon(veri.trend)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* İl Bazlı Dağılım */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12 after:left-1/2 after:-translate-x-1/2"
          >
            İl Bazlı Manda Dağılımı
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {populasyonVerileri.map((veri, index) => (
              <motion.div
                key={veri.il}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-lg p-4 shadow-soft"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{veri.il}</span>
                  <span className="text-muted-foreground text-sm">
                    {veri.manda.toLocaleString()} baş (%{veri.oran})
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${veri.oran * 8}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className="bg-primary h-3 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Üretim Verileri */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12 after:left-1/2 after:-translate-x-1/2"
          >
            Verimlilik Göstergeleri (2024)
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {uretimVerileri.map((veri, index) => (
              <motion.div
                key={veri.kategori}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card p-6 text-center"
              >
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  {veri.kategori}
                </h3>
                <p className="text-3xl font-display font-bold text-foreground mb-2">
                  {veri.deger}
                </p>
                <div className="flex items-center justify-center gap-2">
                  {getTrendIcon(veri.trend)}
                  <span className={`text-sm ${
                    veri.trend === "up" ? "text-green-600" : 
                    veri.trend === "down" ? "text-red-600" : 
                    "text-muted-foreground"
                  }`}>
                    {veri.degisim}
                  </span>
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

export default Istatistikler;
