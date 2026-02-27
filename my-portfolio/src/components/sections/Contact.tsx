import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">พร้อมที่จะร่วมงานกันไหม?</h2>
        <p className="text-slate-400 mb-10 text-lg">
          ผมกำลังมองหาโอกาสใหม่ๆ ในการทำงาน ไม่ว่าจะเป็นงานประจำหรืองานฟรีแลนซ์ 
          หากคุณมีโปรเจกต์ที่น่าสนใจ หรือต้องการสอบถามพูดคุย สามารถติดต่อผมได้เลยครับ
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-200 font-bold py-4 px-8 rounded-full transition-colors text-lg"
        >
          <Mail size={24} /> ส่งอีเมลหาผม
        </a>
      </div>
    </section>
  );
}
