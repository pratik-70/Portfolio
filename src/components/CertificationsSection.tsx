import React from "react";
import { motion } from "framer-motion";
import type { Certification, DateRange } from "../types/portfolio";

const formatDate = (date?: string | DateRange): string => {
  if (!date) return "";
  if (typeof date === "string") return date;

  const start = date.start ?? "";
  if (date.present) return `${start} - Present`;
  if (date.end) return `${start} - ${date.end}`;
  return start;
};

export const CertificationsSection: React.FC<{
  certifications?: Certification[];
}> = ({ certifications = [] }) => {
  if (certifications.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {certifications.map((cert, index) => {
        const dateLabel = formatDate(cert.date);
        const cardContent = (
          <>
            <div className="mb-5 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]/40 aspect-[4/3]">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={`${cert.name} certificate preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs sm:text-sm text-[var(--muted)] px-3 text-center">
                  Certificate preview
                </div>
              )}
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-[var(--text)] leading-snug">
              {cert.name}
            </h3>

            {(cert.issuer || dateLabel) && (
              <p className="mt-2 text-sm text-[var(--muted)]">
                {cert.issuer}
                {cert.issuer && dateLabel ? " • " : ""}
                {dateLabel}
              </p>
            )}

            {cert.description && (
              <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                {cert.description}
              </p>
            )}

            {cert.url && (
              <span className="inline-flex mt-4 text-sm font-medium text-[var(--brand)] group-hover:underline">
                View credential
              </span>
            )}
          </>
        );

        if (cert.url) {
          return (
            <motion.a
              key={cert.id ?? `${cert.name}-${index}`}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 hover:border-[var(--brand)]/50 transition-colors"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
            >
              {cardContent}
            </motion.a>
          );
        }

        return (
          <motion.article
            key={cert.id ?? `${cert.name}-${index}`}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
          >
            {cardContent}
          </motion.article>
        );
      })}
    </div>
  );
};
