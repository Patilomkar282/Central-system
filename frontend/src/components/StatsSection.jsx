export default function StatsSection() {
  return (
    <section id="stats" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
        <div>
          <div className="text-4xl md:text-5xl font-black text-mmcoe-navy mb-2 tracking-tighter">500+</div>
          <div className="text-slate-500 font-medium uppercase text-xs tracking-wider">Active Alumni</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black text-mmcoe-navy mb-2 tracking-tighter">10k+</div>
          <div className="text-slate-500 font-medium uppercase text-xs tracking-wider">Mock Sessions</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black text-mmcoe-maroon mb-2 tracking-tighter">95%</div>
          <div className="text-slate-500 font-medium uppercase text-xs tracking-wider">Placement Rate</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black text-mmcoe-navy mb-2 tracking-tighter">24/7</div>
          <div className="text-slate-500 font-medium uppercase text-xs tracking-wider">Platform Uptime</div>
        </div>
      </div>
    </section>
  );
}