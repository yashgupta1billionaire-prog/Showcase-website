import { motion } from 'framer-motion';

export default function TrustBar() {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Patients Treated', value: '5,000+' },
    { label: 'Dental Treatments', value: '15+' },
    { label: 'Team Experts', value: '8+' },
  ];

  return (
    <section className="py-12 bg-navy text-ivory">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-teal mb-2">{stat.value}</div>
            <div className="text-sm font-medium opacity-80">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
