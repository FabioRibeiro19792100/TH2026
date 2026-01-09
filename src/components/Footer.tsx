import logo42 from "@/assets/42-logo.png";
import mastertechLogo from "@/assets/mastertech-logo.png";

export const Footer = () => {
  return (
    <footer className="relative bg-black text-white aspect-video overflow-hidden flex flex-col items-center justify-center">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(255, 255, 255, 0.06) 99px, rgba(255, 255, 255, 0.06) 100px)',
        }}
      ></div>

      {/* Footer content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 md:gap-12 w-full px-6">
        <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wide text-center">
          Uma iniciativa colaborativa
        </p>
        <div className="flex items-end justify-center gap-8 md:gap-16">
          <a 
            href="https://www.42sp.org.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity flex items-end"
          >
            <img 
              src={logo42} 
              alt="42 São Paulo" 
              className="h-20 md:h-32 brightness-0 invert"
            />
          </a>
          <a 
            href="https://mastertech.com.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity flex items-end"
            style={{ paddingTop: '16px' }}
          >
            <img 
              src={mastertechLogo} 
              alt="Mastertech" 
              className="h-16 md:h-28"
            />
          </a>
        </div>
      </div>

    </footer>
  );
};
