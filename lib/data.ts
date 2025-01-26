import { SiReact, SiNextdotjs, SiWordpress, SiAdobephotoshop, SiReacthookform, SiTailwindcss, SiChartdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiGit } from "react-icons/si";

export const techStackData = [
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

export const projects = [
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
  }
];

export const fetchArticles = async () => {
  const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40odayibasi');
  const data = await response.json();
  return data.items.slice(0, 7); // İlk 7 makaleyi alıyoruz
};

export const education = [
  {
    school: "Karabük Üniversitesi",
    department: "Bilgisayar Programcılığı",
    years: "2019 - 2021"
  },
  {
    school: "Tuzla MTAL",
    department: "Web Tasarım",
    years: "2014 - 2018"
  }
];

export const experience = [
  {
    title: "Frontend Developer",
    company: "Novasta Bilişim",
    period: "2021 - Devam Ediyor",
    tasks: [
      "WordPress ile SEO kurallarına uygun kurumsal web siteleri geliştirme",
      "WordPress sitelerinin yönetimi ve bakımı",
      "PHP ile e-katalog ve sıra bulucu gibi özel araçlar geliştirme",
      "Responsive ve modern web tasarımları oluşturma"
    ]
  },
  {
    title: "Frontend Developer Intern",
    company: "Novasta Bilişim",
    period: "2021/Haziran - 2021/Temmuz",
    tasks: [
      "WordPress ile SEO kurallarına uygun kurumsal web siteleri geliştirme",
      "WordPress sitelerinin yönetimi ve bakımı",
    ]
  },
  {
    title: "Web Tasarım Lise Stajyeri",
    company: "Anda Teknoloji",
    period: "2018/Ocak - 2018/Haziran",
    tasks: [
      "Nopcommerce ile web siteleri geliştirme",
      "Wordpress ile firma web sitesi geliştirme"
    ]
  },
  {
    title: "Web Tasarım Lise Stajyeri",
    company: "Novasta Bilişim",
    period: "2017/Eylül - 2018/Ocak",
    tasks: [
      "Wordpress ile web siteleri güncellemeleri",
    ]
  }
]; 