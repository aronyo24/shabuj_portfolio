import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import skills from "@/data/skills.json";
import { Cpu, Lightbulb } from "lucide-react";

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-card">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Skills" subtitle="Technical expertise and professional competencies" />

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-5 h-5 text-primary" />
            <h3 className="font-mono-heading text-lg font-semibold text-foreground">Technical Skills</h3>
          </div>
          <div className="space-y-5">
            {skills.technical.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-foreground">{s.name}</span>
                  <span className="text-xs text-muted-foreground">{s.detail}</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "var(--gradient-primary)" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-5 h-5 text-primary" />
            <h3 className="font-mono-heading text-lg font-semibold text-foreground">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.soft.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground hover:border-primary hover:glow-shadow transition-all cursor-default"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
