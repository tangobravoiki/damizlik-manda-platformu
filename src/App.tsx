import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Kurumsal from "./pages/Kurumsal";
import Hakkimizda from "./pages/Hakkimizda";
import YonetimKurulu from "./pages/YonetimKurulu";
import Tarihce from "./pages/Tarihce";
import Organizasyon from "./pages/Organizasyon";
import Projeler from "./pages/Projeler";
import Istatistikler from "./pages/Istatistikler";
import Mevzuat from "./pages/Mevzuat";
import Haberler from "./pages/Haberler";
import HaberDetay from "./pages/HaberDetay";
import Iletisim from "./pages/Iletisim";
import Genetik from "./pages/Genetik";
import Yayinlar from "./pages/Yayinlar";
import VideoGaleri from "./pages/VideoGaleri";
import GizlilikPolitikasi from "./pages/GizlilikPolitikasi";
import KVKK from "./pages/KVKK";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kurumsal" element={<Kurumsal />} />
          <Route path="/kurumsal/hakkimizda" element={<Hakkimizda />} />
          <Route path="/kurumsal/yonetim-kurulu" element={<YonetimKurulu />} />
          <Route path="/kurumsal/tarihce" element={<Tarihce />} />
          <Route path="/kurumsal/organizasyon" element={<Organizasyon />} />
          <Route path="/projeler" element={<Projeler />} />
          <Route path="/istatistikler" element={<Istatistikler />} />
          <Route path="/mevzuat" element={<Mevzuat />} />
          <Route path="/haberler" element={<Haberler />} />
          <Route path="/haberler/:slug" element={<HaberDetay />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/genetik" element={<Genetik />} />
          <Route path="/yayinlar" element={<Yayinlar />} />
          <Route path="/video-galeri" element={<VideoGaleri />} />
          <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
          <Route path="/kvkk" element={<KVKK />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
