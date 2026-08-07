import { PROCESS } from "@/lib/site-data";

export default function Process() {
  return (
    <section id="process" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-teal tracking-widest mb-3">PROCESS</p>
      <h2 className="font-display font-bold text-navy text-3xl mb-12">How a project runs</h2>
      <div className="grid md:grid-cols-5 gap-6">
        {PROCESS.map((p) => (
          <div key={p.n} className="border-t-2 border-navy pt-4">
            <span className="font-mono text-2xl text-gold">{p.n}</span>
            <h3 className="font-display font-bold text-navy mt-2 mb-2">{p.title}</h3>
            <p className="text-slate text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
