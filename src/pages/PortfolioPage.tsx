// PortfolioPage.tsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "../components/ThemeProvider";
import { Header } from "../components/shared/Header";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { SkillsList } from "../components/SkillsList";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/shared/Footer";
import { PORTFOLIO_INFO } from "../config/portfolioData";
import { About } from "../components/About";
import { AppleHelloEnglishEffect } from "../components/HelloEffects";
import type { Project } from "../types/portfolio";
import { ProjectModal } from "../components/ProjectModal";
import { ScrollProgressBar } from "../components/shared/ScrollProgressBar";
import { ScrollToTop } from "../components/shared/ScrollToTop";
import CLIResume from "../components/CLIResume";
import { BackgroundBeams } from "../components/BackgroundBeams";
import CurvedLoop from "../components/CurvedLoop";
import { EducationTimeline } from "../components/EducationTimeline";
import { CertificationsSection } from "../components/CertificationsSection";
import { TrainingHackathonsSection } from "../components/TrainingHackathonsSection";
import { AboutDetails } from "../components/AboutDetails";
import { SubtleFloatBackground } from "../components/SubtleFloatBackground";
import { FaPhone } from "react-icons/fa6";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const PortfolioPage: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showCLI, setShowCLI] = useState(false);
  const [showHello, setShowHello] = useState(true);
  const contact = PORTFOLIO_INFO.personal.contact;
  const linkedIn = contact?.socials?.find(
    (s) => s.label.toLowerCase() === "linkedin",
  );
  const github = contact?.socials?.find(
    (s) => s.label.toLowerCase() === "github",
  );
  const mailHref = contact?.email ? `mailto:${contact.email}` : undefined;
  const phoneHref = contact?.phone ? `tel:${contact.phone.replace(/\s+/g, "")}` : undefined;
  const resumePdf = PORTFOLIO_INFO.meta?.pdf ?? `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <ThemeProvider>
      <ScrollProgressBar />
      <Header
        links={[
          { href: "#about", label: "Home" },
          { href: "#about-details", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#skills", label: "Skills" },
          { href: "#education", label: "Education" },
          { href: "#certifications", label: "Certifications" },
          { href: "#training-hackathons", label: "Training & Hackathons" },
          { href: "#contact", label: "Contact" },
        ]}
        onTryCLI={() => setShowCLI(true)}
      />
      {/* CLI panel (docked / overlay) */}
      <CLIResume open={showCLI} onClose={() => setShowCLI(false)} />

      {/* About / hero: hidden while hello animation plays */}
      <AnimatePresence>
        {showHello && (
          <motion.div
            key="hello-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AppleHelloEnglishEffect
              className="text-white"
              onAnimationComplete={() => setShowHello(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        id="about"
        className="relative w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-0"
        style={{ height: "100vh" }}
        initial={{ opacity: 0, y: 8 }}
        animate={showHello ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0" style={{ height: "140vh" }}>
          <BackgroundBeams />
        </div>
        <div className="relative z-10 w-full max-w-6xl 2xl:max-w-7xl mx-auto py-20 sm:py-24 lg:py-32">
          <div className="grid items-center">
            <About />
          </div>
        </div>
      </motion.section>
      <section className="relative z-20 overflow-hidden">
        <SubtleFloatBackground />

        <div className="relative z-10">
          <div className="w-full bg-[var(--background)] pt-8 pb-8">
            <CurvedLoop
              marqueeText={PORTFOLIO_INFO.personal.headline + " · "}
              speed={1}
              className="text-2xl text-[var(--text)] bg-[var(--surface)]"
              curveAmount={400}
              direction="left"
              interactive={true}
            />
          </div>

          <main className="max-w-6xl 2xl:max-w-9xl mx-auto px-6 py-15 sm:py-20 lg:py-32 relative">
          <AboutDetails />

        <section id="projects" className="py-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--brand)] text-center">Projects</h2>
          <p className="mb-6 text-sm text-[var(--muted)] mt-1 text-center">
            Selected work — click a card for details.
          </p>
          <ProjectsGrid
            projects={PORTFOLIO_INFO.projects}
            onOpen={setSelected}
          />
        </section>

        <section id="skills" className="py-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--brand)] text-center">Skills</h2>
          <p className="mb-6 text-sm text-[var(--muted)] mt-1 text-center">
            Tools and technologies I use regularly.
          </p>
          <SkillsList skills={PORTFOLIO_INFO.skills} isBar={true} />
        </section>

        <section id="education" className="py-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--brand)] text-center">Education</h2>
          <p className="mb-6 text-sm text-[var(--muted)] mt-1 text-center">
            Academic journey and qualifications.
          </p>
          <EducationTimeline education={PORTFOLIO_INFO.education} />
        </section>

        <section id="certifications" className="py-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--brand)] text-center">Certifications</h2>
          <p className="mb-6 text-sm text-[var(--muted)] mt-1 text-center">
            Credentials and continuous learning milestones.
          </p>
          <CertificationsSection certifications={PORTFOLIO_INFO.certifications} />
        </section>

        <section id="training-hackathons" className="py-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--brand)] text-center">Training & Hackathons</h2>
          <p className="mb-6 text-sm text-[var(--muted)] mt-1 text-center">
            Hands-on trainings and hackathon participation.
          </p>
          <TrainingHackathonsSection
            trainings={PORTFOLIO_INFO.extras?.trainings}
            hackathons={PORTFOLIO_INFO.extras?.hackathons}
          />
        </section>

        <section id="contact" className="py-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--brand)] text-center">Contact</h2>
          <p className="text-sm text-[var(--muted)] mt-1 text-center">
            Tell me about your project, or just say hi.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <ContactForm />
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col gap-4">
              <div>
                <div className="font-semibold">Let's collaborate</div>
                <div className="text-sm text-[var(--muted)]">
                  I'm available for freelance and contract work. My inbox is
                  open.
                </div>
              </div>
              <div className="mt-2">
                <div className="font-semibold">Quick contact</div>
                <div className="mt-2 text-sm text-[var(--muted)]">
                  Email: {contact?.email ?? "Not available"}
                </div>
                <div className="text-sm text-[var(--muted)]">
                  Phone: {contact?.phone ?? "Not available"}
                </div>
                <div className="text-sm text-[var(--muted)]">
                  Location: {contact?.location ?? "Not available"}
                </div>
                <div className="mt-12 flex w-full items-center justify-between text-sm">
                  {linkedIn && (
                    <a
                      href={linkedIn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--brand)] hover:bg-[var(--border)]/30"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                    >
                      <SiLinkedin className="h-7 w-7" />
                    </a>
                  )}
                  {github && (
                    <a
                      href={github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--brand)] hover:bg-[var(--border)]/30"
                      aria-label="GitHub"
                      title="GitHub"
                    >
                      <SiGithub className="h-7 w-7" />
                    </a>
                  )}
                  {mailHref && (
                    <a
                      href={mailHref}
                      className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--brand)] hover:bg-[var(--border)]/30"
                      aria-label="Email"
                      title="Email"
                    >
                      <SiGmail className="h-7 w-7" />
                    </a>
                  )}
                  {phoneHref && (
                    <a
                      href={phoneHref}
                      className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--brand)] hover:bg-[var(--border)]/30"
                      aria-label="Phone"
                      title="Phone"
                    >
                      <FaPhone className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
              <div className="mt-auto">
                <div className="text-sm font-medium">Resume</div>
                <a
                  href={resumePdf}
                  className="block mt-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                  download
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </section>
          </main>
        </div>
      </section>
      <ScrollToTop />
      <Footer />

      <ProjectModal
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </ThemeProvider>
  );
};

export default PortfolioPage;
