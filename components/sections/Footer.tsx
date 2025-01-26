import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">&copy; 2025 Ali Özsoy. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <a href="mailto:your@email.com" className="text-muted-foreground hover:text-primary">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 