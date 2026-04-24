export default function Home() {
  const services = [
    {
      title: "Vehicle Transport",
      text: "Safe and reliable transport for cars and vans from pickup to delivery.",
    },
    {
      title: "Car Delivery",
      text: "We collect and deliver cars quickly and securely to your chosen location.",
    },
    {
      title: "Van Transport",
      text: "Professional transport service for vans of all sizes.",
    },
    {
      title: "Long Distance Transport",
      text: "Nationwide vehicle delivery with dependable service and communication.",
    },
    {
      title: "Auction & Dealer Collection",
      text: "We collect vehicles from auctions or dealerships and deliver them to you.",
    },
    {
      title: "Door-to-Door Service",
      text: "Complete pickup and drop-off service for maximum convenience.",
    },
  ];

  const benefits = [
    "Reliable and secure vehicle transport",
    "Competitive pricing",
    "Friendly and professional service",
    "Fast response times",
    "Nationwide coverage",
    "Fully door-to-door service",
  ];

  const steps = [
    "Tell us where the vehicle is",
    "We arrange pickup and transport",
    "Safe delivery to your location",
  ];

  return (
    <main className="bg-gray-50 text-gray-900">

      {/* Navbar */}
      <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
  <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
  <span className="font-bold text-lg">Buddies Breakdown and Recovery</span>
</div>
        <div className="hidden sm:flex gap-6">
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-slate-900 text-white text-center py-24 px-6">
        <p className="text-orange-400 font-semibold mb-3">
          Car & Van Transport Service
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Vehicle Transport in N/A
        </h1>

        <p className="mb-8 text-lg max-w-2xl mx-auto text-gray-200">
          Reliable pickup and delivery service for cars and vans. Fast quotes,
          safe transport, and dependable service you can trust.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+440000000000"
            className="bg-orange-500 px-6 py-3 rounded font-semibold hover:bg-orange-600"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/440000000000"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded font-semibold"
          >
            WhatsApp
          </a>

          <a
            href="#contact"
            className="border px-6 py-3 rounded font-semibold hover:bg-white hover:text-black"
          >
            Get a Quote
          </a>
        </div>
      </section>

      

      {/* Services */}
      <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold">What We Do</p>
          <h2 className="text-3xl font-bold">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <p className="text-orange-500 font-semibold">Simple Process</p>
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step} className="bg-white p-8 rounded-xl shadow">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <p className="font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section id="why" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold">Why Choose Us</p>
          <h2 className="text-3xl font-bold">Trusted Vehicle Transport</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow">
              ✓ {item}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-400 font-semibold">Get In Touch</p>

          <h2 className="text-3xl font-bold mb-4">
            Need a vehicle moved today?
          </h2>

          <p className="text-gray-200 mb-8">
            Call or WhatsApp now for a quick quote and availability.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/10 p-6 rounded-xl">
              <p className="font-bold">Phone</p>
              <p>N/A</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <p className="font-bold">WhatsApp</p>
              <p>N/A</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <p className="font-bold">Email</p>
              <p>N/A</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 N/A Transport. All rights reserved.</p>
      </footer>
    </main>
  );
}