import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">ประสบการณ์ทำงาน</h2>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="space-y-12">
          {/* Exp 1 */}
          <div className="relative pl-8 md:pl-0">
            <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
              <div className="mb-4 md:mb-0 md:col-span-1 md:text-right pt-1 text-slate-400 font-mono text-sm">
                2022 - ปัจจุบัน
              </div>
              <div className="md:col-span-3 relative">
                <div className="absolute -left-[39px] md:-left-5 top-1.5 w-3 h-3 bg-cyan-500 rounded-full ring-4 ring-slate-950"></div>
                <div className="absolute -left-[34px] md:-left-3.5 top-5 bottom-[-48px] w-px bg-slate-800"></div>
                <h3 className="text-xl font-bold text-white mb-1">Senior Full-Stack Developer</h3>
                <h4 className="text-cyan-400 font-medium mb-4">Tech Innovation Co., Ltd.</h4>
                <p className="text-slate-400">
                  นำทีมพัฒนาโปรเจกต์หลักของบริษัท ออกแบบสถาปัตยกรรมระบบ (System Architecture) และปรับปรุงประสิทธิภาพของแอปพลิเคชันให้รองรับผู้ใช้งานหลักแสนคนต่อวัน
                </p>
              </div>
            </div>
          </div>

          {/* Exp 2 */}
          <div className="relative pl-8 md:pl-0">
            <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
              <div className="mb-4 md:mb-0 md:col-span-1 md:text-right pt-1 text-slate-400 font-mono text-sm">
                2020 - 2022
              </div>
              <div className="md:col-span-3 relative">
                <div className="absolute -left-[39px] md:-left-5 top-1.5 w-3 h-3 bg-slate-600 rounded-full ring-4 ring-slate-950"></div>
                <h3 className="text-xl font-bold text-white mb-1">Frontend Developer</h3>
                <h4 className="text-slate-300 font-medium mb-4">Digital Solutions Agency</h4>
                <p className="text-slate-400">
                  พัฒนาเว็บไซต์ให้กับลูกค้าองค์กรต่างๆ โดยใช้ React และ Vue.js ทำงานร่วมกับทีม UI/UX เพื่อสร้างประสบการณ์การใช้งานที่ราบรื่นที่สุด
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
