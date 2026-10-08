import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-ivory">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden h-[500px]">
          <img
            src="/src/assets/images/dentist_portrait_1791385579150.jpg"
            alt="Dentist Portrait"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <span className="text-teal font-semibold tracking-wider uppercase text-sm">About the Clinic</span>
          <h2 className="text-4xl font-bold text-navy mt-2 mb-6">Modern Dentistry With a Human Touch</h2>
          <p className="text-lg text-navy/80 mb-6">
            At Elite Dental Studio, we believe that your dental journey should be as comfortable and rewarding as the final result. Our team combines advanced technology with a personalised, warm approach to care.
          </p>
          <p className="text-lg text-navy/80 mb-8">
            We are dedicated to creating healthy, confident smiles in a relaxed and welcoming environment, ensuring you feel at home from your first consultation.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              'Personalised Treatment Plans',
              'Modern Clinical Technology',
              'Comfortable Patient Experience',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-navy font-medium">
                <div className="w-2 h-2 rounded-full bg-teal" />
                {item}
              </li>
            ))}
          </ul>
          <a href="#team" className="text-teal font-semibold hover:underline">
            Meet Our Team →
          </a>
        </div>
      </div>
    </section>
  );
}
