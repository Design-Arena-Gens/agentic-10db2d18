export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="section">
        <div className="container-responsive">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2">
              <span className="badge">Digital Service Provider</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
                Build, launch, and grow with a trusted partner
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-xl">
                From idea to impact: websites, web apps, and growth systems designed
                for speed, clarity, and results.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#contact" className="btn-primary">Get a free proposal</a>
                <a href="#services" className="btn-secondary">Explore services</a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span>Fast kickoff in 5 business days</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-xl bg-gradient-to-br from-primary-100 via-white to-primary-50" />
                <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-xl bg-white/70 p-4 backdrop-blur border border-gray-100 shadow">
                  <p className="text-sm font-medium text-gray-700">
                    ?? Launch-ready in weeks, not months
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-8">
        <div className="container-responsive">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-6 opacity-70">
            {["Vertex","Nimbus","Orbit","Pioneer","Helix","Quanta"].map((brand) => (
              <div key={brand} className="text-center text-sm font-semibold text-gray-500">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container-responsive">
          <div className="max-w-2xl">
            <h2 className="section-title">Services that move the needle</h2>
            <p className="section-subtitle">
              Strategy, design, and engineering to ship quickly and scale reliably.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Websites that convert",
                desc: "Next.js sites optimized for speed, SEO, and storytelling.",
              },
              {
                title: "Web apps & platforms",
                desc: "Modern React apps with secure APIs, auth, and data workflows.",
              },
              {
                title: "Brand & product design",
                desc: "UI systems, visual identity, and prototyping with Figma.",
              },
              {
                title: "Ecommerce & payments",
                desc: "Headless storefronts, checkout flows, and subscriptions.",
              },
              {
                title: "Automation & integrations",
                desc: "Zapier/Make, webhooks, and internal tools that save hours.",
              },
              {
                title: "Ongoing growth",
                desc: "Experimentation, analytics, and performance improvements.",
              },
            ].map((s) => (
              <div key={s.title} className="card">
                <div className="h-10 w-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                  {s.title.charAt(0)}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-gray-50">
        <div className="container-responsive">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="section-title">A partner built for momentum</h2>
              <p className="section-subtitle">
                We combine deep product thinking with pragmatic engineering to ship what matters.
              </p>
              <ul className="mt-6 space-y-4 text-gray-700">
                {[
                  "Discovery that clarifies priorities and de-risks execution",
                  "Design systems that keep your brand consistent as you scale",
                  "Modular architecture and clean code for long-term maintainability",
                  "Transparent timelines, fixed milestones, and async-first communication",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-1 h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center">?</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { stat: "< 2 weeks", label: "to first release" },
                { stat: "98%", label: "on-time delivery" },
                { stat: "100+", label: "projects shipped" },
                { stat: "+45%", label: "avg. conversion lift" },
              ].map((i) => (
                <div key={i.label} className="card text-center">
                  <div className="text-2xl font-bold">{i.stat}</div>
                  <div className="mt-1 text-sm text-gray-600">{i.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container-responsive">
          <div className="max-w-2xl">
            <h2 className="section-title">Flexible engagement models</h2>
            <p className="section-subtitle">Start small, or go all-in. Simple and transparent.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Starter Sprint",
                price: "$6,000",
                items: ["2-week sprint", "Landing page or MVP slice", "Analytics setup"],
              },
              {
                name: "Growth Retainer",
                price: "$9,500/mo",
                items: ["Dedicated product team", "Experiments & iterations", "Performance upgrades"],
              },
              {
                name: "Platform Build",
                price: "Custom",
                items: ["Scoping & architecture", "Multi-sprint roadmap", "Launch & handover"],
              },
            ].map((p) => (
              <div key={p.name} className="card">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <div className="text-primary-700 font-bold">{p.price}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-1 h-4 w-4 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-[10px]">?</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-block btn-primary">Get started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container-responsive">
          <h2 className="section-title">What partners say</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3].map((i) => (
              <figure key={i} className="card">
                <blockquote className="text-gray-700">
                  ?The team delivered ahead of schedule and the results were clear
                  within days ? faster site, better conversions, fewer headaches.?
                </blockquote>
                <figcaption className="mt-4 text-sm text-gray-600">
                  <div className="font-medium text-gray-900">Jordan Lee</div>
                  <div>VP Growth, Nimbus</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-responsive">
          <h2 className="section-title">Frequently asked questions</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                q: "How do we get started?",
                a: "Kickoff with a 45-min call, then we propose a scoped plan and timeline.",
              },
              { q: "What tech do you use?", a: "Next.js, React, TypeScript, Tailwind, and Vercel." },
              {
                q: "Do you work async?",
                a: "Yes. Clear weekly updates, shared docs, and Loom walkthroughs.",
              },
              {
                q: "Can you join our stack?",
                a: "We adapt to your tools ? Jira, Linear, Notion, or GitHub Projects.",
              },
            ].map((f) => (
              <div key={f.q} className="card">
                <div className="font-semibold">{f.q}</div>
                <div className="mt-2 text-sm text-gray-700">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section bg-gray-50">
        <div className="container-responsive">
          <div className="max-w-2xl">
            <h2 className="section-title">Tell us about your project</h2>
            <p className="section-subtitle">We?ll reply within one business day.</p>
          </div>

          <form
            className="mt-8 grid gap-4 sm:grid-cols-2"
            action="/api/contact"
            method="post"
          >
            <input
              required
              name="name"
              placeholder="Your name"
              className="sm:col-span-1 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email address"
              className="sm:col-span-1 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            <input
              name="company"
              placeholder="Company (optional)"
              className="sm:col-span-1 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            <select
              name="budget"
              className="sm:col-span-1 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
              defaultValue="Starter"
            >
              {['Starter','Growth','Custom'].map(o => (
                <option key={o} value={o}>{o} budget</option>
              ))}
            </select>
            <textarea
              required
              name="message"
              placeholder="What are you building?"
              className="sm:col-span-2 min-h-[140px] rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            <button className="sm:col-span-2 btn-primary" type="submit">Send message</button>
            <p className="sm:col-span-2 text-sm text-gray-600">
              By clicking Send, you agree to our terms and privacy policy.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100">
        <div className="container-responsive flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="font-semibold text-gray-900">Acme Digital Services</div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="mailto:hello@example.com" className="hover:text-gray-900">hello@example.com</a>
          </div>
          <div>? {new Date().getFullYear()} All rights reserved</div>
        </div>
      </footer>
    </main>
  );
}
