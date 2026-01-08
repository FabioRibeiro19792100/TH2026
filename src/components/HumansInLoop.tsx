import { Users, Code } from "lucide-react";

export const HumansInLoop = () => {
  return (
    <section id="humans-in-loop" className="relative min-h-screen bg-black text-white flex flex-col justify-center py-32 px-6 overflow-hidden">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white"></div>

      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(255, 255, 255, 0.06) 99px, rgba(255, 255, 255, 0.06) 100px)',
        }}
      ></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="space-y-16 md:space-y-24">
          {/* Texto introdutório - bem dimensionado */}
          <div className="mb-0 md:mb-2">
            <p className="text-2xl md:text-4xl font-light tracking-tight" style={{ color: '#d4ff00' }}>
              &lt;o diferencial do modelo <span className="font-bold">tech hall</span>&gt;
            </p>
          </div>

          {/* Main title */}
          <div className="space-y-0">
            <h2 className="text-[70px] md:text-[200px] font-light leading-[0.9] tracking-tight">
              humans in
            </h2>
            <h2 className="text-[70px] md:text-[200px] font-light leading-[0.9] tracking-tight">
              the <span className="italic font-bold relative inline-block">
                loop
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-[#d4ff00]"></span>
              </span>
            </h2>
          </div>

          {/* Conteúdo */}
          <div className="space-y-16 md:space-y-24">
            {/* Parte 1: Alumni */}
            <div>
              {/* Duas colunas - 40/60 */}
              <div className="grid grid-cols-[40%_60%] gap-0">
                <div className="relative hidden md:block">
                  {/* Circular rotating text - Alumni */}
                  <div className="absolute top-0 left-0 w-48 h-48 md:w-56 md:h-56" style={{ animation: 'spin 20s linear infinite reverse' }}>
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <path
                          id="circle-alumni"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text className="text-[11px] fill-current uppercase tracking-wider font-medium">
                        <textPath href="#circle-alumni" startOffset="0">
                          alumni • alumni • alumni • alumni • 
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
                <div className="space-y-6 md:space-y-8 text-left">
                  <div className="space-y-6 mb-8 md:mb-12">
                    <Users className="w-16 h-16 stroke-[1]" />
                    <h3 className="text-[28px] md:text-[63px] font-light italic leading-[0.9] tracking-tight">
                      <span className="relative inline-block">
                        Alumni
                        <span className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-1 md:h-2 bg-[#d4ff00]"></span>
                      </span>
                    </h3>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-base md:text-xl leading-relaxed">
                      Os alumni do Tech Hall permanecem na comunidade. Voltam aos encontros, acompanham as conversas, participam das novas temporadas.
                    </p>
                    <p className="text-base md:text-xl leading-relaxed">
                      Mas tem uma função mais importante. Eles ajudam a decidir o que vem a seguir. Qual tema entra na próxima temporada, em que ordem, com que urgência. O programa cobre IA em todas as frentes: ferramentas, arquitetura, modelos, interfaces, aplicações, estratégia.
                    </p>
                    <p className="text-base md:text-xl leading-relaxed">
                      Os alumni organizam isso conforme o contexto muda.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parte 2: Tech Buddies */}
            <div>
              {/* Duas colunas - 60/40 (invertido) */}
              <div className="grid grid-cols-[60%_40%] gap-0">
                <div className="space-y-6 md:space-y-8 text-left">
                  <div className="space-y-6 mb-8 md:mb-12">
                    <Code className="w-16 h-16 stroke-[1]" />
                    <h3 className="text-[28px] md:text-[63px] font-light italic leading-[0.9] tracking-tight">
                      <span className="relative inline-block">
                        Tech Buddies
                        <span className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-1 md:h-2 bg-[#d4ff00]"></span>
                      </span>
                    </h3>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-base md:text-xl leading-relaxed">
                      Cada participante do Tech Hall trabalha em dupla com um cadete da 42 São Paulo durante todo o programa. Os dois desenvolvem juntos as soluções, testam ideias, constroem protótipos e colocam as conversas em prática.
                    </p>
                    <p className="text-base md:text-xl leading-relaxed">
                      A dupla funciona com duas expertises, uma em negócio e outra em programação.
                    </p>
                  </div>
                </div>
                <div className="relative hidden md:block">
                  {/* Circular rotating text - Tech Buddies */}
                  <div className="absolute top-0 right-0 w-48 h-48 md:w-56 md:h-56" style={{ animation: 'spin 20s linear infinite reverse' }}>
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <path
                          id="circle-techbuddies"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text className="text-[11px] fill-current uppercase tracking-wider font-medium">
                        <textPath href="#circle-techbuddies" startOffset="0">
                          tech buddies • tech buddies • tech buddies • 
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
