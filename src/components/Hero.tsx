export default function Hero() {
  return (
    <main className="relative overflow-hidden mb-[10px] md:mb-[50px] xl:mb-[100px]">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,0,0,0)_0%,#000_70%)]"></div>

        {/* Hero content */}
        <div className="mt-42 relative z-10 max-w-[1000px] text-center">
          <h1 className="text-white font-bold tracking-tight text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[100px]">
            <span className="block">Future of Advanced</span>
            <span className="block">Materials</span>
          </h1>
          <p className="mt-8 mx-auto max-w-[658px] text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et .
          </p>
          <button className="mt-10 bg-white text-black text-sm sm:text-base rounded-[12px] px-6 sm:px-8 py-3 sm:py-3.5">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
