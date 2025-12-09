import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import About from "@/components/About";
import Stats from "@/components/Stats";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <Services />
        <About />
        <Stats />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
