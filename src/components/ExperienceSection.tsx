import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import experience from "@/data/experience.json";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Experience" subtitle="Professional journey and career milestones" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-4 mb-10 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-6 glow-shadow z-10" />

            <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right"}`}>
              <div className="p-5 rounded-xl border border-border bg-card hover:border-primary hover:glow-shadow transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono-heading text-primary">{exp.period}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>

            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
