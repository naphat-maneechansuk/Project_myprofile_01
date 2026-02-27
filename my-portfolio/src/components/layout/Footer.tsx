import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800 text-center">
      <div className="flex justify-center gap-6 mb-6">
        <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
          <Github size={24} />
        </a>
        <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
          <Mail size={24} />
        </a>
      </div>
      <p className="text-slate-500 font-mono text-sm">
        ออกแบบและพัฒนาโดย สมชาย สายโค้ด &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
