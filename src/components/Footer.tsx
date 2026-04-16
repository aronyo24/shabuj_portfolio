import profile from "@/data/profile.json";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border bg-card">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
      <span className="font-mono-heading text-xs">Built with React & TypeScript</span>
    </div>
  </footer>
);

export default Footer;
