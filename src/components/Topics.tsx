export const Topics = () => {
  return (
    <section className="py-20 md:py-32 px-6 border-t-[3px] border-black relative overflow-hidden">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(0, 0, 0, 0.06) 99px, rgba(0, 0, 0, 0.06) 100px)',
        }}
      ></div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Seleção de temas</h3>
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-2xl leading-relaxed">
                Definição de temas a partir de problemas reais enfrentados pelas organizações e pelo grupo.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed">
                Os temas de cada encontro são definidos ao longo do ano, a partir do contexto e da decisão de um conselho formado por participantes da primeira turma.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-2xl md:text-3xl font-bold">Exemplos de temas trabalhados no Tech Hall:</h4>
            <ul className="space-y-3 text-muted-foreground leading-relaxed font-normal text-base md:text-lg">
              <li>• Preparar a arquitetura de dados para escalar soluções de IA</li>
              <li>• Decidir quando construir, comprar ou adaptar modelos</li>
              <li>• Organizar times e papéis para adoção de IA no dia a dia</li>
              <li>• Integrar IA a processos existentes sem quebrar a operação</li>
              <li>• Levar protótipos para uso recorrente dentro da empresa</li>
              <li>• Definir critérios de investimento e governança em IA</li>
            </ul>
            <p className="text-sm md:text-base text-muted-foreground italic">
              (Os temas variam a cada ciclo e não compõem uma grade fixa.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
