import { useEffect, useRef, useState } from "react";

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-16 md:pt-24 pb-12 md:pb-16 px-6 border-t-[3px] border-black overflow-hidden">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(0, 0, 0, 0.06) 99px, rgba(0, 0, 0, 0.06) 100px)',
        }}
      ></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Circular rotating text - hidden on mobile */}
        <div className="hidden md:block absolute -top-20 -right-20 w-48 h-48 md:w-56 md:h-56" style={{ animation: 'spin 20s linear infinite reverse' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[11px] fill-current uppercase tracking-wider font-medium">
              <textPath href="#circle" startOffset="0">
                tech hall • tech hall • tech hall • 
              </textPath>
            </text>
          </svg>
        </div>

        <div className="text-left md:text-center space-y-12">
          {/* Main impactful phrase with staggered animation */}
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-light leading-tight tracking-[-0.09em]">
            <span 
              className={`inline-block mr-2 md:mr-6 ${isVisible ? 'md:animate-fade-in-up' : ''}`}
              style={{ animationDelay: '0ms' }}
            >
              a
            </span>
            <span 
              className={`inline-block mr-2 md:mr-6 ${isVisible ? 'md:animate-fade-in-up' : ''}`}
              style={{ animationDelay: '100ms' }}
            >
              experiência
            </span>
            <span 
              className={`inline-block mr-2 md:mr-6 ${isVisible ? 'md:animate-fade-in-up' : ''}`}
              style={{ animationDelay: '200ms' }}
            >
              está
            </span>
            <span 
              className={`inline-block italic mr-2 md:mr-6 ${isVisible ? 'md:animate-fade-in-up' : ''}`}
              style={{ animationDelay: '300ms' }}
            >
              nas
            </span>
            <span 
              className={`inline-block italic ${isVisible ? 'md:animate-fade-in-up' : ''}`}
              style={{ animationDelay: '400ms' }}
            >
              pessoas.
            </span>
          </h2>

          {/* Subtitle */}
          <p 
            className={`text-lg md:text-2xl text-muted-foreground ${isVisible ? 'md:animate-fade-in-up md:delay-500' : ''}`}
          >
            (just in case) café, água e bolo na mesa do fundo.
          </p>
        </div>
      </div>
    </section>
  );
};
