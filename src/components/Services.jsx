import { SERVICES } from "@/lib/site-data";

export default function Services() {
  return (
    <section id="services" className="bg-white border-y border-slate-200 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs text-teal tracking-widest mb-3">SERVICES</p>
        <h2 className="font-display font-bold text-navy text-3xl mb-12">What I build</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.tag} className="group border border-slate-200 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-0.5 bg-teal w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <span className="font-mono text-xs text-teal">[{s.tag}]</span>
              <h3 className="font-display font-bold text-navy text-lg mt-2 mb-2">{s.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
