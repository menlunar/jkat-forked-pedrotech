import { cn } from "@/lib/utils";
import { Home, User, Dumbbell, Mail } from "lucide-react"; // example icons
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Programs", href: "#projects", icon: Dumbbell },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // ✅ fixed typo (was screenY)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-4 z-50 flex flex-col items-center gap-4 px-3 py-4 rounded-2xl shadow-lg backdrop-blur-md bg-background/70 border border-foreground/10 transition-all duration-300",
        isScrolled && "bg-background/90 shadow-xl"
      )}
    >
      {navItems.map((item, key) => {
        const Icon = item.icon;
        return (
          <a
            key={key}
            href={item.href}
            className="text-foreground/70 hover:text-primary transition-all duration-200 hover:scale-110"
            title={item.name}
          >
            <Icon size={22} />
          </a>
        );
      })}
    </nav>
  );
};
