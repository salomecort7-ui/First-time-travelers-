import React from 'react'

const DESTINATIONS = [
  { 
    name: "Iceland", 
    tag: "Ultra-Safe", 
    desc: "Perfect for nature lovers. Stunning landscapes, everyone speaks English, and it's the safest country on Earth.", 
    price: "$450+", 
    safety: "Top 1",
    img: "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    name: "Portugal", 
    tag: "High Value", 
    desc: "Our top recommendation! Incredibly affordable, sunny, and friendly. Great walkability and food.", 
    price: "$500+", 
    safety: "High",
    img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    name: "Ireland", 
    tag: "No Barrier", 
    desc: "Feel right at home with friendly locals and zero language barrier. Breath-taking cliffs and cozy pubs.", 
    price: "$500+", 
    safety: "High",
    img: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    name: "Japan", 
    tag: "Culturally Rich", 
    desc: "Cleanest cities, polite culture, and the world's most reliable transit. Safe for solo first-timers.", 
    price: "$800+", 
    safety: "Very High",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    name: "Singapore", 
    tag: "Modern & Clean", 
    desc: "Future-tech vibes with a focus on efficiency. English is primary, making it the easiest entry into Asia.", 
    price: "$900+", 
    safety: "Extremely High",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    name: "Canada", 
    tag: "Close to Home", 
    desc: "Familiar culture with world-class national parks. A perfect 'starter' international trip.", 
    price: "$250+", 
    safety: "High",
    img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    name: "Costa Rica", 
    tag: "Adventure", 
    desc: "Great infrastructure for tourism. Explore volcanoes and sloths with 'Pura Vida' hospitality.", 
    price: "$350+", 
    safety: "Good",
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    name: "Netherlands", 
    tag: "English Friendly", 
    desc: "Compact, beautiful canal cities where almost everyone speaks perfect English. Very easy to navigate.", 
    price: "$500+", 
    safety: "High",
    img: "https://images.unsplash.com/photo-1512470876302-972afd2aa9dd?auto=format&fit=crop&w=600&q=80" 
  }
]

const PACKAGES = [
  {
    title: "The Budget Weekend",
    location: "Montreal, Canada",
    price: "$800",
    features: ["Flight + Hotel included", "Old Montreal Walking Tour", "Famous Bagel Tasting", "Full Support"],
    bg: "bg-green-50"
  },
  {
    title: "Mid-Week Getaway",
    location: "Lisbon, Portugal",
    price: "$1,500",
    features: ["5-Day Itinerary", "Sintra Day Trip", "Fado Dinner & Music", "Transit Mastery Guide"],
    bg: "bg-blue-50"
  },
  {
    title: "The Dream Trip",
    location: "Tokyo & Kyoto, Japan",
    price: "$3,100",
    features: ["10-Day Once-in-a-Lifetime", "Bullet Train Pass", "Hot Springs Experience", "24/7 Coaching"],
    bg: "bg-purple-50"
  }
]

