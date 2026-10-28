"use client";

import React, { useEffect, useState } from "react";

type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  previewUrl: string;
  previewAlt: string;
};

type DomainLens = {
  id: string;
  label: string;
  title: string;
  statement: string;
  roles: string;
  network: string;
};

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "neoshine-gm",
    role: "General Manager",
    company: "Neoshine Healthcare",
    period: "October 2018 – Present",
    location: "Dubai, United Arab Emirates",
    summary:
      "Leading executive management, strategic alliances, and regional home healthcare solutions across Dubai and the United Arab Emirates.",
    previewUrl: "https://picsum.photos/id/887/1200/900?grayscale",
    previewAlt: "Architectural facade with repeating geometric windows",
  },
  {
    id: "sehaaonline-founder",
    role: "Founder",
    company: "Sehaaonline",
    period: "January 2018 – Present",
    location: "United Arab Emirates",
    summary:
      "Founded Sehaaonline, transforming the Durable Medical Equipment (DME) industry to make it more affordable, developing the Sehaa Care circular economy model, and expanding from E-commerce and Omni-channel to a technology platform.",
    previewUrl: "https://picsum.photos/id/618/1200/900?grayscale",
    previewAlt: "Curving glass and steel structural lattice roof",
  },
  {
    id: "neoshine-alliance",
    role: "General Manager",
    company: "Neoshine Alliance",
    period: "January 2018 – October 2022",
    location: "Dubai, United Arab Emirates",
    summary:
      "Handheld strategic alliances at Neoshine Healthcare Alliance for creating a launch pad, aligning with partner and dealer networks, and delivering brand penetration and business acceleration across Geriatric care, Special Needs, Neuro Spine centres, and Shop N Shop models.",
    previewUrl: "https://picsum.photos/id/942/1200/900?grayscale",
    previewAlt: "Angular concrete building structure against a dark sky",
  },
  {
    id: "drive-medical",
    role: "Country Sales Head",
    company: "Drive Medical GmbH",
    period: "August 2015 – January 2018",
    location: "Dubai, United Arab Emirates",
    summary:
      "Directed national sales strategy at Drive Medical GmbH & Co KG, building institutional connects and dealer distribution across the United Arab Emirates for international medical and homecare equipment.",
    previewUrl: "https://picsum.photos/id/1081/1200/900?grayscale",
    previewAlt: "Stepped modern building corner rising into the sky",
  },
  {
    id: "bauerfeind",
    role: "Sales Operations Lead",
    company: "Bauerfeind Middle East",
    period: "June 2008 – August 2015",
    location: "Dubai, United Arab Emirates",
    summary:
      "Served as Regional Sales Operations Manager at Bauerfeind Middle East FZ LLC, managing orthopaedic and rehabilitation partnerships and clinical influencer networks across the Middle East for over seven years.",
    previewUrl: "https://picsum.photos/id/620/1200/900?grayscale",
    previewAlt: "Arched structural bridge spanning calm water",
  },
  {
    id: "sunrise-medical",
    role: "Sales Specialist",
    company: "Sunrise Medical",
    period: "August 2004 – May 2008",
    location: "Toronto, Ontario, Canada",
    summary:
      "Worked as International Sales Specialist at Sunrise Medical in Toronto, Canada, building foundational expertise in rehabilitation and mobility solutions before transitioning to regional leadership in Dubai.",
    previewUrl: "https://picsum.photos/id/954/1200/900?grayscale",
    previewAlt: "Architectural opening revealing an ascending staircase",
  },
];

