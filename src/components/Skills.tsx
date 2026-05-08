import { motion } from "motion/react";
import { Wrench, Users, MessageSquare, Search, Lightbulb } from "lucide-react";
import { PROFILE } from "../constants";

const getSoftIcon = (skill: string) => {
  switch (skill) {
    case "Collaborative Team Work": return <Users className="w-5 h-5" />;
    case "Excellent Communication": return <MessageSquare className="w-5 h-5" />;
    case "Detail-Oriented": return <Search className="w-5 h-5" />;
    case "Problem-Solving": return <Lightbulb className="w-5 h-5" />;
    default: return <Users className="w-5 h-5" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">03 — Toolkit</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold mb-8">
              <Wrench className="w-5 h-5 text-accent" /> Technical
            </h3>
            <div className="flex flex-wrap gap-3">
              {PROFILE.skills.technical.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white-clean/5 border border-white-clean/10 rounded-lg text-sm font-medium text-white-clean/80 hover:bg-white-clean/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold mb-8">
              <Users className="w-5 h-5 text-accent" /> Soft Skills
            </h3>
            <div className="grid gap-4">
              {PROFILE.skills.soft.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-card border border-white-clean/5 rounded-xl hover:border-accent/30 transition-all group"
                >
                   <div className="w-10 h-10 rounded-lg bg-white-clean/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg transition-all">
                    {getSoftIcon(skill)}
                   </div>
                   <span className="font-semibold text-white-clean/90">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
