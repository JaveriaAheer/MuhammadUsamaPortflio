import { motion } from "motion/react";
import { PROFILE } from "../constants";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-12"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">01 — Introduction</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">About Me</h2>
          </div>

          <div className="grid md:grid-items-[1.5fr_1fr] md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-white-clean/90 leading-relaxed whitespace-pre-line">
                {PROFILE.about.description}
              </p>
            </div>

            <div className="grid gap-6">
              {PROFILE.about.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="gradient-card p-8 group border-l-4 border-l-accent"
                >
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-text-muted font-medium uppercase tracking-wider">{stat.label}</div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-accent/10 transition-all" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
