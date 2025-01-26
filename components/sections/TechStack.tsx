"use client";
import { motion } from "framer-motion";
import { techStackData } from "@/lib/data";

export default function TechStack() {
  return (
    <div className="py-10 bg-background/50 relative w-full overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background/80 to-transparent z-10" />
        
        <div className="mx-auto overflow-hidden">
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
              style={{ maxWidth: '100%' }}
            >
              {[...techStackData, ...techStackData].map((tech, index) => (
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
    </div>
  );
} 