import { motion } from "framer-motion";
import { Globe, GraduationCap, MapPin, Download, Link } from "lucide-react";
import profile from "@/data/profile.json";
import profileImage from "@/data/subuj.jpeg";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center section-padding pt-28 md:pt-32"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full rounded-[2rem] border border-border/60 bg-background/35 dark:bg-background/10 backdrop-blur-md px-4 py-7 sm:px-6 md:px-8 md:py-12">
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[minmax(280px,360px)_1fr] xl:grid-cols-[380px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-none flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[360px]">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl" />
              <div className="rounded-[2rem] border border-border/70 bg-card/70 p-3 sm:p-4 shadow-2xl shadow-black/20">
                <div className="overflow-hidden rounded-[1.5rem] border border-border/60 bg-muted">
                  <img
                    src={profileImage}
                    alt={profile.name}
                    className="aspect-[4/5] w-full object-cover object-top sm:aspect-[0.85] lg:aspect-[4/5]"
                  />
                </div>
                <div className="mt-3 sm:mt-4 flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{profile.name}</p>
                    <p className="text-xs text-muted-foreground">{profile.title}</p>
                  </div>
                  <div className="shrink-0 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                    Available for work
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 text-muted-foreground text-sm mb-5 md:mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              {profile.location}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-5 text-foreground leading-tight">
              {profile.name.split(" ")[0]}{" "}
              <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono-heading mb-6 md:mb-7">
              {profile.title}
            </p>

            <p className="text-muted-foreground/95 max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              {profile.about}
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                <Link className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={profile.links.company}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl border border-border bg-card text-foreground hover:border-primary transition-colors"
              >
                <Globe className="w-4 h-4" /> PValley Tech
              </a>
              <a
                href={profile.links.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl border border-border bg-card text-foreground hover:border-primary transition-colors"
              >
                <GraduationCap className="w-4 h-4" /> Google Scholar
              </a>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
