import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(909) 969-5661";
const TEL = "tel:+19099695661";
const SMS = "sms:+19099695661";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Garcia's%20Air%20Conditioning&query_place_id=ChIJg8cmNmBLw4ARTXYoaOdcNJ0";
const FACEBOOK = "https://www.facebook.com/garciasacandheatservices/";

const services = [
  {
    icon: "snow",
    name: "AC Repair",
    text: "AC blowing warm, short-cycling or not turning on at all? Javier diagnoses the problem, explains what failed and what your options are, and many repairs are finished in under an hour.",
    featured: true,
  },
  {
    icon: "install",
    name: "AC Installation",
    text: "New and replacement air conditioners sized for your home. You get a clear quote, a tidy install and a walkthrough of how to run the new system.",
  },
  {
    icon: "fan",
    name: "Central Air Service",
    text: "Repair and service for central air systems: capacitors, motors, refrigerant issues and the parts that wear out after a few Inland Empire summers.",
  },
  {
    icon: "grid",
    name: "Mini-Split Installation",
    text: "Ductless mini-splits for garages, additions, bedrooms and homes without ducts. Quiet, efficient cooling one room or one zone at a time.",
  },
  {
    icon: "box",
    name: "Window AC Units",
    text: "Sales, installation and repair of window-mounted air conditioners, a practical option for apartments, rentals and single rooms.",
  },
  {
    icon: "thermo",
    name: "HVAC Maintenance",
    text: "A tune-up before the heat arrives: clean coils, check refrigerant and electrical parts, and catch small problems before they turn into a breakdown in July.",
  },
];

const featured = {
  text: "Called on a Saturday afternoon in the middle of a heatwave. He showed up within a couple of hours and had it fixed in less than 30 minutes. Outstanding service, and polite and professional.",
  name: "Candace P.",
  job: "Repeat customer · Saturday AC repair",
};

const reviews = [
  { name: "Ronnie M.", job: "Weekend emergency diagnosis", text: "Javier came out on a weekend to diagnose our AC. The part wasn't on the truck, but he came back as fast as he could and fixed it in 30 minutes. Good communication the whole way." },
  { name: "Karen C.", job: "AC repair", text: "The tech explained exactly what needed fixing. No runaround like the company that came before. Clear process, fair prices, and they got my AC running quickly." },
  { name: "Esmeralda G.", job: "AC service", text: "Family owned and very professional. Javier takes his time to explain everything in detail and walks you through your options. Prices are very reasonable." },
  { name: "Mrs. S.", job: "AC repair", text: "My air conditioner works perfectly now. The technician was friendly, respectful and skilled, arrived on time, worked fast and left everything clean." },
  { name: "Jorge A.", job: "AC repair", text: "They came earlier than planned and fixed my AC in less than an hour. I highly recommend Garcia's." },
  { name: "John M.", job: "AC service", text: "One of the best experiences I've had with any business. Javier Sr. and Javier Jr. really know air conditioning. Total professionalism." },
];

const steps = [
  { title: "Call or text", text: `Reach Javier at ${PHONE}. Tell him what the AC is doing and when you are home.` },
  { title: "We come to you", text: "A Garcia's tech arrives at the time you agreed, often sooner, and looks the system over." },
  { title: "Your options, explained", text: "You hear what is wrong, what each fix costs and what we recommend. No pressure and no runaround." },
  { title: "Cool air, clean house", text: "We make the repair or install, test the system with you and clean up before we leave." },
];

const faqs = [
  { q: "What areas do you serve?", a: "Fontana, Ontario and nearby Inland Empire communities. If you are a little outside that area, call or text and we will tell you straight away whether we can get to you." },
  { q: "What are your hours?", a: "Monday through Saturday, 7:00 AM to 6:00 PM. Closed Sunday. Customers have reached us on Saturday afternoons during heatwaves and had their AC running the same day." },
  { q: "How fast can you get here?", a: "It depends on the day, but reviewers describe same-day visits within a couple of hours, and many repairs take less than an hour once we are there. Call early in the day for the best chance at a same-day slot." },
  { q: "Do you install mini-splits and window units, or just central air?", a: "All three. We sell, install and repair central air systems, ductless mini-splits and window-mounted AC units, plus routine maintenance." },
  { q: "Will you explain the problem before doing the work?", a: "Yes. Javier explains what failed and lays out your repair or replacement options with prices, so you can decide. Customers often mention there was no runaround." },
  { q: "Are you a real local business?", a: "Yes. Garcia's Air Conditioning is a small family-owned company in Fontana run by Javier Garcia, with his son Javier Jr. It has been BBB Accredited since November 21, 2018." },
  { q: "If the part isn't on the truck, what happens?", a: "We pick it up and come back as quickly as we can to finish the job, and we keep you posted in the meantime." },
];

