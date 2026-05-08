import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";
import { PROFILE } from "../constants";

export default function EducationCertifications() {
  return (
    <section id="education" className="py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">04 — Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Education & Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="gradient-card p-10">
             <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                 <GraduationCap className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold">Education</h3>
             </div>
             <div className="space-y-8">
               {PROFILE.education.map((edu, idx) => (
                 <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40">
                   <div className="text-lg font-bold mb-1">{edu.title}</div>
                   {edu.detail && <div className="text-sm text-text-muted font-medium">{edu.detail}</div>}
                 </div>
               ))}
             </div>
          </div>

          <div className="gradient-card p-10">
             <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                 <Award className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold">Certifications</h3>
             </div>
             <div className="space-y-8">
               {PROFILE.certifications.map((cert, idx) => (
                 <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40">
                   <div className="text-lg font-bold mb-1">{cert.title}</div>
                   {cert.detail && <div className="text-sm text-text-muted font-medium leading-relaxed">{cert.detail}</div>}
                 </div>
               ))}
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
