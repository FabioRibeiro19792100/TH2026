import logo42 from "@/assets/42-logo.png";
import mastertechLogo from "@/assets/mastertech-logo.png";

export const Partners = () => {
  return (
    <section className="py-11 md:py-16 px-6 border-t-[3px] border-white bg-black text-white relative overflow-hidden">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(255, 255, 255, 0.06) 99px, rgba(255, 255, 255, 0.06) 100px)',
        }}
      ></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wide text-center">
            Uma iniciativa colaborativa
          </p>
          <div className="flex items-center justify-center gap-6 md:gap-11">
            <a 
              href="https://www.42sp.org.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img 
                src={logo42} 
                alt="42 São Paulo" 
                className="h-16 md:h-20 brightness-0 invert"
              />
            </a>
            <a 
              href="https://mastertech.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img 
                src={mastertechLogo} 
                alt="Mastertech" 
                className="h-14 md:h-20"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
