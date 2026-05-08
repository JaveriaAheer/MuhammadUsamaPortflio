import { motion } from "motion/react";
import { ArrowRight, Mail, Linkedin, Phone, PlayCircle } from "lucide-react";
import { PROFILE } from "../constants";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <div className="glass-pill mb-8 inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {PROFILE.status}
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            {PROFILE.name} <span className="text-accent">{PROFILE.lastName}</span>
          </h1>

          <div className="flex flex-wrap gap-4 mb-8">
            {PROFILE.titles.map((title, idx) => (
              <span key={title} className="flex items-center gap-2 text-sm md:text-base font-semibold text-accent uppercase tracking-wider">
                {title}
                {idx < PROFILE.titles.length - 1 && <span className="w-1.5 h-1.5 rounded-full bg-white-clean/20" />}
              </span>
            ))}
          </div>

          <p className="text-xl text-text-muted mb-10 max-w-2xl leading-relaxed">
            {PROFILE.about?.description?.split('\n')[0] || "Welcome to my portfolio."}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            {/* Connected to Experience Section */}
            <a 
              href="#experience" 
              className="bg-accent text-bg px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 hover:bg-accent/90 transition-all hover:translate-y-[-2px] cursor-pointer no-underline"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </a>

            {/* Connected to Contact Section */}
            <a 
              href="#contact" 
              className="bg-white-clean/5 border border-white-clean/10 px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 hover:bg-white-clean/10 transition-all hover:translate-y-[-2px] cursor-pointer no-underline"
            >
              Contact Me <PlayCircle className="w-4 h-4 rotate-[-30deg]" />
            </a>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-10 border-t border-white-clean/5">
            <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-3 text-sm text-text-muted hover:text-white-clean transition-colors">
              <Phone className="w-4 h-4 text-accent" />
              {PROFILE.phone}
            </a>
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 text-sm text-text-muted hover:text-white-clean transition-colors">
              <Mail className="w-4 h-4 text-accent" />
              {PROFILE.email}
            </a>
            <a href={`https://${PROFILE.linkedIn}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-muted hover:text-white-clean transition-colors">
              <Linkedin className="w-4 h-4 text-accent" />
              {PROFILE.linkedIn}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}