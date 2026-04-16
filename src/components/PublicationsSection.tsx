import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import publications from "@/data/publications.json";
import { FileText, ExternalLink } from "lucide-react";
import profile from "@/data/profile.json";

const PublicationsSection = () => (
  <section id="publications" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Publications" subtitle="Research contributions and academic papers" />

      <div className="space-y-4">
        {publications.map((pub, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ x: 4 }}
            className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary hover:glow-shadow transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{pub.title}</h3>
              <span className="inline-block mt-2 text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                {pub.field}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <a
          href={profile.links.scholar}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          View all on Google Scholar <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default PublicationsSection;
