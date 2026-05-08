import { motion } from "motion/react";
import { Box, Building2, TrendingUp, FileCheck, MapPin, Calendar } from "lucide-react";
import { PROFILE } from "../constants";

const getIcon = (type: string) => {
  switch (type) {
    case "Inventory": return <Box className="w-5 h-5" />;
    case "Finance": return <Building2 className="w-5 h-5" />;
    case "Growth": return <TrendingUp className="w-5 h-5" />;
    case "Audit": return <FileCheck className="w-5 h-5" />;
    default: return <Building2 className="w-5 h-5" />;
  }
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">02 — Career</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
        </div>

        <div className="relative space-y-12">
          {/* Vertical line for the timeline */}
          <div className="absolute left-6 md:left-[22px] top-4 bottom-4 w-px bg-white-clean/10" />

          {PROFILE.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline marker */}
              <div className="absolute left-0 md:left-0 top-0 w-12 h-12 rounded-lg bg-card border border-accent/20 flex items-center justify-center text-accent z-10">
                {getIcon(exp.icon)}
              </div>

              <div className="gradient-card p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <div className="text-accent font-semibold">{exp.company}</div>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0 md:items-end">
                    <span className="flex items-center gap-2 text-xs font-medium text-text-muted">
                      <MapPin className="w-3.5 h-3.5 text-accent" /> {exp.location}
                    </span>
                    <span className="flex items-center gap-2 text-xs font-medium text-text-muted capitalize">
                      <Calendar className="w-3.5 h-3.5 text-accent" /> {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-text-muted leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