const FAQS = [
  { 
    q: "Will I get robbed? Is it safe?", 
    a: "Safety is our #1 priority. We only recommend countries that rank in the top of the Global Peace Index. We also vet every hotel for 4.5+ star safety reviews." 
  },
  { 
    q: "How do I use the trains? I'm afraid of getting lost.", 
    a: "We provide 'Transit Mastery' guides with photos and step-by-step instructions for your specific route. We'll show you exactly which button to press!" 
  },
  { 
    q: "Are there hidden costs?", 
    a: "No surprises here. We give you a complete breakdown of food, tips, and transport costs before you even book." 
  },
  { 
    q: "I don't speak the language. What if I can't order food?", 
    a: "We focus on high-English proficiency areas. Plus, our concierge is a WhatsApp message away to help you translate or explain a menu." 
  },
  { 
    q: "Will my phone work abroad?", 
    a: "We provide a simple guide to eSIMs and local SIM cards so you stay connected the second you land." 
  },
  { 
    q: "Do I need a special power adapter?", 
    a: "We'll send you a country-specific guide for plugs and voltage so your devices stay charged." 
  },
  { 
    q: "What should I pack? I don't want to look like a tourist.", 
    a: "We provide culturally appropriate packing lists so you blend in and feel comfortable everywhere you go." 
  },
  { 
    q: "Can I use my credit card or do I need cash?", 
    a: "Every itinerary includes a breakdown of when to use card and when you'll need local currency." 
  }
]

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="text-2xl font-black text-blue-600 tracking-tighter">FirstJourney</div>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#how-it-works" className="hover:text-blue-600 transition">How it Works</a>
          <a href="#destinations" className="hover:text-blue-600 transition">Destinations</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
          <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition shadow-md">
          Start Planning
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-32 max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-8">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase">
            Travel Coaching for First-Timers
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Your First Trip, <br />
            <span className="text-blue-600">With a Safety Net.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            Booking a trip is easy. Knowing how to navigate it is hard. We provide the <strong>coaching and support</strong> you need to travel with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition shadow-xl hover:-translate-y-1">
              Start My First Journey
            </button>
            <button className="border-2 border-gray-200 text-gray-700 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition">
              See How It Works
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-blue-600/5 rounded-[2rem] p-4 rotate-3 absolute inset-0 -z-10" />
          <img 
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80" 
            alt="Travel" 
            className="rounded-[2rem] shadow-2xl"
          />
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-xs">
            <p className="text-sm font-bold italic">"Most sites just sell you a flight. FirstJourney actually taught me how to travel."</p>
            <p className="text-xs text-blue-600 font-bold mt-2">Maria G. • First Trip to Ireland</p>
          </div>
        </div>
      </section>

      {/* Why Us / The Gap */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black">Why FirstJourney?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Standard booking sites assume you already know what you're doing. They leave you to figure out the transit, the customs, and the safety on your own.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-bold">
                We fill the gap by providing:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl font-bold">✓</span>
                  <div>
                    <span className="font-bold">Real-Time Coaching:</span> WhatsApp us anytime with those "dumb questions."
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl font-bold">✓</span>
                  <div>
                    <span className="font-bold">Transit Mastery:</span> Detailed photo guides of airports and train stations.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl font-bold">✓</span>
                  <div>
                    <span className="font-bold">Verified Safety:</span> We only book destinations with high English proficiency and low crime.
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-blue-100">
              <h3 className="text-2xl font-bold mb-6">Standard Sites vs. Us</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span>Flight & Hotel Booking</span>
                  <span className="text-green-600 font-bold">Both</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span>"How-to" Travel Coaching</span>
                  <span className="text-blue-600 font-bold">Only Us</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span>24/7 Question Concierge</span>
                  <span className="text-blue-600 font-bold">Only Us</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span>Step-by-Step Airport Guides</span>
                  <span className="text-blue-600 font-bold">Only Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black">Curated for First-Timers</h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">We hand-picked these 8 spots because they are ultra-safe, friendly, and easy to navigate.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESTINATIONS.map((dest, i) => (
            <div key={i} className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                  {dest.tag}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{dest.name}</h3>
                  <span className="text-blue-600 font-bold">{dest.price}</span>
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Safety: {dest.safety}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black">The Simple Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We've simplified the entire journey into three stress-free steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { title: "Tell us your vibe", desc: "Want a beach? A city? A quiet cabin? Just tell us what you like and your budget.", icon: "🏖️" },
              { title: "We Plan Everything", desc: "We find the safest, most English-friendly spots and handle all the bookings and guides.", icon: "🗺️" },
              { title: "You Enjoy with Support", desc: "Travel with a 24/7 WhatsApp concierge to answer any question while you're away.", icon: "✨" }
            ].map((step, i) => (
              <div key={i} className="relative group text-center md:text-left">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition duration-300 inline-block">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Trips */}
      <section className="bg-blue-600 py-24 px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Sample Trip Packages</h2>
            <p className="text-blue-100 text-lg">Total estimated costs including flights and hotels.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, i) => (
              <div key={i} className="bg-white text-gray-900 p-8 rounded-[2rem] shadow-xl space-y-6">
                <div>
                  <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">{pkg.location}</h3>
                  <h4 className="text-2xl font-bold">{pkg.title}</h4>
                </div>
                <div className="text-4xl font-black">~{pkg.price} <span className="text-sm text-gray-400 font-normal">total</span></div>
                <ul className="space-y-3 border-t pt-6">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600">
                      <span className="text-blue-600">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-xl font-bold bg-gray-900 text-white hover:bg-gray-800 transition">
                  Book This Trip
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black">Clear, Honest Pricing</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We're transparent about how we work. You pay the same price as booking directly, plus a small planning fee for our expert coaching and 24/7 support.
            </p>
            <div className="space-y-6">
              {[
                { t: "Price Match Guarantee", d: "Find a lower price for the same package? We'll match it instantly." },
                { t: "The 'Safety Net'", d: "24/7 access to travel experts who answer every 'dumb' question you have." },
                { t: "No Hidden Fees", d: "Full budget breakdown for food, tips, and transport before you fly." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="font-bold text-lg">{item.t}</h4>
                    <p className="text-gray-600">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-4 border-blue-600 rounded-[2.5rem] p-10 bg-white shadow-2xl relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest">
              Most Popular
            </div>
            <div className="text-7xl font-black mb-2">$49</div>
            <div className="text-gray-400 font-medium mb-8">per trip (one-time fee)</div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 font-medium text-lg">✨ Personalized Itinerary</li>
              <li className="flex items-center gap-3 font-medium text-lg">✨ All Flight & Hotel Bookings</li>
              <li className="flex items-center gap-3 font-medium text-lg">✨ 24/7 WhatsApp Concierge</li>
              <li className="flex items-center gap-3 font-medium text-lg">✨ Photo Transit Guides</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Start Planning
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black">Answers to Your "Dumb" Questions</h2>
            <p className="text-gray-600 text-lg">Don't worry, we've heard them all. That's why we're here.</p>
          </div>
          <div className="grid gap-6">
            {FAQS.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group">
                <summary className="p-6 font-bold text-lg cursor-pointer flex justify-between items-center list-none select-none">
                  {faq.q}
                  <span className="text-blue-600 transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-lg border-t pt-6">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-16 border-b border-gray-800 pb-16">
          <div className="space-y-6">
            <div className="text-3xl font-black text-blue-400">FirstJourney</div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              We're making the world accessible to everyone, starting with your first trip.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-3xl space-y-6">
            <h4 className="text-xl font-bold">Ready to see the world?</h4>
            <button className="w-full bg-blue-600 px-6 py-4 rounded-xl font-bold hover:bg-blue-700 transition text-lg">Plan My First Trip</button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">
          <div className="flex gap-8 font-medium">
            <a href="#" className="hover:text-blue-400 transition">Terms</a>
            <a href="#" className="hover:text-blue-400 transition">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <div className="text-sm">
            © 2025 FirstJourney.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
