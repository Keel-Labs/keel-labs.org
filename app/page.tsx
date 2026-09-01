const projects = [
  {
    name: "Keel Brain",
    kicker: "Personal AI chief of staff",
    descriptionLead: "An AI assistant whose memory belongs to you.",
    description:
      "Local-first desktop app for Mac and Windows. Plain markdown on your disk. Swap Claude, GPT, OpenRouter, or Ollama anytime — your context stays with you.",
    site: "https://keel.keel-labs.org/",
    github: "https://github.com/Keel-Labs/keel",
    palette: "bg-[#f4f0ea] text-[#111111]",
    art: "memory",
  },
  {
    name: "Tāla",
    kicker: "Old recordings, new pulse.",
    descriptionLead:
      "An ephemeral listening platform for discovering and interacting with historic recordings.",
    description:
      "Tāla helps you discover Indian archival music by pairing historic recordings with modern beats.",
    site: "https://tala.keel-labs.org/",
    github: "https://github.com/Keel-Labs/Tala",
    palette: "bg-[#201d18] text-[#f7f1e4]",
    art: "listening",
  },
  {
    name: "Nook",
    kicker: "Shared home systems",
    descriptionLead: null,
    description:
      "Nook helps families track home systems, maintenance, warranties, and documents in one shared place.",
    site: "https://nook.keel-labs.org/",
    github: null,
    palette: "bg-[#ede4d8] text-[#111111]",
    art: "home",
  },
  {
    name: "Soma",
    kicker: "Guided reflection for inner peace.",
    descriptionLead: null,
    description: null,
    site: "https://soma.keel-labs.org/",
    github: null,
    palette: "bg-[#f7f1e4] text-[#111111]",
    art: "thought",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/medha" },
  { label: "Medium", href: "https://medium.com/@medhaforcebewithyou" },
  { label: "X", href: "https://x.com/Ghatikesh" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/medhaghatikesh" },
  { label: "Buy me a coffee", href: "https://github.com/sponsors/medha" },
];

function ProjectArt({ type }: { type: string }) {
  if (type === "listening") {
    return (
      <div className="project-art project-art-dark" aria-hidden="true">
        <div className="record">
          <span />
        </div>
        <div className="tone-arm" />
        <div className="wave wave-one" />
        <div className="wave wave-two" />
      </div>
    );
  }

  if (type === "home") {
    return (
      <div className="project-art project-art-home" aria-hidden="true">
        <div className="nook-lockup-card">
          <img alt="" src="/nook-logo-lockup-web.png" />
        </div>
      </div>
    );
  }

  if (type === "thought") {
    return (
      <div className="project-art project-art-thought" aria-hidden="true">
        <div className="journal">
          <div className="journal-spine" />
          <div className="journal-line journal-line-one" />
          <div className="journal-line journal-line-two" />
          <div className="journal-line journal-line-three" />
          <div className="journal-bookmark" />
        </div>
      </div>
    );
  }

  return (
    <div className="project-art" aria-hidden="true">
      <div className="keel-logo-frame">
        <img alt="" src="/keel-logo.png" />
      </div>
      <div className="keel-memory-card keel-memory-card-left">
        <span># memory</span>
        <span>daily.md</span>
      </div>
      <div className="keel-memory-card keel-memory-card-right">
        <span>Claude</span>
        <span>GPT</span>
        <span>Ollama</span>
      </div>
      <div className="keel-disk" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f4ec] text-[#161412]">
      <header className="mx-auto flex w-full max-w-6xl items-center px-5 py-6 font-mono text-[11px] uppercase tracking-[0.14em] text-[#f05a35] sm:px-8">
        <a href="/">Keel Labs</a>
      </header>

      <section
        className="mx-auto max-w-6xl px-5 pb-14 pt-16 sm:px-8 md:pb-18 md:pt-20"
        id="founder"
      >
        <div className="grid gap-10 border-t border-[#ded7cb] pt-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <h1 className="max-w-2xl text-6xl font-semibold leading-none sm:text-7xl lg:text-[112px]">
            Keel Labs
          </h1>
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <img
                alt="Medha Ghatikesh"
                className="h-20 w-20 rounded-full object-cover shadow-sm"
                height="160"
                src="https://github.com/medha.png?size=160"
                width="160"
              />
              <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
                Medha Ghatikesh
              </h2>
            </div>
            <p className="mt-6 text-xl leading-8 text-[#48413a] md:text-2xl md:leading-9">
              Hey, I&apos;m Medha 👋. I&apos;m a software engineer turned product
              manager - now a solo builder; building solutions to problems I
              can&apos;t stop thinking about.
            </p>
            <p className="mt-5 text-sm leading-6 text-[#7a7065]">
              Hand crafted with love in sunny California
            </p>
            <nav
              aria-label="Founder links"
              className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-[#f05a35]"
            >
              {links.map((link) => (
                <a className="footer-button" href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-[#f05a35]">
          Projects:
        </h2>
      </div>

      <section
        className="mx-auto grid max-w-6xl gap-x-5 gap-y-12 px-5 pb-20 sm:px-8 md:grid-cols-2"
        id="projects"
      >
        {projects.map((project, index) => (
          <article className="group" key={project.name}>
            {project.site ? (
              <a
                className={`block border border-[#f05a35]/60 ${project.palette}`}
                href={project.site}
              >
                <ProjectArt type={project.art} />
              </a>
            ) : (
              <div className={`block border border-[#f05a35]/60 ${project.palette}`}>
              <ProjectArt type={project.art} />
              </div>
            )}
            <div className="mt-3 flex items-start justify-between gap-5 border-t border-[#f05a35]/50 pt-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#f05a35]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-3xl font-semibold leading-tight">
                  {project.site ? (
                    <a className="project-title-link" href={project.site}>
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h2>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-[#6f665c]">
                  {project.kicker}
                </p>
                {project.description || project.descriptionLead ? (
                  <p className="mt-4 max-w-xl text-base leading-7 text-[#342f2a]">
                    {project.descriptionLead ? (
                      <>
                        <strong>{project.descriptionLead}</strong>{" "}
                      </>
                    ) : null}
                    {project.description}
                  </p>
                ) : null}
              </div>
              {project.site || project.github ? (
                <div className="grid shrink-0 gap-2 text-right font-mono text-xs uppercase tracking-[0.12em]">
                  {project.site ? (
                    <a className="project-link" href={project.site}>
                      {project.name === "Nook" ? "Visit Nook" : "Site"}
                    </a>
                  ) : null}
                  {project.github ? (
                    <a className="project-link" href={project.github}>
                      GitHub
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <footer className="border-t border-[#ded7cb] bg-[#f4f0ea] px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#f05a35]">
          <p>Keel Labs</p>
          <nav aria-label="Footer links" className="flex flex-wrap gap-x-5 gap-y-2">
            <a className="footer-button" href="#projects">
              Projects
            </a>
            <a className="footer-button" href="#founder">
              Founder
            </a>
            <a className="footer-button" href="https://github.com/medha">
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
