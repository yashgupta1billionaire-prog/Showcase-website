export default function Team() {
  return (
    <section id="team" className="py-24 bg-ivory">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-navy mb-16">Meet Your Dentist</h2>
        <div className="max-w-sm mx-auto bg-navy/5 p-8 rounded-3xl">
          <img
            src="/src/assets/images/dentist_portrait_1791385579150.jpg"
            alt="Dentist"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
          />
          <h3 className="text-2xl font-semibold text-navy mb-2">Dr. Alex Rivera</h3>
          <p className="text-teal font-medium mb-4">Lead Dentist & Clinical Director</p>
          <p className="text-navy/70 text-sm">Over 15 years of experience in restorative and cosmetic dentistry.</p>
        </div>
      </div>
    </section>
  );
}