const areas = ["Fontana", "Ontario", "Inland Empire"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Garcia's Air Conditioning",
  telephone: "+1-909-969-5661",
  founder: "Javier Garcia",
  address: { "@type": "PostalAddress", streetAddress: "15945 Deodar Ct", addressLocality: "Fontana", addressRegion: "CA", postalCode: "92335", addressCountry: "US" },
  areaServed: ["Fontana, CA", "Ontario, CA", "Inland Empire, CA"],
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:00", closes: "18:00" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: "37" },
  sameAs: [FACEBOOK],
  hasMap: MAPS,
};

const H2 = "text-[clamp(1.85rem,3.4vw,2.5rem)] text-ink";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Garcia's Air Conditioning home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white"><Icon name="snow" className="h-5 w-5" /></span>
            <span className="leading-tight">
              <span className="block text-[1.2rem] font-extrabold text-ink">Garcia&apos;s</span>
              <span className="block text-[var(--text-cap)] font-semibold text-brand-dark">Air Conditioning</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[var(--text-small)] font-semibold text-muted lg:flex">
            <a href="#services" className="hover:text-brand-dark">Services</a>
            <a href="#reviews" className="hover:text-brand-dark">Reviews</a>
            <a href="#about" className="hover:text-brand-dark">About</a>
            <a href="#area" className="hover:text-brand-dark">Service Area</a>
            <a href="#faq" className="hover:text-brand-dark">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="num hidden font-bold text-ink hover:text-brand-dark md:inline">{PHONE}</a>
            <a href={TEL} className="btn hidden min-h-[48px] items-center gap-2 rounded-full bg-cta px-5 font-bold text-white hover:bg-cta-dark md:inline-flex">
              <Icon name="phone" className="h-5 w-5" /> Call Now
            </a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-12 w-12 place-items-center rounded-full bg-cta text-white md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="bg-gradient-to-b from-tint to-paper">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 pt-12 md:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[var(--text-small)] font-bold text-brand-dark shadow-sm">
                <Icon name="users" className="h-4 w-4" /> Family owned · Javier Sr. &amp; Javier Jr.
              </p>
              <h1 className="mt-5 text-[clamp(2.25rem,5vw,3.6rem)] text-ink">AC Repair &amp; Installation in Fontana and the Inland Empire</h1>
              <p className="mt-5 max-w-[56ch] text-[var(--text-lead)] leading-relaxed text-muted">
                Central air, ductless mini-splits and window units, fixed or installed by a local family who shows up when
                it&apos;s hot, explains your options, and leaves your home clean.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-full bg-cta px-7 text-[1.0625rem] font-bold text-white shadow-sm hover:bg-cta-dark">
                  <Icon name="phone" className="h-5 w-5" /> Call <span className="num">{PHONE}</span>
                </a>
                <a href={SMS} className="btn inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-full border-2 border-brand bg-white px-7 font-bold text-brand-dark hover:bg-brand-soft">
                  <Icon name="chat" className="h-5 w-5" /> Text us
                </a>
              </div>
              <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[var(--text-small)] text-muted">
                <li className="inline-flex items-center gap-2"><Stars className="h-[18px] w-[18px]" /><strong className="text-ink">4.5</strong> · 37 Google reviews</li>
                <li className="inline-flex items-center gap-1.5"><Icon name="shield" className="h-[18px] w-[18px] text-brand" />BBB Accredited since 2018</li>
                <li className="inline-flex items-center gap-1.5"><Icon name="calendar" className="h-[18px] w-[18px] text-brand" />Open Saturdays</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 shadow-[0_24px_50px_-32px_oklch(0.3_0.05_210/0.5)] md:p-8">
              <h2 className="text-[var(--text-h3)] text-ink">Quick facts</h2>
              <ul className="mt-5 space-y-4">
                {[
                  { i: "clock", t: "Mon to Sat, 7 AM to 6 PM", s: "Closed Sunday" },
                  { i: "bolt", t: "Same-day help on hot days", s: "Reviewers mention arrival within a couple of hours" },
                  { i: "pin", t: "Fontana, Ontario & the IE", s: "Based in Fontana, CA 92335" },
                  { i: "user", t: "Owner Javier Garcia", s: "Explains every option before work starts" },
                ].map((f) => (
                  <li key={f.t} className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-dark"><Icon name={f.i} className="h-5 w-5" /></span>
                    <span><strong className="block text-ink">{f.t}</strong><span className="text-[var(--text-small)] text-muted">{f.s}</span></span>
                  </li>
                ))}
              </ul>
              <a href={TEL} className="btn mt-7 flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand font-bold text-white hover:bg-brand-dark">
                <Icon name="phone" className="h-5 w-5" /> Talk to Javier
              </a>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="At a glance" className="border-y border-line bg-white">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { i: "star", t: "4.5 stars", s: "37 Google reviews" },
              { i: "shield", t: "BBB Accredited", s: "Since 11/21/2018" },
              { i: "users", t: "Family owned", s: "Father and son" },
              { i: "grid", t: "Mini-split installs", s: "Plus central & window AC" },
            ].map((x) => (
              <li key={x.t} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-white"><Icon name={x.i} className="h-5 w-5" /></span>
                <span><strong className="block text-ink">{x.t}</strong><span className="text-[var(--text-small)] text-muted">{x.s}</span></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="max-w-[62ch]">
              <p className="font-bold text-brand-dark">Our services</p>
              <h2 className={`mt-2 ${H2}`}>Air conditioning services for Fontana homes</h2>
              <p className="mt-4 text-muted">
                Whatever kind of AC you have, we can repair it, service it or replace it. Every visit starts with a clear
                explanation of what&apos;s going on and what it will cost.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`reveal card-lift flex flex-col rounded-3xl border bg-white p-7 ${s.featured ? "border-brand ring-1 ring-brand" : "border-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand-dark"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-cta/10 px-3 py-1 text-[var(--text-cap)] font-bold text-cta-dark">Most calls</span>}
                  </div>
                  <h3 className="mt-5 text-[var(--text-h3)]">{s.name}</h3>
                  <p className="mt-2.5 flex-1 text-muted">{s.text}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand-dark hover:text-brand">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-bold text-brand-dark">Reviews</p>
                <h2 className={`mt-2 ${H2}`}>Rated 4.5 from 37 Google reviews</h2>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-[48px] items-center gap-2 self-start rounded-full border-2 border-brand bg-white px-5 font-bold text-brand-dark hover:bg-brand-soft md:self-auto">
                Read all reviews on Google <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
            <figure className="reveal mt-10 rounded-3xl bg-brand p-8 text-white md:p-12">
              <Stars />
              <blockquote className="mt-5 max-w-[60ch] text-[clamp(1.35rem,2.4vw,1.75rem)] font-bold leading-snug">&ldquo;{featured.text}&rdquo;</blockquote>
              <figcaption className="mt-5 text-white/85"><strong className="text-white">{featured.name}</strong> · {featured.job}</figcaption>
            </figure>
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-3xl border border-line bg-white p-6">
                  <Stars className="h-[18px] w-[18px]" />
                  <blockquote className="mt-3 flex-1 text-ink/90">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 border-t border-line pt-4">
                    <strong className="block text-ink">{r.name}</strong>
                    <span className="text-[var(--text-small)] text-muted">{r.job}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="font-bold text-brand-dark">About us</p>
              <h2 className={`mt-2 ${H2}`}>A Fontana family business that picks up when it&apos;s hot</h2>
              <div className="mt-5 max-w-[62ch] space-y-4 text-muted">
                <p>
                  Garcia&apos;s Air Conditioning is a small, family-owned AC company run by Javier Garcia, working alongside
                  his son, Javier Jr. We handle sales, service and repair for central air, ductless mini-splits and window
                  units across Fontana, Ontario and the surrounding Inland Empire.
                </p>
                <p>
                  Being small is the point. When you call, you talk to the people who will actually come out. We take the
                  time to explain what failed, what your options are and what each one costs, and then we let you choose.
                  Customers tell us that is a welcome change after dealing with bigger outfits.
                </p>
                <p>
                  Inland Empire summers are hard on air conditioners, and they always seem to break on the hottest weekend of
                  the year. That&apos;s why we are open Saturdays and do our best to get to you the same day.
                </p>
              </div>
            </div>
            <ul className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { i: "clock", t: "On time, often early", s: "Reviewers mention techs arriving on time or ahead of schedule." },
                { i: "chat", t: "Plain explanations", s: "You hear what's wrong and every option before we start." },
                { i: "tag", t: "Reasonable prices", s: "Fair, up-front pricing customers call reasonable." },
                { i: "home", t: "Clean when we leave", s: "Respectful in your home, and we tidy up after the work." },
              ].map((d) => (
                <li key={d.t} className="reveal rounded-3xl border border-line bg-tint p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-dark"><Icon name={d.i} className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-[1.15rem]">{d.t}</h3>
                  <p className="mt-1.5 text-[var(--text-small)] text-muted">{d.s}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-bold text-brand-dark">How it works</p>
              <h2 className={`mt-2 ${H2}`}>From warm house to cool air</h2>
              <p className="mt-4 max-w-[48ch] text-muted">Four simple steps, and you are in the loop the whole time.</p>
            </div>
            <ol className="space-y-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal flex gap-5 rounded-3xl border border-line bg-white p-6">
                  <span className="num grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand text-[1.25rem] font-extrabold text-white">{i + 1}</span>
                  <span>
                    <h3 className="text-[1.2rem]">{s.title}</h3>
                    <p className="mt-1 text-muted">{s.text}</p>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="font-bold text-brand-dark">Service area</p>
              <h2 className={`mt-2 ${H2}`}>Serving Fontana, Ontario and the Inland Empire</h2>
              <p className="mt-4 text-muted">
                We are based in Fontana and cover the surrounding Inland Empire. Not sure if you are in range? Send a text with
                your cross streets and we&apos;ll let you know.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 font-semibold">
                    <Icon name="pin" className="h-4 w-4 text-brand" />{a}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-3">
                <p className="flex items-start gap-3"><Icon name="clock" className="mt-1 h-5 w-5 shrink-0 text-brand" />Mon to Sat 7:00 AM to 6:00 PM · Sunday closed</p>
                <p className="flex items-start gap-3"><Icon name="phone" className="mt-1 h-5 w-5 shrink-0 text-brand" /><a href={TEL} className="num font-bold hover:text-brand-dark">{PHONE}</a></p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-line bg-white">
              <iframe
                title="Map of the Fontana, California service area"
                src="https://maps.google.com/maps?q=Fontana%2C%20CA%2092335&z=11&output=embed"
                className="h-[360px] w-full md:h-full md:min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[820px] px-5 md:px-6">
            <p className="font-bold text-brand-dark">FAQ</p>
            <h2 className={`mt-2 ${H2}`}>Questions customers ask before they call</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-line bg-white px-6">
                  <summary className="flex min-h-[64px] items-center justify-between gap-4 py-4 text-[1.125rem] font-bold text-ink">
                    {f.q}
                    <span className="faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-dark"><Icon name="chevron" className="h-5 w-5" /></span>
                  </summary>
                  <p className="pb-5 pr-8 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-dark text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-8 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-6 md:py-16">
            <div>
              <h2 className="text-[clamp(1.85rem,3.8vw,2.6rem)]">AC acting up? Call Javier at <span className="num">{PHONE}</span>.</h2>
              <p className="mt-3 text-[var(--text-lead)] text-white/85">Open Monday to Saturday, 7 AM to 6 PM. Call or text for help today.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={TEL} className="btn inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-full bg-cta px-8 text-[1.125rem] font-extrabold text-white hover:bg-cta-dark">
                <Icon name="phone" className="h-5 w-5" /> Call now
              </a>
              <a href={SMS} className="btn inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-full border-2 border-white/70 px-8 font-bold text-white hover:bg-white/10">
                <Icon name="chat" className="h-5 w-5" /> Text us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-paper pb-28 pt-14 md:pb-12">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:px-6">
          <div>
            <p className="text-[1.3rem] font-extrabold">Garcia&apos;s Air Conditioning</p>
            <p className="mt-3 text-[var(--text-small)] text-muted">Family-owned AC repair and installation in Fontana, CA. BBB Accredited since 11/21/2018.</p>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Garcia's Air Conditioning on Facebook" className="mt-4 inline-grid h-11 w-11 place-items-center rounded-full bg-brand-soft text-brand-dark hover:bg-brand hover:text-white">
              <Icon name="facebook" className="h-5 w-5" />
            </a>
          </div>
          <div>
            <h3 className="text-[1.0625rem]">Contact</h3>
            <ul className="mt-3 space-y-2 text-[var(--text-small)] text-muted">
              <li><a href={TEL} className="num font-bold text-ink hover:text-brand-dark">{PHONE}</a></li>
              <li><a href={SMS} className="hover:text-brand-dark">Text us</a></li>
              <li>Fontana, CA 92335</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[1.0625rem]">Hours</h3>
            <ul className="mt-3 space-y-1 text-[var(--text-small)] text-muted">
              <li>Mon to Sat: 7 AM to 6 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            <h3 className="mt-5 text-[1.0625rem]">Service area</h3>
            <p className="mt-2 text-[var(--text-small)] text-muted">Fontana, Ontario and the Inland Empire</p>
          </div>
          <div>
            <h3 className="text-[1.0625rem]">Services</h3>
            <ul className="mt-3 space-y-1 text-[var(--text-small)] text-muted">
              {services.map((s) => <li key={s.name}>{s.name}</li>)}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1200px] border-t border-line px-5 pt-6 text-[var(--text-cap)] text-muted md:px-6">
          © {new Date().getFullYear()} Garcia&apos;s Air Conditioning · Fontana, CA
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <a href={TEL} className="btn inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-cta font-bold text-white"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={SMS} className="btn inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border-2 border-brand bg-white font-bold text-brand-dark"><Icon name="chat" className="h-5 w-5" />Text</a>
      </div>
    </>
  );
}
