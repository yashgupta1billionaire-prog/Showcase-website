import { useState } from 'react';
import { motion } from 'framer-motion';

const treatments = [
  { name: 'Dental Implants', category: 'Restorative' },
  { name: 'Root Canal', category: 'General' },
  { name: 'Cosmetic Dentistry', category: 'Cosmetic' },
  { name: 'Teeth Whitening', category: 'Cosmetic' },
  { name: 'Veneers', category: 'Cosmetic' },
  { name: 'Clear Aligners', category: 'Orthodontic' },
];

export default function Treatments() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? treatments : treatments.filter(t => t.category === filter);

  return (
    <section id="treatments" className="py-24 bg-navy/5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-navy text-center mb-12">Complete Dental Care Under One Roof</h2>
        <div className="flex justify-center gap-4 mb-12">
          {['All', 'General', 'Cosmetic', 'Restorative', 'Orthodontic'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === cat ? 'bg-teal text-white' : 'bg-navy/10 text-navy hover:bg-navy/20'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-ivory p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-navy mb-3">{t.name}</h3>
              <p className="text-navy/70 mb-4">Advanced {t.name.toLowerCase()} tailored to your needs.</p>
              <a href="#appointment" className="text-teal font-semibold text-sm">Learn More →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
