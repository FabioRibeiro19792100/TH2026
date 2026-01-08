export const LowProfileBar = () => {
  return (
    <section className="relative bg-black text-white py-16 md:py-24 px-6 overflow-hidden">
      {/* Subtle vertical lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(255, 255, 255, 0.06) 99px, rgba(255, 255, 255, 0.06) 100px)',
        }}
      ></div>

      {/* Scrolling text */}
      <div className="flex items-center overflow-hidden relative z-10">
        <div className="flex whitespace-nowrap">
          <div className="flex gap-12 animate-scroll-lowprofile text-6xl md:text-[120px] font-light">
            <span>low profile, high standards —</span>
            <span>low profile, high standards —</span>
            <span>low profile, high standards —</span>
          </div>
          <div className="flex gap-12 animate-scroll-lowprofile text-6xl md:text-[120px] font-light ml-12">
            <span>low profile, high standards —</span>
            <span>low profile, high standards —</span>
            <span>low profile, high standards —</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-lowprofile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll-lowprofile {
          animation: scroll-lowprofile 60s linear infinite;
        }
      `}</style>
    </section>
  );
};
