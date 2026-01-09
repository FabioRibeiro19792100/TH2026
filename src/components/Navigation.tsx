import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navigation = () => {
  const [time, setTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[3px] border-black overflow-hidden">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(0, 0, 0, 0.06) 99px, rgba(0, 0, 0, 0.06) 100px)',
        }}
      ></div>
      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8 text-base flex-1">
            <div className="flex-1"></div>
            
            <div className="flex items-center gap-8">
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className="font-semibold hover:opacity-70 transition-opacity relative group cursor-pointer"
              >
                <span className="pb-1 inline-block">A experiência</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#detalhes" 
                onClick={(e) => scrollToSection(e, 'detalhes')}
                className="font-semibold hover:opacity-70 transition-opacity relative group cursor-pointer"
              >
                <span className="pb-1 inline-block">Como funciona</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#programa" 
                onClick={(e) => scrollToSection(e, 'programa')}
                className="font-semibold hover:opacity-70 transition-opacity relative group cursor-pointer"
              >
                <span className="pb-1 inline-block">O programa</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#humans-in-loop" 
                onClick={(e) => scrollToSection(e, 'humans-in-loop')}
                className="font-semibold hover:opacity-70 transition-opacity relative group cursor-pointer"
              >
                <span className="pb-1 inline-block">A comunidade</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#inscricao" 
                onClick={(e) => scrollToSection(e, 'inscricao')}
                className="font-semibold hover:opacity-70 transition-opacity relative group cursor-pointer"
              >
                <span className="pb-1 inline-block">Investimento</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            <div className="flex-1 text-right text-base">
              São Paulo • {time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center justify-between w-full">
            <div className="text-sm">
              São Paulo • {time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
            </div>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <div className="flex flex-col gap-6 mt-8">
                  <a 
                    href="#about" 
                    onClick={(e) => scrollToSection(e, 'about')}
                    className="text-2xl font-semibold hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    A experiência
                  </a>
                  <a 
                    href="#detalhes" 
                    onClick={(e) => scrollToSection(e, 'detalhes')}
                    className="text-2xl font-semibold hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    Como funciona
                  </a>
                  <a 
                    href="#programa" 
                    onClick={(e) => scrollToSection(e, 'programa')}
                    className="text-2xl font-semibold hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    O programa
                  </a>
                  <a 
                    href="#humans-in-loop" 
                    onClick={(e) => scrollToSection(e, 'humans-in-loop')}
                    className="text-2xl font-semibold hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    A comunidade
                  </a>
                  <a 
                    href="#inscricao" 
                    onClick={(e) => scrollToSection(e, 'inscricao')}
                    className="text-2xl font-semibold hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    Investimento
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
