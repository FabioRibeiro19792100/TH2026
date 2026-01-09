import { Linkedin } from "lucide-react";
import camilaFoto from "@/assets/camila-achutti.jpg";
import karenFoto from "@/assets/karen-kanaan.jpg";

export const Coordenadoras = () => {
  const coordenadoras = [
    {
      nome: "Camila Achutti",
      organizacao: "Mastertech",
      foto: camilaFoto,
      linkedin: "https://www.linkedin.com/in/camilaachutti"
    },
    {
      nome: "Karen Kanaan",
      organizacao: "42 São Paulo",
      foto: karenFoto,
      linkedin: "https://www.linkedin.com/in/karenkanaan"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 border-t-[3px] border-black bg-background relative overflow-hidden">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(0, 0, 0, 0.06) 99px, rgba(0, 0, 0, 0.06) 100px)',
        }}
      ></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <h2 className="text-[20px] md:text-[72px] font-light leading-[0.85] tracking-tight text-center">
            Conceito, Experiência e Coordenação
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full">
            {coordenadoras.map((coordenadora, index) => (
              <div key={index} className="flex flex-col items-center gap-4 md:gap-6 text-center">
                {/* Foto redonda */}
                <div className="relative">
                  <img 
                    src={coordenadora.foto} 
                    alt={coordenadora.nome}
                    className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover"
                  />
                  {/* Ícone LinkedIn flutuante */}
                  <a 
                    href={coordenadora.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-2 -right-2 bg-black text-white p-2 md:p-3 rounded-full hover:bg-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl md:text-3xl font-bold">
                    {coordenadora.nome}
                  </h3>
                  <p className="text-sm md:text-lg text-muted-foreground">
                    {coordenadora.organizacao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
