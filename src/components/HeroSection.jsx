import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >

      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/JKAT_hero_scection.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl mx-auto text-left z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {/* <span className="opacity-0 animate-fade-in"> Hi, I'm</span> */}
            {/* <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              JKAT
            </span> */}
            <span className="text-white text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              JKAT Training Alley
            </span>
          </h1>

          <p className="text-white text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Brazilian Jiu-Jitsu, Judo, Wrestling, FMA, Striking, and MMA in Lucena City
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View Our Programs
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section >
  );
};
