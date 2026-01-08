import { Button } from "@/components/ui/button";
export const GetOnBoard = () => {
  return <section id="inscricao" className="py-32 px-6 relative overflow-hidden">
      {/* Subtle vertical lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(0, 0, 0, 0.06) 99px, rgba(0, 0, 0, 0.06) 100px)'
    }}></div>
      
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-6">
          <h2 className="text-[60px] md:text-[180px] font-light leading-[0.85] tracking-tight">
            get on
          </h2>
          <h2 className="text-[60px] md:text-[180px] font-light leading-[0.85] tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10">board</span>
              <span className="absolute bottom-4 md:bottom-8 left-0 w-12 md:w-24 h-2 md:h-3 bg-[#d4ff00] z-0"></span>
            </span>
            <span className="inline-block w-16 md:w-32 h-1 md:h-2 bg-foreground ml-2 md:ml-4 mb-8 md:mb-12"></span>
          </h2>
          <p className="text-xl md:text-3xl font-light mt-8">
            15 tickets disponíveis
          </p>
        </div>

        <div className="space-y-12 text-center max-w-3xl mx-auto pt-8">
          {/* Investimento com círculo rotativo */}
          <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[700px] w-full">
            {/* Circular rotating text - Investimento */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px]" style={{ animation: 'spin 40s linear infinite reverse' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circle-investimento"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[9px] fill-gray-300 uppercase tracking-wider font-medium">
                    <textPath href="#circle-investimento" startOffset="0">
                      investimento • investimento • investimento • 
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* Conteúdo centralizado dentro do círculo */}
            <div className="space-y-4 relative z-10 text-center">
              <p className="text-4xl md:text-5xl font-bold">
                <span className="relative inline-block">
                  R$ 80k
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-1 md:h-2 bg-[#d4ff00]"></span>
                </span>
                <span className="text-2xl md:text-3xl font-light"> (por pessoa)</span>
              </p>
              <div className="max-w-2xl mx-auto pt-2 mb-6 md:mb-8">
                <p className="text-base md:text-lg font-normal opacity-80 leading-tight mb-0">
                  O valor se refere à experiência completa do Tech Hall.
                </p>
                <p className="text-xs md:text-sm font-normal opacity-80 leading-tight mt-0">
                  Para contratar separadamente imersões ou Labs, <a href="mailto:camila@mastertech.com.br" className="underline font-medium hover:opacity-70 transition-opacity">entre em contato</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botão principal - largura total da página */}
      <div className="pt-6 md:pt-8 w-screen -mx-6">
        <Button size="lg" className="w-full px-6 md:px-12 py-4 md:py-6 text-xl md:text-3xl font-bold rounded-none" style={{
          backgroundColor: '#d4ff00',
          color: '#000000',
          minHeight: '60px',
          lineHeight: '1.2'
        }} asChild>
          <a href="https://wa.me/5511981023003" target="_blank" rel="noopener noreferrer" className="block">
            <span className="hidden md:inline">QUERO GARANTIR MEU ASSENTO • QUERO GARANTIR MEU ASSENTO • QUERO GARANTIR MEU ASSENTO</span>
            <span className="md:hidden">QUERO GARANTIR MEU ASSENTO</span>
          </a>
        </Button>
      </div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        <div className="space-y-12 text-center max-w-3xl mx-auto">
          {/* Disclaimer */}
          <div className="pt-8 space-y-2 md:space-y-3">
            <p className="text-xs md:text-sm font-light opacity-60 leading-relaxed max-w-2xl mx-auto">
              O Tech Hall é uma iniciativa sem fins lucrativos.
            </p>
            <p className="text-xs md:text-sm font-light opacity-60 leading-relaxed max-w-2xl mx-auto">
              Os recursos serão destinados a ações sociais da SOMAS, ONG da Mastertech,<br />
              e a bolsas de estudo para alunos da 42 SP.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
