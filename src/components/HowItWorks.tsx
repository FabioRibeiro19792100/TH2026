import { useEffect, useState, useRef } from "react";

export const HowItWorks = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calcular o offset baseado na posição real da seção
  const sectionOffset = sectionRef.current?.offsetTop || 0;
  const relativeScroll = Math.max(0, scrollY - sectionOffset + window.innerHeight * 0.5);
  const translateX = Math.min(relativeScroll * 0.5, 300);

  return (
    <section ref={sectionRef} className="min-h-[40vh] md:min-h-[50vh] flex items-center justify-center pt-8 md:pt-12 pb-8 md:pb-12 px-6 relative overflow-hidden">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(0, 0, 0, 0.06) 99px, rgba(0, 0, 0, 0.06) 100px)',
        }}
      ></div>
      <div className="flex-1 flex items-center justify-center overflow-hidden relative z-10">
        <div className="text-center space-y-2">
          <h2 
            className="text-6xl md:text-9xl font-light tracking-tight md:transition-transform md:duration-200 md:ease-out"
            style={{ transform: translateX > 0 ? `translateX(${translateX}px)` : 'none' }}
          >
            como vai funcionar
          </h2>
          <p 
            className="text-6xl md:text-9xl font-bold tracking-tight md:transition-transform md:duration-200 md:ease-out"
            style={{ transform: translateX > 0 ? `translateX(-${translateX}px)` : 'none' }}
          >
            o tech hall
          </p>
        </div>
      </div>
    </section>
  );
};
