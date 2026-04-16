import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Globe, GraduationCap, MapPin, Link } from "lucide-react";
import profile from "@/data/profile.json";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-2xl mx-auto text-center">
      <SectionHeading title="Get in Touch" subtitle="Let's collaborate on innovative engineering solutions" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{profile.location}</span>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card text-foreground hover:border-primary hover:glow-shadow transition-all">
            <Link className="w-4 h-4 text-primary" /> LinkedIn
          </a>
          <a href={profile.links.company} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card text-foreground hover:border-primary hover:glow-shadow transition-all">
            <Globe className="w-4 h-4 text-primary" /> PValley Tech
          </a>
          <a href={profile.links.scholar} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card text-foreground hover:border-primary hover:glow-shadow transition-all">
            <GraduationCap className="w-4 h-4 text-primary" /> Google Scholar
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
