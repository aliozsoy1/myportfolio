"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-primary/10 to-background py-20 md:py-0">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Sol taraf - Metin içeriği */}
          <motion.div 
            className="text-left order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 py-3">
              Ali Özsoy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Frontend Developer
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Frontend Developer olarak, kullanıcı dostu ve etkileyici web uygulamaları geliştirme konusunda kendimi geliştiriyorum. HTML, CSS ve JavaScript ile modern frameworkler (React, Next.js React Native) kullanarak projeler üretiyorum. Şu an çalıştığım firmada WordPress ile geliştirmeler yapıyorum, ancak boş vakitlerimde React öğrenerek kendimi daha da ileri taşımaya çalışıyorum.
            </p>
            <div className="flex flex-wrap gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#about" className="bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:opacity-90 transition">
                  Hakkımda
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#projects" className="border border-primary text-primary px-4 py-3 rounded-lg hover:bg-primary/10 transition">
                  Projelerim
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#contact" className="border border-primary text-primary px-4 py-3 rounded-lg hover:bg-primary/10 transition">
                  İletişim
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Sağ taraf - Görsel */}
          <motion.div 
            className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden order-1 md:order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
  );
} 