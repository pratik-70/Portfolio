import { animate, motion } from "framer-motion";
import { PORTFOLIO_INFO } from "../config/portfolioData";
import type { AvatarItem } from "../types/portfolio";

export const About: React.FC = () => {
  const personal = PORTFOLIO_INFO.personal;
  const resumePdf = PORTFOLIO_INFO.meta?.pdf ?? `${import.meta.env.BASE_URL}resume.pdf`;
  const name = personal.name ?? "Pratik Kumar";
  const highlightLabel = "DevOps and Cloud Enthusiast";
  const titleText = personal.title;
  const location = personal.contact?.location ?? "Remote";
  const avatar = personal.avatar;

  const heroSummary =
    personal.hero?.summary ??
    personal.summary ??
    "I design and build production-grade frontends and APIs, focusing on performance, accessibility, and delightful UX.";

  const normalizeAvatar = (a: AvatarItem) =>
    typeof a === "string" ? { url: a } : { url: a.url, label: a.label };

  let avatarItems: { url: string; label?: string }[] = [];
  if (Array.isArray(avatar)) {
    avatarItems = avatar.map((a) => normalizeAvatar(a));
  } else if (avatar) {
    avatarItems = [normalizeAvatar(avatar)];
  }

  const primaryAvatar = avatarItems[0];

  const springScrollTo = (y: number) => {
    const controls = animate(window.scrollY, y, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
    return () => controls.stop();
  };

  const navigateTo = (href: string) => {
    if (!href.startsWith("#")) {
      globalThis.location.href = href;
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    const headerEl = document.querySelector("header");
    const headerH = headerEl?.offsetHeight ?? 0;
    const y = target.getBoundingClientRect().top + window.scrollY - headerH;
    springScrollTo(y);
  };

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    navigateTo(href);
  };

  const handleKeyActivation = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (e.key === "Enter") {
      if (href.startsWith("#")) {
        e.preventDefault();
        navigateTo(href);
      }
    } else if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      navigateTo(href);
    }
  };

  return (
    <section className="md:col-span-2">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="panel-translucent p-6 md:p-8 rounded-2xl">
              <h1 className="text-[clamp(2.25rem,6vw,5.5rem)] font-extrabold leading-[1.05] whitespace-nowrap max-w-full">
                {name}
              </h1>

              {titleText && (
                <div className="mt-3 text-base text-muted-foreground">
                  {titleText.includes(highlightLabel) ? (
                    <>
                      {titleText.split(highlightLabel)[0]}
                      <span className="inline-block px-3 py-1 rounded-full ml-1 bg-[var(--surface)] text-[var(--brand)] border border-[var(--border)] font-semibold">
                        {highlightLabel}
                      </span>
                      {titleText.split(highlightLabel)[1]}
                    </>
                  ) : (
                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--surface)] text-[var(--brand)] border border-[var(--border)] font-semibold">
                      {titleText}
                    </span>
                  )}
                </div>
              )}

              <p className="mt-6 text-lg text-muted-foreground max-w-2xl whitespace-pre-line">
                {heroSummary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--text)]">
                  {location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--text)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Available now
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-3 text-sm font-semibold shadow-lg hover:opacity-95"
                  onClick={(e) => onNavClick(e, "#projects")}
                  onKeyDown={(e) => handleKeyActivation(e, "#projects")}
                >
                  See my work
                </a>

                <a
                  href={resumePdf}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted"
                  onKeyDown={(e) => handleKeyActivation(e, resumePdf)}
                  download
                >
                  Download resume
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex items-center justify-center">
            <div className="group relative [perspective:900px] cursor-zoom-in">
              <div className="relative w-80 h-96 rounded-3xl p-[3px] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 [transform:rotateX(6deg)_rotateY(-8deg)] group-hover:[transform:rotateX(3deg)_rotateY(-3deg)_translateY(-4px)] overflow-hidden">
                <motion.div
                  aria-hidden="true"
                  className="absolute -inset-[110%] bg-[conic-gradient(from_0deg,rgba(24,204,252,0),rgba(24,204,252,0.95),rgba(99,68,245,0.9),rgba(174,72,255,0.95),rgba(24,204,252,0))]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none" />
                <div className="relative w-full h-full rounded-[22px] overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  {primaryAvatar?.url ? (
                    <img
                      src={primaryAvatar.url}
                      alt={primaryAvatar.label ?? `${name} profile image`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-600 to-indigo-700 text-white">
                      <div className="text-6xl font-bold mb-4">{name?.[0] ?? "P"}</div>
                      <div className="text-sm font-medium opacity-90">Profile</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
