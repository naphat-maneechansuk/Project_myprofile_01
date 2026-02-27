import React from 'react';
import { ChevronRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <p className="text-cyan-400 font-mono tracking-wide">สวัสดีครับ ผมชื่อ</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          สมชาย <span className="text-slate-500">สายโค้ด</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-400">
          Full-Stack Developer.
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
          ผมเป็นนักพัฒนาซอฟต์แวร์ที่หลงใหลในการสร้างสรรค์เว็บไซต์และแอปพลิเคชันที่มีประสิทธิภาพ 
          เน้นการเขียนโค้ดที่สะอาดและมอบประสบการณ์ใช้งานที่ยอดเยี่ยมให้กับผู้ใช้
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
          <Link href="#projects" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            ดูผลงานของผม <ChevronRight size={20} />
          </Link>
          <button className="border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-full transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            <Download size={20} /> ดาวน์โหลด Resume
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-cyan-500/20 group">
          {/* เปลี่ยน URL รูปภาพด้านล่างเป็นรูปของคุณ */}
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800" 
            alt="Profile" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  );
}
