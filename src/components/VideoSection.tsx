export const VideoSection = () => {
  return (
    <section className="w-screen relative overflow-hidden bg-black" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
      <video
        className="w-full h-auto max-h-[50vh] md:max-h-none object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        <source src="/VideoTH.MOV" type="video/quicktime" />
        <source src="/VideoTH.MOV" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </section>
  );
};
