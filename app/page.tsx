"use client";

import { Github, Linkedin, Mail, Send, ExternalLink } from "lucide-react";
import { SiReact, SiNextdotjs, SiWordpress, SiAdobephotoshop, SiReacthookform, SiTailwindcss, SiChartdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiGit } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from 'next/image'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const skillLevels = {
  "React": 90,
  "Next.js": 85,
  "WordPress": 80,
  "Photoshop": 75,
  "React Native": 70,
  "Tailwind CSS": 85,
  "Chart.js": 75
};

const TechIcon = ({ icon: Icon, name }: { icon: any; name: string }) => (
  <motion.div
    className="flex flex-col items-center gap-2 p-4 bg-background rounded-lg"
    whileHover={{ y: -5, scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="w-10 h-10 text-primary" />
    <span className="text-sm font-medium">{name}</span>
  </motion.div>
);

const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{skill}</span>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
    <div className="w-full bg-secondary rounded-full h-2.5">
      <motion.div
        className="bg-primary h-2.5 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </div>
  </div>
);

const projects = [
  {
    title: "E-Ticaret Platformu",
    description: "React ve Next.js kullanılarak geliştirilmiş modern bir e-ticaret platformu. Tailwind CSS ile responsive tasarım.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/project"
  },
  {
    title: "Blog Yönetim Sistemi",
    description: "WordPress ve React entegrasyonu ile geliştirilmiş özel blog yönetim sistemi. SEO odaklı performans optimizasyonu.",
    tags: ["WordPress", "React", "PHP"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/project"
  },
  {
    title: "Mobil Fitness Uygulaması",
    description: "React Native ile geliştirilmiş, kullanıcıların fitness hedeflerini takip edebileceği mobil uygulama.",
    tags: ["React Native", "TypeScript", "Firebase"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/project"
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="hover:shadow-lg transition-all">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2 flex-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2 ml-4">
          <Link
            href={project.demoUrl}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors group"
            target="_blank"
            title="Canlı Demo"
          >
            <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          </Link>
          <Link
            href={project.githubUrl}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors group"
            target="_blank"
            title="GitHub"
          >
            <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function Home() {
  const techStack = [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiWordpress, name: "WordPress" },
    { icon: SiAdobephotoshop, name: "Photoshop" },
    { icon: SiReacthookform, name: "React Native" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiChartdotjs, name: "Chart.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss3, name: "CSS3" },
    { icon: SiGit, name: "Git" }
  ];

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-primary/10 to-background py-20 md:py-0">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Sol taraf - Metin içeriği */}
            <motion.div 
              className="text-left order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 py-3">
                Ali Özsoy
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Frontend Developer
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Frontend geliştirici olarak modern web teknolojileri konusunda uzmanlaşmış durumdayım. 
                React ve Next.js ekosisteminde güçlü bir tecrübeye sahibim. Aynı zamanda WordPress 
                ile içerik yönetim sistemleri geliştiriyor, React Native ile mobil uygulamalar 
                oluşturuyorum.
              </p>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition">
                    İletişime Geç
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#projects" className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition">
                    Projelerimi Gör
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Sağ taraf - Görsel */}
            <motion.div 
              className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/slider-bg.webp"
                alt="Hero Image"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sliding Tech Stack */}
      <div className="py-10 bg-background/50 relative w-full overflow-hidden">
        <div className="container mx-auto px-4 relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background/80 to-transparent z-10" />
          
          <div className="flex justify-center">
            <motion.div 
              className="flex gap-4 md:gap-8"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{ maxWidth: '100vw' }}
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-1 md:gap-2 p-2 md:p-4 bg-background/50 rounded-lg min-w-[70px] md:min-w-[100px]"
                >
                  <tech.icon className="w-6 h-6 md:w-10 md:h-10 text-primary" />
                  <span className="text-[10px] md:text-sm font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-4 mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
          >
            Hakkımda
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Sol taraf - Eğitim ve Deneyim (Eski sağ taraf) */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Eğitim */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Eğitim</h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Üniversite */}
                  <Card className="p-4 hover:shadow-lg transition-all">
                    <div className="space-y-2">
                      <div className="text-lg font-medium">Üniversite Adı</div>
                      <div className="text-muted-foreground">Bölüm Adı</div>
                      <div className="text-sm text-muted-foreground">2019 - 2023</div>
                    </div>
                  </Card>
                  {/* Lise */}
                  <Card className="p-4 hover:shadow-lg transition-all">
                    <div className="space-y-2">
                      <div className="text-lg font-medium">Lise Adı</div>
                      <div className="text-muted-foreground">Bölüm</div>
                      <div className="text-sm text-muted-foreground">2015 - 2019</div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Deneyim */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Deneyim</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-lg transition-all">
                    <div className="space-y-2">
                      <div className="text-lg font-medium">Frontend Developer</div>
                      <div className="text-muted-foreground">Şirket Adı</div>
                      <div className="text-sm text-muted-foreground">2023 - Devam Ediyor</div>
                      <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                        <li>Next.js ve React ile web uygulamaları geliştirme</li>
                        <li>Performans optimizasyonu ve SEO iyileştirmeleri</li>
                      </ul>
                    </div>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-all">
                    <div className="space-y-2">
                      <div className="text-lg font-medium">Frontend Developer Intern</div>
                      <div className="text-muted-foreground">Şirket Adı</div>
                      <div className="text-sm text-muted-foreground">2022 - 2023</div>
                      <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                        <li>React tabanlı kullanıcı arayüzleri geliştirme</li>
                        <li>Responsive tasarım ve cross-browser uyumluluk</li>
                      </ul>
                    </div>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-all">
                    <div className="space-y-2">
                      <div className="text-lg font-medium">Freelance Web Developer</div>
                      <div className="text-muted-foreground">Serbest Çalışma</div>
                      <div className="text-sm text-muted-foreground">2021 - 2022</div>
                      <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                        <li>WordPress tema ve eklenti geliştirme</li>
                        <li>E-ticaret siteleri tasarım ve geliştirme</li>
                      </ul>
                    </div>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-all">
                    <div className="space-y-2">
                      <div className="text-lg font-medium">Junior Web Developer</div>
                      <div className="text-muted-foreground">Şirket Adı</div>
                      <div className="text-sm text-muted-foreground">2020 - 2021</div>
                      <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                        <li>JavaScript ve jQuery ile interaktif web siteleri geliştirme</li>
                        <li>HTML5 ve CSS3 ile modern web tasarımları oluşturma</li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>

            {/* Sağ taraf - Makaleler (Eski sol taraf) */}
            <motion.div
              className="space-y-8 px-2 md:px-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Makalelerim</h3>
              <div className="space-y-8">
                {/* Makale 1 */}
                <div className="space-y-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold">Next.js ile Modern Web Uygulamaları</h4>
                  <p className="text-muted-foreground line-clamp-3">
                    Modern web uygulamalarının geliştirilmesinde Next.js'in sunduğu avantajlar ve best practice'ler hakkında detaylı bir inceleme...
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">12 Mart 2024 • 5 dk okuma</span>
                    <Link href="#" className="text-primary hover:underline text-sm font-medium">
                      Devamını Oku →
                    </Link>
                  </div>
                </div>

                {/* Makale 2 */}
                <div className="space-y-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold">React Performance Optimizasyonu</h4>
                  <p className="text-muted-foreground line-clamp-3">
                    React uygulamalarında performans optimizasyonu için kullanabileceğiniz teknikler ve pratik öneriler...
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">8 Mart 2024 • 7 dk okuma</span>
                    <Link href="#" className="text-primary hover:underline text-sm font-medium">
                      Devamını Oku →
                    </Link>
                  </div>
                </div>

                {/* Makale 3 */}
                <div className="space-y-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold">Tailwind CSS ile Modern UI Tasarımı</h4>
                  <p className="text-muted-foreground line-clamp-3">
                    Tailwind CSS kullanarak modern ve responsive kullanıcı arayüzleri nasıl tasarlanır...
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">1 Mart 2024 • 6 dk okuma</span>
                    <Link href="#" className="text-primary hover:underline text-sm font-medium">
                      Devamını Oku →
                    </Link>
                  </div>
                </div>

                {/* Makale 4 */}
                <div className="space-y-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold">TypeScript ile Güvenli Kod Yazımı</h4>
                  <p className="text-muted-foreground line-clamp-3">
                    TypeScript'in sunduğu tip güvenliği ve modern JavaScript projelerinde nasıl daha güvenli kod yazabiliriz...
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">25 Şubat 2024 • 8 dk okuma</span>
                    <Link href="#" className="text-primary hover:underline text-sm font-medium">
                      Devamını Oku →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projelerim</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">İletişime Geç</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* GitHub */}
              <motion.a
                href="https://github.com/yourusername"
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
                href="https://linkedin.com/in/yourusername"
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
                href="mailto:your@email.com"
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

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">&copy; 2024 Ali Özsoy. Tüm hakları saklıdır.</p>
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
    </main>
  );
}