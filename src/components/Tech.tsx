import { motion } from 'framer-motion';

export default function Tech() {
  return (
    <section className="py-24 bg-navy text-ivory">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Advanced Clinical Technology</h2>
          <p className="text-lg opacity-80 mb-8">
            We invest in the latest dental technology to provide precise, comfortable, and efficient care, ensuring the best outcomes for your smile.
          </p>
          <ul className="space-y-4">
            {['Digital X-Ray', 'Intraoral Scanning', 'Digital Smile Planning'].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl overflow-hidden h-[400px]">
          <img
            src="/src/assets/images/feature_dental_technology_1791385562082.jpg"
            alt="Dental Technology"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
