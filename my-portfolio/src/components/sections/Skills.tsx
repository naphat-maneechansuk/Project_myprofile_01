import React from 'react';
import { Terminal, Database, Layout, Code2 } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">ทักษะและความเชี่ยวชาญ</h2>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors">
            <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-cyan-400">
              <Layout size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-center gap-2"><Code2 size={16} className="text-cyan-500"/> React / Next.js</li>
              <li className="flex items-center gap-2"><Code2 size={16} className="text-cyan-500"/> Vue.js</li>
              <li className="flex items-center gap-2"><Code2 size={16} className="text-cyan-500"/> Tailwind CSS</li>
              <li className="flex items-center gap-2"><Code2 size={16} className="text-cyan-500"/> TypeScript</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-colors">
            <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-purple-400">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-center gap-2"><Code2 size={16} className="text-purple-500"/> Node.js / Express</li>
              <li className="flex items-center gap-2"><Code2 size={16} className="text-purple-500"/> Python / Django</li>
              <li className="flex items-center gap-2"><Code2 size={16} className="text-purple-500"/> PostgreSQL / MySQL</li>
              <li className="flex items-center gap-2"><Code2 size={16} className="text-purple-500"/> MongoDB</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <div className="bg-emerald-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-emerald-400">
              <Terminal size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Tools & Others</h3>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-center gap-2"><Code2 size={16} className="text-emerald-500"/> Git / GitHub</li>
              <li className="flex items-center gap-2"><Code2 size={16} className="text-emerald-500"/> Docker</li>
              <li className="flex items-center gap-2"><Code2 size={16} className="text-emerald-500"/> AWS (EC2, S3)</li>
              <li className="flex items-center gap-2"><Code2 size={16} className="text-emerald-500"/> CI/CD Pipelines</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
