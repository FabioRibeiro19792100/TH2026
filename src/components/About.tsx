export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 border-t-[3px] border-black relative overflow-hidden">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(0, 0, 0, 0.06) 99px, rgba(0, 0, 0, 0.06) 100px)',
        }}
      ></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          <p className="text-xl md:text-3xl leading-relaxed">
            Tech Hall é um ciclo anual de encontros presenciais sobre inteligência artificial, voltado a executivos, conselheiros e lideranças seniores.
          </p>
          <p className="text-xl md:text-3xl leading-relaxed">
            A iniciativa reúne a comunidade da 42 São Paulo e a experiência pedagógica da Mastertech para discutir aplicações práticas de IA em negócios.
          </p>
        </div>
      </div>
    </section>
  );
};
