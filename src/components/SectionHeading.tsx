import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-14 text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-3">
      <span className="text-gradient">{title}</span>
    </h2>
    {subtitle && <p className="text-muted-foreground max-w-lg mx-auto">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
