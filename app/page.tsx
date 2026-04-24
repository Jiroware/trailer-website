export default function Home() {
  const services = [
    {
      title: "Trailer Hire",
      text: "Flexible short-term and long-term trailer hire options for personal and business use.",
    },
    {
      title: "Trailer Sales",
      text: "Quality trailers available for purchase, with honest advice to help you choose the right one.",
    },
    {
      title: "Trailer Repairs",
      text: "Maintenance and repair services to keep your trailer safe, reliable, and road-ready.",
    },
    {
      title: "Trailer Transport",
      text: "Safe and efficient transport for vehicles, machinery, equipment, and more.",
    },
    {
      title: "Car Transporter Trailers",
      text: "Ideal for moving cars securely with dependable trailer options.",
    },
    {
      title: "Plant & Flatbed Trailers",
      text: "Suitable for machinery, heavy loads, building materials, and commercial use.",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">N/A Trailers</h1>
        <div className="hidden sm:flex gap-6">
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-slate-900 text-white text-center py-24 px-6">
        <p className="text-orange-400 font-semibold mb-3">
          Trailer Hire • Sales • Transport
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Reliable Trailer Services in N/A
        </h1>
        <p className="mb-8 text-lg max-w-2xl mx-auto text-gray-200">
          Reliable trailers for hire, sale, and transport services. Fast quotes,
          fair pricing, and dependable service you can trust.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
  href="tel:+4407544110003"
  className="bg-orange-500 px-6 py-3 rounded font-semibold hover:bg-orange-600"
>
  Call Now
</a>



<a
  href="https://wa.me/+4407544110003"
  target="_blank"
  className="bg-white text-black px-6 py-3 rounded font-semibold"
>
  WhatsApp
</a>
          <a className="border px-6 py-3 rounded font-semibold hover:bg-white hover:text-black" href="#contact">
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
          {[
            "Tell us what trailer you need",
            "Choose hire, sale, repair, or transport",
            "Get a fast quote and availability",
          ].map((step, index) => (
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
          <h2 className="text-3xl font-bold">Dependable Trailer Service</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Reliable and well-maintained trailers",
            "Competitive pricing",
            "Friendly local service",
            "Fast response times",
            "Delivery options available",
            "Suitable for personal and commercial use",
          ].map((item) => (
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
          <h2 className="text-3xl font-bold mb-4">Need a trailer today?</h2>
          <p className="text-gray-200 mb-8">
            Call or WhatsApp now for availability and a quick quote.
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
        <p>© 2026 N/A Trailers. All rights reserved.</p>
      </footer>
    </main>
  );
}