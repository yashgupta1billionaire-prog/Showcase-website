import { motion } from 'framer-motion';

export default function Results() {
  return (
    <section id="results" className="py-24 bg-ivory">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-navy text-center mb-16">Results That Speak for Themselves</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl overflow-hidden"
          >
            <img
              src="/src/assets/images/smile_makeover_result_1791385590768.jpg"
              alt="Smile Makeover"
              className="w-full h-80 object-cover"
            />
          </motion.div>
          <div className="p-8 bg-navy/5 rounded-3xl flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-navy mb-4">Smile Makeover</h3>
            <p className="text-navy/70 mb-4">A complete transformation for a radiant, healthy smile.</p>
            <p className="text-xs text-navy/50 italic">*Results vary from patient to patient.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
