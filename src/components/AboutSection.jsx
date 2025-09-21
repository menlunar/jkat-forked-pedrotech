import { HeartPlus, User, Smile } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Our Passion. Our Purpose. Our Gym.
            </h3>

            <p className="text-muted-foreground">
              Founded in 2017 by a group of friends with a shared passion for Jiu-Jitsu and martial arts, <b>JKAT Training Alley</b> is a place where everyone is welcome. Built from the ground up through hard work, dedication, and a love for training, we’ve created a safe and supportive environment where people of all levels can grow. Whether you’re here to gain confidence, get in shape, learn self-defense, or simply connect with like-minded individuals, we offer classes in BJJ, Judo, Wrestling, FMA, Striking, and MMA to help you reach your goals.
            </p>

            <p className="text-muted-foreground">
              Our gym is more than just a training space—it’s a community built on friendship, trust, and mutual respect. We’re here to help you grow both on and off the mats, and when we can, we look for ways to give back to the community. It’s about more than just technique—it’s about building real connections, pushing each other to be better, and creating something meaningful together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Join Us
              </a>

              {/* <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a> */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Martial Arts Training</h4>
                  <p className="text-muted-foreground">
                    Empowering you through expert coaching in BJJ, Judo, Wrestling, FMA, Striking, and MMA.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smile className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Community & Support</h4>
                  <p className="text-muted-foreground">
                    Building strong friendships and a safe space where everyone can grow and belong.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <HeartPlus className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Giving Back</h4>
                  <p className="text-muted-foreground">
                    Engaging with and supporting the community that has supported our journey since day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
