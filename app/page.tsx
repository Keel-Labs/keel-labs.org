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
    name: "Home Brain",
    kicker: "Coming soon",
    descriptionLead: null,
    description: null,
    site: null,
    github: null,
    palette: "bg-[#ede4d8] text-[#111111]",
    art: "home",
  },
  {
    name: "CBT Thought Record",
    kicker: "Coming soon",
    descriptionLead: null,
    description: null,
    site: null,
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
        <div className="home-roof" />
        <div className="home-body" />
        <div className="home-door" />
        <div className="home-node home-node-one" />
        <div className="home-node home-node-two" />
        <div className="home-node home-node-three" />
        <div className="home-path home-path-one" />
        <div className="home-path home-path-two" />
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
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#f05a35] sm:px-8">
        <a href="/">Keel Labs</a>
        <nav aria-label="Primary" className="flex gap-4">
          <a href="#projects">Projects</a>
          <a href="#founder">Founder</a>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 md:pt-20">
        <div>
          <h1 className="mt-6 max-w-2xl text-6xl font-semibold leading-none sm:text-7xl lg:text-8xl">
            Keel Labs
          </h1>
          <p className="mt-8 text-2xl leading-9 sm:text-3xl sm:leading-10">
            Projects:
          </p>
        </div>
      </section>

      <section
        className="mx-auto grid max-w-7xl gap-x-5 gap-y-12 px-5 pb-20 sm:px-8 md:grid-cols-2"
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
                  {project.name}
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
                      Site
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

      <footer
        className="border-t border-[#ded7cb] bg-[#f4f0ea] px-5 py-12 sm:px-8 md:py-16"
        id="founder"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[152px_1fr] md:items-center">
            <img
              alt="Medha Ghatikesh"
              className="h-32 w-32 rounded-full object-cover shadow-sm md:h-38 md:w-38"
              height="304"
              src="https://github.com/medha.png?size=304"
              width="304"
            />
            <div>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Medha Ghatikesh
              </h2>
              <p className="mt-3 max-w-3xl text-xl leading-8 text-[#48413a]">
                Hey, I&apos;m Medha 👋. I&apos;m a software engineer turned product
                manager - now a solo builder; building solutions to problems I
                can&apos;t stop thinking about.
              </p>
              <p className="mt-4 text-sm leading-6 text-[#7a7065]">
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
        </div>
      </footer>
    </main>
  );
}
