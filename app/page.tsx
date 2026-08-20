const projects = [
  {
    name: "Keel",
    url: "https://keel.keellabs.org",
    status: "First product",
    summary:
      "The original Keel Labs product gets its own dedicated home, focused on the product experience instead of carrying the whole studio brand.",
    accent: "from-[#f36f45] to-[#d8c46d]",
  },
  {
    name: "Thala",
    url: "https://thala.keellabs.org",
    status: "In motion",
    summary:
      "A second product space for the work now coming into focus, separated clearly enough to grow its own audience and identity.",
    accent: "from-[#4a9a8f] to-[#a75d8b]",
  },
];

const principles = ["Product-first", "Founder-led", "Built in public"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ee] text-[#171717]">
      <section className="relative flex min-h-screen flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(243,111,69,0.24),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(74,154,143,0.24),transparent_26%),linear-gradient(135deg,rgba(23,23,23,0.05),transparent_45%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f4ee] to-transparent" />

        <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a className="font-mono text-sm uppercase tracking-[0.18em]" href="/">
            Keel Labs
          </a>
          <nav aria-label="Project links" className="flex items-center gap-2">
            {projects.map((project) => (
              <a
                className="rounded-full border border-[#171717]/15 bg-white/60 px-3 py-2 text-sm transition hover:border-[#171717]/45 hover:bg-white"
                href={project.url}
                key={project.name}
              >
                {project.name}
              </a>
            ))}
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="mb-5 w-fit rounded-full border border-[#171717]/15 bg-white/70 px-3 py-2 font-mono text-xs uppercase tracking-[0.16em]">
              Portfolio studio
            </p>
            <h1 className="text-6xl font-semibold leading-[0.92] sm:text-7xl lg:text-8xl">
              Keel Labs
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[#343434] sm:text-2xl sm:leading-9">
              A home base for the products I am bringing into the world right
              now, with each product getting its own sharper, cleaner place to
              live.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {principles.map((principle) => (
                <span
                  className="border border-[#171717]/15 bg-[#171717] px-4 py-2 text-sm text-white"
                  key={principle}
                >
                  {principle}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[560px]" aria-hidden="true">
            <div className="absolute left-4 top-2 h-56 w-56 rounded-full bg-[#f36f45]/85 blur-2xl" />
            <div className="absolute bottom-10 right-2 h-64 w-64 rounded-full bg-[#4a9a8f]/80 blur-2xl" />
            <div className="absolute left-[18%] top-[16%] h-[72%] w-[72%] rotate-[-8deg] border border-[#171717]/20 bg-white/40 shadow-2xl shadow-[#171717]/10 backdrop-blur-md" />
            <div className="absolute left-[9%] top-[8%] h-[72%] w-[72%] rotate-[5deg] border border-[#171717]/20 bg-[#171717] p-5 text-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/20 pb-4 font-mono text-xs uppercase tracking-[0.16em] text-white/70">
                <span>keellabs.org</span>
                <span>home</span>
              </div>
              <div className="grid h-full content-between gap-6 pb-8 pt-10">
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-[#d8c46d]">
                    Parent brand
                  </p>
                  <p className="mt-4 max-w-sm text-4xl font-semibold leading-tight">
                    One portfolio, multiple product homes.
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between border border-white/15 bg-white/10 p-4">
                    <span>keel</span>
                    <span className="font-mono text-sm text-white/60">
                      keel.keellabs.org
                    </span>
                  </div>
                  <div className="flex items-center justify-between border border-white/15 bg-white/10 p-4">
                    <span>thala</span>
                    <span className="font-mono text-sm text-white/60">
                      thala.keellabs.org
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#171717] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/55">
              Current lineup
            </p>
            <h2 className="mt-4 max-w-sm text-4xl font-semibold leading-tight">
              Products with room to become themselves.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <a
                className="group border border-white/12 bg-white/[0.06] p-5 transition hover:-translate-y-1 hover:bg-white/[0.1]"
                href={project.url}
                key={project.name}
              >
                <div
                  className={`mb-12 h-2 w-24 bg-gradient-to-r ${project.accent}`}
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                      {project.status}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold">
                      {project.name}
                    </h3>
                  </div>
                  <span className="text-2xl transition group-hover:translate-x-1">
                    -&gt;
                  </span>
                </div>
                <p className="mt-5 text-base leading-7 text-white/70">
                  {project.summary}
                </p>
                <p className="mt-8 font-mono text-sm text-white/55">
                  {project.url.replace("https://", "")}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
