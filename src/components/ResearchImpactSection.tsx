import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Wifi, Cpu, Leaf, Shield } from "lucide-react";

const impacts = [
  { icon: Wifi, title: "IoT Systems", desc: "Pioneering wireless sensor networks and cloud-connected embedded solutions for agriculture and industry." },
  { icon: Cpu, title: "Embedded Design", desc: "Designing microcontroller-based products from concept to PCB manufacturing and deployment." },
  { icon: Leaf, title: "Smart Agriculture", desc: "GPS-guided machinery and IoT-based farm management systems tailored for Bangladesh." },
  { icon: Shield, title: "Security Systems", desc: "Multilayer GSM-based security and reference password lock devices for smart access control." },
];

const ResearchImpactSection = () => (
  <section className="section-padding bg-card">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Research Impact" subtitle="Key contributions to IoT and embedded systems" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {impacts.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 rounded-xl border border-border bg-background hover:border-primary hover:glow-shadow transition-all text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-mono-heading font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchImpactSection;
