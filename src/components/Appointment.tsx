import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
});

export default function Appointment() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  return (
    <section id="appointment" className="py-24 bg-ivory">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-navy mb-6">Ready to Take the Next Step?</h2>
          <p className="text-navy/80">Book your consultation today.</p>
        </div>
        <form onSubmit={handleSubmit(console.log)} className="space-y-4">
          <input {...register('name')} placeholder="Full Name" className="w-full p-4 bg-navy/5 rounded-xl" />
          {errors.name && <p className="text-red-500 text-sm">Required</p>}
          <input {...register('phone')} placeholder="Phone" className="w-full p-4 bg-navy/5 rounded-xl" />
          <input {...register('email')} placeholder="Email" className="w-full p-4 bg-navy/5 rounded-xl" />
          <button type="submit" className="px-8 py-4 bg-teal text-white rounded-xl w-full">Request Appointment</button>
        </form>
      </div>
    </section>
  );
}
