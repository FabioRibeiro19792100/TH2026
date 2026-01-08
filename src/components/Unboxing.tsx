export const Unboxing = () => {
  return (
    <section id="unboxing" className="aspect-video bg-black text-white flex flex-col justify-center items-center py-12 px-6 relative overflow-hidden">
      {/* Grid quadriculado - 6 colunas e 6 linhas pontilhadas */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" style={{ opacity: 0.15 }}>
          <defs>
            {/* Padrão para linhas verticais pontilhadas com mais espaçamento */}
            <pattern id="vertical-dots" x="0" y="0" width="1" height="30" patternUnits="userSpaceOnUse">
              <circle cx="0.5" cy="5" r="1.5" fill="white" />
              <circle cx="0.5" cy="25" r="1.5" fill="white" />
            </pattern>
            {/* Padrão para linhas horizontais pontilhadas com mais espaçamento */}
            <pattern id="horizontal-dots" x="0" y="0" width="30" height="1" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="0.5" r="1.5" fill="white" />
              <circle cx="25" cy="0.5" r="1.5" fill="white" />
            </pattern>
          </defs>
          {/* Linhas verticais pontilhadas */}
          {[...Array(7)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${(i * 100) / 6}%`}
              y1="0%"
              x2={`${(i * 100) / 6}%`}
              y2="100%"
              stroke="url(#vertical-dots)"
              strokeWidth="1"
            />
          ))}
          {/* Linhas horizontais pontilhadas */}
          {[...Array(7)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0%"
              y1={`${(i * 100) / 6}%`}
              x2="100%"
              y2={`${(i * 100) / 6}%`}
              stroke="url(#horizontal-dots)"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-8 md:space-y-16">
        <h2 className="text-6xl md:text-[200px] font-light text-center">
          unboxin<span className="underline decoration-4 underline-offset-8">g</span>
        </h2>
        
        <div className="text-6xl md:text-[120px] leading-none">
          ↓
        </div>
      </div>
      
      <div className="h-4 md:h-8"></div>
    </section>
  );
};
