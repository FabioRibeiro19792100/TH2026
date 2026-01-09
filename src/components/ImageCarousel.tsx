import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const ImageCarousel = () => {
  const images = [gallery1, gallery2, gallery3];

  return (
    <section className="pt-8 md:pt-12 pb-24 px-6 relative overflow-hidden">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(0, 0, 0, 0.06) 99px, rgba(0, 0, 0, 0.06) 100px)',
        }}
      ></div>
      
      <div className="relative z-10">
        <div className="flex overflow-hidden">
          {/* First set of images */}
          <div className="flex gap-6 animate-scroll">
            {images.map((img, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-[300px] md:w-[500px] h-[210px] md:h-[350px] rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt={`Galeria Tech Hall ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-6 animate-scroll ml-6">
            {images.map((img, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-[300px] md:w-[500px] h-[210px] md:h-[350px] rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt={`Galeria Tech Hall ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(calc(-300px * 3 - 72px));
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @media (min-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(calc(-500px * 3 - 72px));
            }
            100% {
              transform: translateX(0);
            }
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
      
      {/* Faixa de contato - estilo similar ao botão */}
      <div className="pt-6 md:pt-8 w-screen -mx-6">
        <a 
          href="https://wa.me/5511981023003" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-6 md:px-12 text-lg md:text-3xl font-bold rounded-none uppercase flex items-center justify-center"
          style={{
            backgroundColor: '#d4ff00',
            color: '#000000',
            height: '72px',
            lineHeight: '1.2',
            paddingTop: '0',
            paddingBottom: '0'
          }}
        >
          Para contratar separadamente imersões ou Labs, <span className="underline">
            entre em contato
          </span>
          .
        </a>
      </div>
    </section>
  );
};
