import { useEffect, useState } from "react";
import logo42 from "@/assets/42-logo.png";
import mastertechLogo from "@/assets/mastertech-logo-black.png";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateX = Math.min(scrollY * 0.5, 300);

  return <section className="min-h-screen flex flex-col justify-between pt-24 pb-12 border-b border-border relative overflow-hidden">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(0, 0, 0, 0.06) 99px, rgba(0, 0, 0, 0.06) 100px)',
        }}
      ></div>
      <div className="flex-1 flex items-center justify-center overflow-hidden relative z-10">
        <div className="text-center space-y-2 relative">
          <h1 
            className="text-6xl font-bold tracking-tight md:text-[12rem] md:transition-transform md:duration-200 md:ease-out"
            style={{ transform: translateX > 0 ? `translateX(${translateX}px)` : 'none' }}
          >
            tech hall
          </h1>
          <p 
            className="text-4xl font-light tracking-tight md:text-9xl md:transition-transform md:duration-200 md:ease-out"
            style={{ transform: translateX > 0 ? `translateX(-${translateX}px)` : 'none' }}
          >
            IA para a vida real
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 hidden md:block">
        <div className="flex items-end justify-between text-lg md:text-xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span>Uma iniciativa colaborativa da</span>
            <a 
              href="https://www.42sp.org.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-70 transition-opacity"
            >
              <img 
                src={logo42} 
                alt="42 São Paulo" 
                className="h-6 md:h-7"
              />
            </a>
            <span>e da</span>
            <a 
              href="https://mastertech.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-70 transition-opacity"
            >
              <img 
                src={mastertechLogo} 
                alt="Mastertech" 
                className="h-5 md:h-6"
              />
            </a>
          </div>
          
          <a href="#unboxing" className="hover:opacity-70 transition-opacity">
            Scroll ↓
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:hidden">
        <div className="flex flex-col items-center gap-2 text-sm">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span>Uma iniciativa colaborativa da</span>
            <a 
              href="https://www.42sp.org.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-70 transition-opacity"
            >
              <img 
                src={logo42} 
                alt="42 São Paulo" 
                className="h-5"
              />
            </a>
            <span>e da</span>
            <a 
              href="https://mastertech.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-70 transition-opacity"
            >
              <img 
                src={mastertechLogo} 
                alt="Mastertech" 
                className="h-4"
              />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
