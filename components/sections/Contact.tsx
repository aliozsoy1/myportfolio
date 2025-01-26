"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">İletişime Geç</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* GitHub */}
            <motion.a
              href="https://github.com/aliozsoy1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg bg-[#ffffff] hover:bg-primary/5 transition-all group"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Github className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-muted-foreground text-center">
                Projelerimi ve kaynak kodlarımı inceleyin
              </p>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/ali-%C3%B6zsoy-33870986/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg bg-[#ffffff] hover:bg-primary/5 transition-all group"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground text-center">
                Profesyonel profilimi ziyaret edin
              </p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:aliozsoy237@gmail.com"
              className="flex flex-col items-center p-6 rounded-lg bg-[#ffffff] hover:bg-primary/5 transition-all group"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">E-posta</h3>
              <p className="text-sm text-muted-foreground text-center">
                Benimle doğrudan iletişime geçin
              </p>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
} 