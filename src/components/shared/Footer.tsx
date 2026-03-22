import React from "react";
import * as SiIcons from "react-icons/si";
import { PORTFOLIO_INFO } from "../../config/portfolioData";

export const Footer: React.FC = () => {
  const personal = PORTFOLIO_INFO.personal;
  const socials = personal.contact?.socials ?? [];

  return (
    <footer className="text-sm text-[var(--muted)] border-t border-[var(--border)] py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        {/* Left: message */}
        <div>
          Designed &amp; coded with ☕ + ❤️ by{" "}
          <span className="font-medium text-[var(--text)]">{personal.name}</span>
        </div>

        {/* Right: social icons */}
        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon
              ? SiIcons[social.icon as keyof typeof SiIcons]
              : undefined;

            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:text-[var(--text)] transition-colors"
              >
                {Icon ? <Icon size={social.size || 20} /> : social.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
