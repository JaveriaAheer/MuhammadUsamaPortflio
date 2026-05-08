import { motion } from "motion/react";
import { Phone, Mail, Linkedin, Info } from "lucide-react";
import { PROFILE } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">05 — Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Let's Connect</h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg">
            Open to finance, accounting & audit opportunities across Saudi Arabia and beyond. I'd love to hear about your team and how I can contribute.
          </p>
        </div>

        <div className="max-w-xl mx-auto grid gap-4 mb-16">
          <a
            href={`tel:${PROFILE.phone}`}
            className="group flex items-center gap-6 p-6 bg-card border border-white-clean/5 rounded-2xl hover:border-accent/40 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-white-clean/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg transition-all">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Phone</div>
              <div className="text-lg font-bold">{PROFILE.phone}</div>
            </div>
          </a>

          <a
            href={`mailto:${PROFILE.email}`}
            className="group flex items-center gap-6 p-6 bg-card border border-white-clean/5 rounded-2xl hover:border-accent/40 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-white-clean/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg transition-all">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Email</div>
              <div className="text-lg font-bold">{PROFILE.email}</div>
            </div>
          </a>

          <a
            href={`https://${PROFILE.linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 p-6 bg-card border border-white-clean/5 rounded-2xl hover:border-accent/40 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-white-clean/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg transition-all">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">LinkedIn</div>
              <div className="text-lg font-bold">{PROFILE.linkedIn}</div>
            </div>
          </a>
        </div>

        <div className="flex justify-center">
            <div className="glass-pill py-3 px-6">
                <Info className="w-4 h-4" />
                Open to opportunities in KSA — Transferable Iqama available
            </div>
        </div>
      </motion.div>
    </section>
  );
}