const DOMAIN_LENSES: DomainLens[] = [
  {
    id: "all",
    label: "All Specialisations",
    title: "Home Healthcare & AAT",
    statement:
      "17 years of international experience building launch pads, aligning partner and dealer networks, and driving brand penetration across Rehabilitation and Home Healthcare.",
    roles: "Neoshine Healthcare · Sehaaonline · Drive Medical · Bauerfeind · Sunrise Medical",
    network: "Influencers, end users, and healthcare institutions across Canada, the Middle East, and global markets.",
  },
  {
    id: "dme",
    label: "Sehaa Care & Circular DME",
    title: "Circular DME Platform",
    statement:
      "Founded Sehaaonline in January 2018 to transform the DME industry in the UAE—making medical equipment affordable and creating the Sehaa Care model to promote a complete circular economy.",
    roles: "Sehaaonline (Founder, January 2018 – Present)",
    network: "E-commerce, Omni-channel distribution, and a dedicated healthcare technology platform across the UAE.",
  },
  {
    id: "clinical",
    label: "Geriatric & Neuro Spine",
    title: "Clinical & Rehab Centres",
    statement:
      "Deep domain specialisation in Geriatric care, Special Needs, and Neuro Spine centres—connecting rehabilitation technology directly with clinical influencers, patients, and care institutions.",
    roles: "Neoshine Healthcare · Neoshine Healthcare Alliance · Bauerfeind · Sunrise Medical",
    network: "Rehabilitation centres, Neuro Spine specialists, geriatric care providers, and end users.",
  },
  {
    id: "alliances",
    label: "Shop N Shop Networks",
    title: "Strategic Brand Alliances",
    statement:
      "Handholding international healthcare brands to create regional launch pads, structure Shop N Shop business models, and align dealer networks for market penetration.",
    roles: "Neoshine Healthcare Alliance · Drive Medical GmbH & Co KG · Bauerfeind Middle East",
    network: "Regional dealer networks, retail pharmacy chains, hospitals, and international manufacturers.",
  },
];

