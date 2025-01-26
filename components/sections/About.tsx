"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { education, experience } from "@/lib/data";
import { fetchArticles } from "@/lib/data"; // Burada data.ts'den import ediyoruz

export default function About() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles(); // fetchArticles fonksiyonunu kullanıyoruz
      setArticles(data);
    };

    getArticles();
  }, []);

  // Okuma süresi hesaplama fonksiyonu (dakikada 250 kelime kabul edilmiştir)
  const calculateReadingTime = (content: string) => {
    const words = content.split(/\s+/).length;
    const readingSpeed = 250; // Dakikada okunan kelime sayısı
    const time = Math.ceil(words / readingSpeed); // Okuma süresi (dakika cinsinden)
    return time;
  };

  return (
    <section id="about" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hakkımda
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Sol taraf - Eğitim ve Deneyim */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eğitim */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Eğitim</h3>
              <div className="grid grid-cols-2 gap-4">
                {education.map((item, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-all">
                    <div className="space-y-2">
                      <div className="text-lg font-medium">{item.school}</div>
                      <div className="text-muted-foreground">{item.department}</div>
                      <div className="text-sm text-muted-foreground">{item.years}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Deneyim */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Deneyim</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.map((item, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-all">
                    <div className="space-y-2">
                      <div className="text-lg font-medium">{item.title}</div>
                      <div className="text-muted-foreground">{item.company}</div>
                      <div className="text-sm text-muted-foreground">{item.period}</div>
                      <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                        {item.tasks.map((task, taskIndex) => (
                          <li key={taskIndex}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sağ taraf - Makaleler */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Medium Makalelerim</h3>
            <div className="space-y-8">
              {articles.length > 0 ? (
                articles.map((article, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="text-xl font-semibold">{article.title}</h4>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {new Date(article.pubDate).toLocaleDateString()} • {calculateReadingTime(article.content)} dk okuma
                      </span>
                      <Link target="_blank" href={article.link} className="text-primary hover:underline text-sm font-medium">
                        Makaleyi İncele →
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>Makale yükleniyor...</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
