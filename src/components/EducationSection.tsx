import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import education from "@/data/education.json";
import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="section-padding bg-card">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Education" subtitle="Academic background and qualifications" />

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-xl border border-border bg-background hover:border-primary hover:glow-shadow transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-mono-heading text-primary">{edu.period}</span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{edu.degree}</h3>
            <p className="text-sm text-muted-foreground">{edu.institution}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
