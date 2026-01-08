import { Square, Globe, Sun, FileText, Calendar, MapPin } from "lucide-react";

export const Details = () => {
  const features = [
    {
      icon: Square,
      title: "Demonstrações e casos",
      description: "Demonstrações técnicas e análise de casos reais para sustentar decisões e escolhas práticas."
    },
    {
      icon: Globe,
      title: "Discussão com pares e convidados",
      description: "Discussões entre lideranças e convidados, ancoradas em experiências concretas e situações reais."
    },
    {
      icon: Sun,
      title: "Experimentação acompanhada",
      description: "Testes práticos de ideias e projetos, com apoio técnico para explorar caminhos possíveis."
    }
  ];

  return (
    <section id="detalhes" className="pt-16 md:pt-24 pb-20 md:pb-32 px-6 border-t-[3px] border-black font-sans relative overflow-hidden">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(0, 0, 0, 0.06) 99px, rgba(0, 0, 0, 0.06) 100px)',
        }}
      ></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Primeira linha: Contrato, Calendário, Formato */}
          <div className="space-y-6">
            <FileText className="w-16 h-16 stroke-[1]" />
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wide font-normal">
                contrato
              </p>
              <h3 className="text-2xl md:text-4xl font-normal leading-tight">
                8 sessões<br />por temporada
              </h3>
            </div>
          </div>

          <div className="space-y-6">
            <Calendar className="w-16 h-16 stroke-[1]" />
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wide font-normal">
                calendário
              </p>
              <div className="space-y-3">
                <p className="text-xl md:text-2xl font-normal">26 e 27 de março</p>
                <p className="text-xl md:text-2xl font-normal">23 e 24 de abril</p>
                <p className="text-xl md:text-2xl font-normal">28 e 29 de maio</p>
                <p className="text-xl md:text-2xl font-normal">25 e 26 de junho</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <MapPin className="w-16 h-16 stroke-[1]" />
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wide font-normal">
                formato
              </p>
              <h3 className="text-2xl md:text-4xl font-normal leading-tight">
                presencial,<br />em São Paulo,<br />na vila Madalena
              </h3>
              <p className="text-2xl md:text-4xl font-bold italic">
                9am - 5pm
              </p>
            </div>
          </div>
        </div>

        {/* Linha separadora - de extremidade a extremidade */}
        <div className="relative my-8" style={{ width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
          <div className="h-[3px] bg-black"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Segunda linha: Features com ícones */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="space-y-6">
                <Icon className="w-16 h-16 stroke-[1]" />
                <h4 className="text-xl md:text-2xl font-bold">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
