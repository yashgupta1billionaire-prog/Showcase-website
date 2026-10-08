import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Book', desc: 'Schedule your visit online or by phone.' },
  { step: '02', title: 'Consultation', desc: 'Discuss your goals with our team.' },
  { step: '03', title: 'Treatment', desc: 'Receive expert, comfortable care.' },
  { step: '04', title: 'Follow-Up', desc: 'Ensure your smile stays healthy.' },
];

export default function PatientJourney() {
  return (
    <section className="py-24 bg-ivory">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-navy text-center mb-16">Your Visit, Made Simple</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 bg-navy/5 rounded-3xl"
            >
              <div className="text-4xl font-bold text-teal mb-4">{s.step}</div>
              <h3 className="text-xl font-semibold text-navy mb-2">{s.title}</h3>
              <p className="text-navy/70 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
