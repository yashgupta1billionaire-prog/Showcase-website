export default function WarningSigns() {
  const signs = ['Tooth Pain', 'Bleeding Gums', 'Sensitivity', 'Persistent Bad Breath'];
  return (
    <section className="py-24 bg-navy/5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-navy text-center mb-16">Don't Ignore These Signs</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {signs.map(s => <div key={s} className="bg-ivory p-6 rounded-2xl shadow-sm text-center font-semibold text-navy">{s}</div>)}
        </div>
      </div>
    </section>
  );
}