export default function PortfolioPage() {
  const [activeLensId, setActiveLensId] = useState<string>("all");
  const [hoveredWorkId, setHoveredWorkId] = useState<string>(EXPERIENCES[0].id);

  const activeLens =
    DOMAIN_LENSES.find((l) => l.id === activeLensId) || DOMAIN_LENSES[0];
  const activeWork =
    EXPERIENCES.find((w) => w.id === hoveredWorkId) || EXPERIENCES[0];

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!elements.length || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "200px 0px -5% 0px", threshold: 0.02 }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-[100svh] bg-[var(--bg)] text-[var(--ink)]">
      {/* Top Edge Navigation */}
      <header
        aria-label="Primary Navigation"
        className="w-full page-pad pt-6 pb-4 flex items-center justify-between"
      >
        <a href="#top" className="t-small font-medium text-[var(--ink)] text-link">
          PS · Dubai, UAE
        </a>
        <nav className="flex items-center gap-6 md:gap-8 t-small">
          <a href="#about" className="text-[var(--muted)] text-link">
            About
          </a>
          <a href="#ventures" className="hidden sm:inline text-[var(--muted)] text-link">
            Ventures
          </a>
          <a href="#experience" className="text-[var(--muted)] text-link">
            Experience
          </a>
          <a href="#skills" className="hidden md:inline text-[var(--muted)] text-link">
            Skills
          </a>
          <a href="#contact" className="text-[var(--accent)] font-medium text-link">
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        {/* HERO — Stacked Name, Two Inks */}
        <section className="page-pad pt-6 pb-16 lg:min-h-[calc(88svh-68px)] flex flex-col justify-between gap-12 bg-[var(--bg)]">
          <div className="w-full">
            <h1
              className="lines t-display font-medium"
              aria-label="Pragnesh Shah — Healthcare Strategy & Venture Builder"
            >
              <span className="line">
                <span data-line style={{ ["--i" as string]: 0 }} className="text-[var(--ink)]">
                  Pragnesh
                </span>
              </span>
              <span className="line">
                <span data-line style={{ ["--i" as string]: 1 }} className="text-[var(--accent)]">
                  Shah
                </span>
              </span>
            </h1>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-6" data-load style={{ ["--d" as string]: "360ms" }}>
              <p className="t-body text-[var(--muted)]">
                Founder @{" "}
                <a
                  href="https://sehaaonline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ink)] text-link"
                >
                  sehaaonline.com
                </a>{" "}
                · General Manager @ Neoshine Healthcare · Driving Business Strategy and Development in Dubai, United Arab Emirates.
              </p>
            </div>

            <div
              className="md:col-span-6 flex flex-col md:items-end justify-end gap-5"
              data-load
              style={{ ["--d" as string]: "460ms" }}
            >
              <p className="t-body text-[var(--ink)] md:text-right">
                17 years transforming Home Healthcare, Rehabilitation, and Assisted Aid Technology across the globe.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a href="#contact" className="btn-primary">
                  Get in touch
                </a>
                <a
                  href="https://www.linkedin.com/in/pragnesh-shah-15934331/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-small text-[var(--accent)] text-link py-2"
                >
                  LinkedIn Profile ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: INTRO — Title, note, facts row + Portrait Placeholder Frame */}
        <section
          aria-labelledby="heading-intro"
          className="bg-[var(--surface)] page-pad py-20 md:py-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7" data-reveal>
              <h2 id="heading-intro" className="t-head text-[var(--ink)]">
                Strategic alliances for home healthcare
              </h2>
            </div>
            <div className="md:col-span-5" data-reveal style={{ ["--delay" as string]: "80ms" }}>
              <p className="t-body text-[var(--muted)]">
                Creating regional launch pads, aligning partner and dealer networks, and delivering brand penetration across the UAE and international markets.
              </p>
            </div>
          </div>

          {/* Facts Row */}
          <div className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            <div data-reveal style={{ ["--delay" as string]: "0ms" }}>
              <p className="tabular t-lead text-[var(--ink)]">17+ Years</p>
              <p className="mt-2 t-small text-[var(--muted)]">
                Global Home Healthcare &amp; Assisted Aid Technology
              </p>
            </div>
            <div data-reveal style={{ ["--delay" as string]: "70ms" }}>
              <p className="tabular t-lead text-[var(--ink)]">2 Ventures</p>
              <p className="mt-2 t-small text-[var(--muted)]">
                Sehaaonline Founder &amp; Neoshine Healthcare GM
              </p>
            </div>
            <div data-reveal style={{ ["--delay" as string]: "140ms" }}>
              <p className="tabular t-lead text-[var(--ink)]">6 Roles</p>
              <p className="mt-2 t-small text-[var(--muted)]">
                Across UAE, Middle East, Germany &amp; Canada networks
              </p>
            </div>
            <div data-reveal style={{ ["--delay" as string]: "210ms" }}>
              <p className="tabular t-lead text-[var(--ink)]">Dubai, UAE</p>
              <p className="mt-2 t-small text-[var(--muted)]">
                Connecting influencers, end users &amp; institutions
              </p>
            </div>
          </div>

          {/* Portrait Placeholder + Architectural Atmosphere Split */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div
              className="md:col-span-5 bg-[var(--bg)] p-8 md:p-10 flex flex-col justify-between min-h-[340px]"
              data-reveal
            >
              <div className="py-10 px-6 bg-[var(--surface-alt)] flex flex-col items-center justify-center text-center">
                <p className="t-lead text-[var(--accent)]">
                  Pragnesh Shah · Portrait Frame
                </p>
                <p className="mt-3 t-body text-[var(--ink)]">
                  Profile Photo Placeholder
                </p>
                <p className="mt-2 t-small text-[var(--muted)]">
                  Drop profile.jpg inside the public folder anytime to display your portrait here.
                </p>
              </div>

              <p className="mt-6 t-small text-[var(--muted)]">
                Founder @ sehaaonline.com · General Manager @ Neoshine Healthcare
              </p>
            </div>

            <div className="md:col-span-7 overflow-clip bg-[var(--bg)]" data-reveal style={{ ["--delay" as string]: "100ms" }}>
              <img
                src="https://picsum.photos/id/887/1600/1000?grayscale"
                alt="Architectural lines representing structured regional healthcare infrastructure"
                width={1600}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover photo-drift"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: ABOUT + LIVE INTERACTIVE LENS — Side facts, wide paragraph */}
        <section
          id="about"
          aria-labelledby="heading-about"
          className="bg-[var(--bg)] page-pad py-20 md:py-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4 flex flex-col gap-8" data-reveal>
              <h2 id="heading-about" className="t-head text-[var(--ink)]">
                About Pragnesh
              </h2>
              <div className="flex flex-col gap-6">
                <p className="t-body text-[var(--ink)]">
                  Based in Dubai, United Arab Emirates, operating across global Home Healthcare and Rehabilitation markets.
                </p>
                <p className="t-small text-[var(--muted)]">
                  Specialised in Geriatric care, Special Needs, Neuro Spine centres, and Shop N Shop business models.
                </p>
                <p className="t-small text-[var(--muted)]">
                  Alma Mater: Mithibai College — Bachelor&apos;s degree in Business Administration and Management, General (June 1996 – March 1999).
                </p>
              </div>
            </div>

            <div className="md:col-span-8 flex flex-col gap-8" data-reveal style={{ ["--delay" as string]: "90ms" }}>
              <p className="t-lead text-[var(--ink)]">
                I have worked as a Healthcare solutions and Assisted Aid technology professional across the globe, with 17 years experience in Home Healthcare and AAT. I have specialised in Geriatric care, Special Need, Neuro Spine centres and Shop N Shop Business models.
              </p>
              <p className="t-body text-[var(--muted)]">
                I carry international experience to handhold as a strategic alliance specialist for creating a launch pad, aligning with partners and dealer networks, and providing brand penetration and business acceleration. My strongest asset has been my knowledge, network and strategic alliance within the Rehabilitation and Home healthcare space which has supported me to develop key connects among the influencers, end users and institutions across the globe.
              </p>

              {/* ONE LIVE THING: Interactive Domain & Care Model Explorer */}
              <div className="mt-4 bg-[var(--surface)] p-7 md:p-10" data-reveal>
                <div className="mb-6">
                  <h3 className="t-lead text-[var(--ink)]">
                    Interactive Care Model Filter
                  </h3>
                </div>

                <div
                  role="group"
                  aria-label="Filter career focus by healthcare domain"
                  className="flex flex-wrap gap-2.5 mb-8"
                >
                  {DOMAIN_LENSES.map((lens) => (
                    <button
                      key={lens.id}
                      type="button"
                      onClick={() => setActiveLensId(lens.id)}
                      aria-pressed={activeLensId === lens.id}
                      className="lens-btn"
                    >
                      {lens.label}
                    </button>
                  ))}
                </div>

                <div className="bg-[var(--bg)] p-6 md:p-8">
                  <p className="t-lead text-[var(--accent)]">
                    {activeLens.title}
                  </p>
                  <p className="mt-4 t-body text-[var(--ink)]">
                    {activeLens.statement}
                  </p>
                  <p className="mt-6 t-small text-[var(--muted)]">
                    Organisations: <span className="text-[var(--ink)]">{activeLens.roles}</span>
                  </p>
                  <p className="mt-2 t-small text-[var(--muted)]">
                    Ecosystem Reach: <span className="text-[var(--ink)]">{activeLens.network}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: FEATURED VENTURES & PROJECTS — Statement cell, dark rows (50/50 split) */}
        <section
          id="ventures"
          aria-labelledby="heading-ventures"
          className="w-full grid grid-cols-1 lg:grid-cols-12 bg-[var(--surface)]"
        >
          {/* Left Half: Statement Cell */}
          <div className="lg:col-span-6 bg-[var(--surface-alt)] text-[var(--ink)] page-pad py-16 md:py-24 flex flex-col justify-between">
            <div data-reveal>
              <h2 id="heading-ventures" className="t-head text-[var(--ink)]">
                Ventures &amp; featured work
              </h2>
              <p className="mt-6 t-body text-[var(--muted)]">
                Building circular healthcare models, digital DME platforms, and regional distribution alliances in the United Arab Emirates.
              </p>
            </div>

            <div className="my-10 overflow-clip bg-[var(--bg)]" data-reveal style={{ ["--delay" as string]: "80ms" }}>
              <img
                src="https://picsum.photos/id/618/1400/900?grayscale"
                alt="Modern glass and steel architectural roof representing platform scale"
                width={1400}
                height={900}
                loading="lazy"
                className="w-full h-[260px] md:h-[320px] object-cover photo-drift"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6" data-reveal style={{ ["--delay" as string]: "140ms" }}>
              <a
                href="https://sehaaonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit sehaaonline.com ↗
              </a>
              <p className="t-small text-[var(--muted)]">
                Transforming DME accessibility in the UAE since 2018.
              </p>
            </div>
          </div>

          {/* Right Half: Alternating Dark Rows */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex-1 bg-[var(--surface)] page-pad py-12 flex flex-col justify-center" data-reveal>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-5">
                  <h3 className="t-lead text-[var(--ink)]">
                    Sehaaonline Platform
                  </h3>
                  <p className="mt-2 t-small text-[var(--accent)]">
                    Founder · Jan 2018 – Present
                  </p>
                </div>
                <p className="md:col-span-7 t-body text-[var(--muted)]">
                  Founded Sehaaonline, successfully transforming the Durable Medical Equipment (DME) industry in the United Arab Emirates to make home healthcare equipment more affordable and accessible.
                </p>
              </div>
            </div>

            <div className="flex-1 bg-[var(--bg)] page-pad py-12 flex flex-col justify-center" data-reveal>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-5">
                  <h3 className="t-lead text-[var(--ink)]">
                    The Sehaa Care Model
                  </h3>
                  <p className="mt-2 t-small text-[var(--accent)]">
                    Circular Economy Initiative
                  </p>
                </div>
                <p className="md:col-span-7 t-body text-[var(--muted)]">
                  Developed the Sehaa Care model to promote a complete circular economy in medical equipment—reducing patient cost barriers while extending equipment lifecycle across homecare and rehabilitation.
                </p>
              </div>
            </div>

            <div className="flex-1 bg-[var(--surface)] page-pad py-12 flex flex-col justify-center" data-reveal>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-5">
                  <h3 className="t-lead text-[var(--ink)]">
                    Omni-Channel Tech
                  </h3>
                  <p className="mt-2 t-small text-[var(--accent)]">
                    E-Commerce to Tech Platform
                  </p>
                </div>
                <p className="md:col-span-7 t-body text-[var(--muted)]">
                  Expanded Sehaaonline from an E-commerce and Omni-channel distributor into a full-scale healthcare technology platform serving end users, caregivers, and institutions.
                </p>
              </div>
            </div>

            <div className="flex-1 bg-[var(--bg)] page-pad py-12 flex flex-col justify-center" data-reveal>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-5">
                  <h3 className="t-lead text-[var(--ink)]">
                    Neoshine Healthcare
                  </h3>
                  <p className="mt-2 t-small text-[var(--accent)]">
                    General Manager · Oct 2018 – Present
                  </p>
                </div>
                <p className="md:col-span-7 t-body text-[var(--muted)]">
                  Driving business strategy, launch-pad creation, Shop N Shop business models, and partner/dealer network alignment across Dubai and the wider region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WORK EXPERIENCE — Quiet ledger with side preview */}
        <section
          id="experience"
          aria-labelledby="heading-experience"
          className="bg-[var(--bg)] page-pad py-20 md:py-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="mb-12" data-reveal>
                <h2 id="heading-experience" className="t-head text-[var(--ink)]">
                  Work experience
                </h2>
                <p className="mt-4 t-body text-[var(--muted)]">
                  Two decades of international leadership across Dubai, the United Arab Emirates, and Toronto, Canada. Select or hover any role to inspect details.
                </p>
              </div>

              <div className="flex flex-col">
                {EXPERIENCES.map((exp, idx) => {
                  const isActive = exp.id === hoveredWorkId;
                  return (
                    <div
                      key={exp.id}
                      onMouseEnter={() => setHoveredWorkId(exp.id)}
                      onFocus={() => setHoveredWorkId(exp.id)}
                      onClick={() => setHoveredWorkId(exp.id)}
                      tabIndex={0}
                      role="button"
                      aria-pressed={isActive}
                      data-reveal
                      style={{ ["--delay" as string]: `${idx * 50}ms` }}
                      className={`p-6 md:p-8 cursor-pointer transition-colors duration-200 ${
                        isActive
                          ? "bg-[var(--surface-alt)]"
                          : idx % 2 === 0
                          ? "bg-[var(--surface)]"
                          : "bg-[var(--bg)]"
                      }`}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="t-lead text-[var(--ink)]">
                          {exp.company} · <span className="text-[var(--accent)]">{exp.role}</span>
                        </h3>
                        <span className="tabular t-small text-[var(--muted)]">
                          {exp.period}
                        </span>
                      </div>
                      <p className="mt-3 t-body text-[var(--ink)]">
                        {exp.summary}
                      </p>
                      <p className="mt-2 t-small text-[var(--muted)]">
                        Location: {exp.location}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column Sticky Preview Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-12 bg-[var(--surface)] p-7 md:p-9" data-reveal>
              <div className="overflow-clip aspect-[4/3] bg-[var(--bg)] mb-6">
                <img
                  src={activeWork.previewUrl}
                  alt={activeWork.previewAlt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="w-full h-full object-cover photo-drift"
                />
              </div>
              <h3 className="t-lead text-[var(--ink)]">
                {activeWork.company}
              </h3>
              <p className="mt-1 t-body text-[var(--accent)]">
                {activeWork.role}
              </p>
              <p className="mt-4 t-body text-[var(--ink)]">
                {activeWork.summary}
              </p>
              <p className="mt-3 tabular t-small text-[var(--muted)]">
                {activeWork.period} · {activeWork.location}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: SKILLS, SPECIALISATIONS & EDUCATION — Line-up at one type size */}
        <section
          id="skills"
          aria-labelledby="heading-skills"
          className="bg-[var(--surface)] page-pad py-20 md:py-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16">
            <div className="md:col-span-7" data-reveal>
              <h2 id="heading-skills" className="t-head text-[var(--ink)]">
                Skills &amp; education
              </h2>
            </div>
            <div className="md:col-span-5" data-reveal style={{ ["--delay" as string]: "80ms" }}>
              <p className="t-body text-[var(--muted)]">
                Core competencies, specialised clinical domains, and academic foundation from Pragnesh Shah&apos;s profile.
              </p>
            </div>
          </div>

          {/* Alternating Full-Width Band Ledger (No Card Rows) */}
          <div className="flex flex-col mb-20">
            {[
              {
                category: "Top Skill",
                title: "Business Ownership",
                detail: "Founder of Sehaaonline and executive leader building sustainable healthcare businesses in the UAE.",
              },
              {
                category: "Top Skill",
                title: "Start-up Ventures",
                detail: "Transforming Durable Medical Equipment from e-commerce and omni-channel into a circular technology platform.",
              },
              {
                category: "Top Skill",
                title: "Start-up Leadership",
                detail: "Creating launch pads, aligning dealer networks, and driving brand penetration and business acceleration.",
              },
              {
                category: "Domain Focus",
                title: "Home Healthcare & AAT",
                detail: "17+ years of international experience across Assisted Aid Technology, rehabilitation, and homecare solutions.",
              },
              {
                category: "Domain Focus",
                title: "Geriatric & Neuro Spine",
                detail: "Deep clinical and institutional network across Geriatric care, Special Needs, and Neuro Spine centres.",
              },
              {
                category: "Business Model",
                title: "Shop N Shop & Sehaa Care",
                detail: "Partner network alignment, brand penetration, and circular economy medical equipment models.",
              },
            ].map((row, idx) => (
              <div
                key={row.title}
                data-reveal
                style={{ ["--delay" as string]: `${idx * 45}ms` }}
                className={`px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline ${
                  idx % 2 === 0 ? "bg-[var(--bg)]" : "bg-[var(--surface-alt)]"
                }`}
              >
                <p className="md:col-span-4 t-lead text-[var(--ink)]">
                  {row.title}
                </p>
                <p className="md:col-span-6 t-body text-[var(--muted)]">
                  {row.detail}
                </p>
                <span className="md:col-span-2 md:text-right t-small text-[var(--accent)]">
                  {row.category}
                </span>
              </div>
            ))}
          </div>

          {/* Education Block with Architectural Image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div className="md:col-span-7 bg-[var(--bg)] p-8 md:p-12 flex flex-col justify-between" data-reveal>
              <div>
                <h3 className="t-head text-[var(--ink)]">
                  Mithibai College
                </h3>
                <p className="mt-4 t-lead text-[var(--accent)]">
                  Bachelor&apos;s degree, Business Administration and Management, General
                </p>
              </div>
              <p className="mt-8 t-body text-[var(--muted)]">
                Academic Period: June 1996 – March 1999
              </p>
            </div>
            <div className="md:col-span-5 overflow-clip bg-[var(--bg)]" data-reveal style={{ ["--delay" as string]: "90ms" }}>
              <img
                src="https://picsum.photos/id/620/1200/800?grayscale"
                alt="Arched bridge structure representing global connections across markets"
                width={1200}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover photo-drift"
              />
            </div>
          </div>
        </section>

        {/* SECTION 6: CONTACT — Address & Direct Channels in Display Rows */}
        <section
          id="contact"
          aria-labelledby="heading-contact"
          className="bg-[var(--bg)] py-20 md:py-32"
        >
          <div className="page-pad mb-12" data-reveal>
            <h2 id="heading-contact" className="t-head text-[var(--ink)]">
              Direct contact &amp; profiles
            </h2>
            <p className="mt-4 t-body text-[var(--muted)]">
              Reach out directly for strategic alliances, dealer network partnerships, or Home Healthcare initiatives.
            </p>
          </div>

          <div className="flex flex-col">
            <a
              href="mailto:prags_shah@hotmail.com"
              className="w-full bg-[var(--surface)] page-pad py-9 md:py-11 flex flex-wrap items-baseline justify-between gap-4 hover:bg-[var(--surface-alt)] transition-colors"
              data-reveal
            >
              <span className="t-head text-[var(--ink)] break-all">
                prags_shah@hotmail.com
              </span>
              <span className="t-small text-[var(--accent)]">
                Send Email ↗
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/pragnesh-shah-15934331/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[var(--bg)] page-pad py-9 md:py-11 flex flex-wrap items-baseline justify-between gap-4 hover:bg-[var(--surface)] transition-colors"
              data-reveal
            >
              <span className="t-head text-[var(--ink)]">
                LinkedIn / Pragnesh Shah
              </span>
              <span className="t-small text-[var(--accent)]">
                Connect on LinkedIn ↗
              </span>
            </a>

            <a
              href="https://sehaaonline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[var(--surface)] page-pad py-9 md:py-11 flex flex-wrap items-baseline justify-between gap-4 hover:bg-[var(--surface-alt)] transition-colors"
              data-reveal
            >
              <span className="t-head text-[var(--ink)]">
                sehaaonline.com
              </span>
              <span className="t-small text-[var(--accent)]">
                Visit Venture Website ↗
              </span>
            </a>

            <a
              href="https://github.com/prithviprags-pixel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[var(--bg)] page-pad py-9 md:py-11 flex flex-wrap items-baseline justify-between gap-4 hover:bg-[var(--surface)] transition-colors"
              data-reveal
            >
              <span className="t-head text-[var(--ink)]">
                GitHub / prithviprags-pixel
              </span>
              <span className="t-small text-[var(--accent)]">
                View GitHub Profile ↗
              </span>
            </a>

            <div
              className="w-full bg-[var(--surface)] page-pad py-9 md:py-11 flex flex-wrap items-baseline justify-between gap-4"
              data-reveal
            >
              <span className="t-head text-[var(--muted)]">
                Dubai, United Arab Emirates
              </span>
              <span className="t-small text-[var(--muted)]">
                Location
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 7: FOOTER — Contact as the headline */}
      <footer className="bg-[var(--surface-alt)] page-pad pt-14 pb-12 flex flex-col justify-between gap-16">
        <div className="flex flex-wrap items-start justify-between gap-6 t-small">
          <div>
            <p className="text-[var(--ink)] font-medium">Pragnesh Shah</p>
            <p className="text-[var(--muted)] mt-1">
              Founder @ sehaaonline.com · General Manager @ Neoshine Healthcare · Dubai, UAE
            </p>
          </div>
          <a href="#top" className="text-[var(--accent)] text-link">
            Back to top ↑
          </a>
        </div>

        <div>
          <a
            href="mailto:prags_shah@hotmail.com"
            className="block t-head text-[var(--ink)] text-link break-all"
          >
            prags_shah@hotmail.com
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 t-small text-[var(--muted)]">
          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.linkedin.com/in/pragnesh-shah-15934331/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink)] text-link"
            >
              LinkedIn
            </a>
            <a
              href="https://sehaaonline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink)] text-link"
            >
              Sehaaonline
            </a>
            <a
              href="https://github.com/prithviprags-pixel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink)] text-link"
            >
              GitHub
            </a>
          </div>
          <p>
            Architecture photography via Unsplash (Roman Kraft, Mika Ruusunen, Carl Nenzen Loven, Julien Moreau, Matthew Wiebe, Todd Quackenbush).
          </p>
          <p className="tabular">© 2026 Pragnesh Shah · Dubai, UAE</p>
        </div>
      </footer>
    </div>
  );
}
