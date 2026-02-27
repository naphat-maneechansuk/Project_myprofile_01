import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">ผลงานที่โดดเด่น</h2>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1">
            <div className="aspect-video bg-slate-800 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000" 
                alt="E-commerce Platform" 
                className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">E-Commerce Platform</h3>
                <div className="flex gap-3 text-slate-400">
                  <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                  <a href="#" className="hover:text-white transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              <p className="text-slate-400 mb-6 line-clamp-3">
                แพลตฟอร์มร้านค้าออนไลน์แบบครบวงจร มีระบบตะกร้าสินค้า ระบบชำระเงิน ตัดบัตรเครดิต และระบบจัดการหลังบ้านสำหรับผู้ดูแล (Admin Dashboard)
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full">PostgreSQL</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full">Stripe API</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1">
            <div className="aspect-video bg-slate-800 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="Data Analytics Dashboard" 
                className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Analytics Dashboard</h3>
                <div className="flex gap-3 text-slate-400">
                  <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                  <a href="#" className="hover:text-white transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              <p className="text-slate-400 mb-6 line-clamp-3">
                ระบบแสดงผลข้อมูลแบบ Real-time ดึงข้อมูลจากหลายแหล่งมาแสดงในรูปแบบกราฟที่เข้าใจง่าย ช่วยให้ธุรกิจตัดสินใจได้แม่นยำขึ้น
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">React</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full">Python</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full">AWS</span>
                <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full">Chart.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
