import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Brazilian Jiu-Jitsu",
    description: "Ground-based martial art focusing on leverage, technique, and submissions through chokes and joint locks.",
    image: "/projects/bjj_pic.jpg",
    tags: ["Grappling", "Gi", "No-Gi"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Judo",
    description: "Olympic martial art emphasizing throws, pins, and submissions with focus on using opponent's force against them.",
    image: "/projects/judo_pic.jpg",
    tags: ["Takedowns", "Olympics"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Wrestling",
    description: "Combat sport focused on takedowns, control, and pinning techniques with emphasis on conditioning and mental toughness.",
    image: "/projects/wrestling_pic.jpg",
    tags: ["Takedowns", "Olympics", "Freestyle"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Filipino Martial Arts (FMA)",
    description: "Comprehensive weapons-based system including stick fighting, knife defense, and empty-hand combat techniques.",
    image: "/projects/fma_pic.jpg",
    tags: ["Striking", "Weapons", "Self-Defense"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Striking",
    description: "Traditional karate and modern striking techniques combining punches, kicks, blocks, and sweeps.",
    image: "/projects/striking_pic.png",
    tags: ["Traditional Karate", "Punching", "Kicking"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Mixed Martial Arts (MMA)",
    description: "Complete fighting system integrating striking, grappling, and ground fighting from multiple martial arts disciplines.",
    image: "/projects/mma2_pic.jpg",
    tags: ["Striking", "Grappling"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Our <span className="text-primary">  Programs </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you’re stepping on the mat for the first time or returning to sharpen your skills, our programs meet you where you are. We focus on strong fundamentals, consistent growth, and creating a space where everyone feels welcome.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {/* <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href=""
          >
            View All Programs <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </section>
  );
};
