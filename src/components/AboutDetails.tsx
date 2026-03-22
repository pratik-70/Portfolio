import { PORTFOLIO_INFO } from "../config/portfolioData";

export const AboutDetails: React.FC = () => {
  const personal = PORTFOLIO_INFO.personal;
  const aboutText =
    personal.summary ??
    "I build reliable, scalable software systems with a focus on automation and developer experience.";
  const snapshotItems = [
    {
      value: "5+",
      label: "CI/CD Pipelines",
    },
    {
      value: "10+",
      label: "Automated Deployments",
    },
    {
      value: "6+",
      label: "Docker/K8s Workloads",
    },
    {
      value: "8",
      label: "Cloud/DevOps Tools",
    },
    {
      value: "12+",
      label: "Docker Images Built",
    },
    {
      value: "15+",
      label: "Infra Modules Reused",
    },
    {
      value: "99%",
      label: "Pipeline Success Rate",
    },
    {
      value: "70%",
      label: "Faster Deploy Time",
    },
  ];

  const explicitParagraphs = aboutText
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  const normalizedAboutText = aboutText.replace(/\s+/g, " ").trim();
  const sentenceChunks = normalizedAboutText
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const maxVisibleSentences = 4;
  const visibleSentenceChunks = sentenceChunks.slice(0, maxVisibleSentences);

  let firstParagraph =
    visibleSentenceChunks.join(" ") || normalizedAboutText;
  let secondParagraph = "";

  if (explicitParagraphs.length >= 2) {
    firstParagraph = explicitParagraphs[0];
    secondParagraph = explicitParagraphs.slice(1).join(" ");
  } else if (visibleSentenceChunks.length >= 2) {
    // Keep the first paragraph shorter as an intro lead.
    const splitIndex = Math.max(1, Math.ceil(visibleSentenceChunks.length / 3));
    firstParagraph = visibleSentenceChunks.slice(0, splitIndex).join(" ");
    secondParagraph = visibleSentenceChunks.slice(splitIndex).join(" ");
  }

  return (
    <section id="about-details" className="py-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--brand)] text-center">About Me</h2>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1 text-center">
        A quick overview of my background and what I am currently focused on.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 h-full">
          <p className="text-[15px] leading-7 text-[var(--text)]">{firstParagraph}</p>
          {secondParagraph && (
            <p className="mt-4 text-[15px] leading-7 text-[var(--text)]">{secondParagraph}</p>
          )}

          {!!PORTFOLIO_INFO.highlights?.length && (
            <div className="mt-6">
              <h3 className="text-base font-semibold text-[var(--brand)]">Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--text)] marker:text-[var(--brand)] list-disc pl-5">
                {PORTFOLIO_INFO.highlights.map((item, idx) => (
                  <li key={`${item}-${idx}`} className="leading-6">{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="lg:col-span-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 h-full">
          <div className="text-base font-semibold text-[var(--brand)]">DevOps Snapshot</div>
          <p className="mt-1 text-sm text-[var(--muted)]">At a glance</p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {snapshotItems.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg)]/70 p-3"
              >
                <div className="text-xl font-bold text-[var(--brand)]">{item.value}</div>
                <div className="mt-1 text-xs leading-4 text-[var(--muted)]">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "AWS",
              "Docker",
              "Kubernetes",
              "Jenkins",
              "Terraform",
              "Linux",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[var(--border)] px-2 py-1 text-[11px] text-[var(--muted)]"
              >
                {tool}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
