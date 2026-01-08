export const AlternativeOptions = () => {
  return (
    <section className="py-12 md:py-16 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(0, 0, 0, 0.03) 99px, rgba(0, 0, 0, 0.03) 100px)',
        }}
      ></div>
      <div className="container mx-auto max-w-3xl relative z-10">
        <p className="text-sm md:text-base font-normal opacity-70 leading-relaxed text-center">
          Há possibilidade de participação apenas nas imersões ou apenas no Lab.<br />
          <a href="mailto:camila@mastertech.com.br" className="font-medium underline hover:opacity-80 transition-opacity">
            Para isso, entre em contato.
          </a>
        </p>
      </div>
    </section>
  );
};
