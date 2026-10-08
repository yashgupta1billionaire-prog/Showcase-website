import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight mb-6">
            Confident Smiles. <br />
            <span className="text-teal">Advanced Dentistry.</span> <br />
            Personal Care.
          </h1>
          <p className="text-lg text-navy/80 mb-8 max-w-lg">
            Modern dental care designed around your comfort, confidence, and long-term oral health. Experience a new standard of excellence.
          </p>
          <div className="flex gap-4">
            <a
              href="#appointment"
              className="px-8 py-4 font-medium text-white bg-teal rounded-full hover:bg-navy transition-colors"
            >
              Book an Appointment
            </a>
            <a
              href="#treatments"
              className="px-8 py-4 font-medium text-navy border border-navy/20 rounded-full hover:bg-navy/5 transition-colors"
            >
              Explore Treatments
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img
            src="/src/assets/images/hero_dental_clinic_interior_1791385549729.jpg"
            alt="Dental Clinic Interior"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
