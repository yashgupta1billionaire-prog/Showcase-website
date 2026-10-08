import { motion } from 'framer-motion';

const reviews = [
  { name: 'Sarah J.', text: 'The team was so kind and professional. My smile looks amazing!', treatment: 'Teeth Whitening' },
  { name: 'Michael B.', text: 'Highly recommended! Fast, painless, and great results.', treatment: 'Dental Implants' },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-navy/5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-navy text-center mb-16">What Our Patients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-ivory p-8 rounded-3xl shadow-sm">
              <p className="text-navy/80 mb-6 italic">"{r.text}"</p>
              <div className="font-semibold text-navy">{r.name}</div>
              <div className="text-sm text-teal">{r.treatment}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
