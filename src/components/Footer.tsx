import logo42 from "@/assets/42-logo.png";
import mastertechLogo from "@/assets/mastertech-logo.png";

export const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-6 overflow-hidden flex flex-col items-center">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(255, 255, 255, 0.06) 99px, rgba(255, 255, 255, 0.06) 100px)',
        }}
      ></div>

      {/* Footer content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-sm pt-12">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span>uma iniciativa colaborativa</span>
            <a 
              href="https://www.42sp.org.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-70 transition-opacity"
            >
              <img 
                src={logo42} 
                alt="42 São Paulo" 
                className="h-6 md:h-8 brightness-0 invert"
              />
            </a>
            <span>e da</span>
            <a 
              href="https://www.mastertech.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-70 transition-opacity"
            >
              <img 
                src={mastertechLogo} 
                alt="Mastertech" 
                className="h-8 md:h-10"
              />
            </a>
          </div>
          
          <div className="flex gap-6 mt-2">
            <a href="mailto:camila@mastertech.com.br" className="hover:opacity-70 transition-opacity">
              camila@mastertech.com.br
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              ↑ Voltar
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};
