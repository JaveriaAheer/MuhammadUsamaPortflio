import { PROFILE } from "../constants";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white-clean/5 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-text-muted">
          © {new Date().getFullYear()} <span className="text-white-clean font-semibold">{PROFILE.name} {PROFILE.lastName}</span> — Built with focus & finance.
        </div>
        <div className="flex items-center gap-4 text-xs font-bold text-accent uppercase tracking-[0.2em]">
          Muhammad Usama Portfolio
        </div>
      </div>
    </footer>
  );
}
