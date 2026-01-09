import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LowProfileBar } from "@/components/LowProfileBar";
import { About } from "@/components/About";
import { VideoSection } from "@/components/VideoSection";
import { Unboxing } from "@/components/Unboxing";
import { HowItWorks } from "@/components/HowItWorks";
import { Details } from "@/components/Details";
import { Programa } from "@/components/Programa";
import { Experience } from "@/components/Experience";
import { HumansInLoop } from "@/components/HumansInLoop";
import { GetOnBoard } from "@/components/GetOnBoard";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Coordenadoras } from "@/components/Coordenadoras";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LowProfileBar />
      <About />
      <VideoSection />
      <Unboxing />
      <HowItWorks />
      <Details />
      <Programa />
      <HumansInLoop />
      <GetOnBoard />
      <Experience />
      <ImageCarousel />
      <Coordenadoras />
      <Footer />
    </div>
  );
};

export default Index;
