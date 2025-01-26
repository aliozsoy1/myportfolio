"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projelerim</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
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
          ))}
        </div>
      </div>
    </section>
  );
} 