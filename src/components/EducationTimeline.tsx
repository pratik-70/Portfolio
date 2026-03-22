import React from "react";
import { motion } from "framer-motion";
import type { DateRange, Education } from "../types/portfolio";

const formatDate = (date?: string | DateRange): string => {
  if (!date) return "";
  if (typeof date === "string") return date;

  const start = date.start ?? "";
  if (date.present) return `${start} - Present`;
  if (date.end) return `${start} - ${date.end}`;
  return start;
};

export const EducationTimeline: React.FC<{ education?: Education[] }> = ({
  education = [],
}) => {
  if (education.length === 0) return null;

  return (
    <div className="relative">
      <motion.div
        aria-hidden
        className="absolute left-3.5 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-[var(--border)] origin-top"
        initial={{ scaleY: 0, opacity: 0.4 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="space-y-6 md:space-y-8">
        {education.map((item, index) => {
          const title = item.degree ?? "Education";
          const dateLabel = formatDate(item.date);
          const isRight = index % 2 === 1;

          return (
            <motion.article
              key={item.id ?? `${title}-${index}`}
              className="relative md:grid md:grid-cols-2 md:gap-10"
              initial={{ opacity: 0, x: isRight ? 56 : -56, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
            >
              <span
                aria-hidden
                className="absolute left-3.5 md:left-1/2 md:-translate-x-1/2 top-6 block h-3 w-3 rounded-full bg-[var(--brand)] ring-4 ring-[var(--background)]"
              />

              <div
                className={`pl-10 md:pl-0 ${
                  isRight
                    ? "md:col-start-2 md:pl-8"
                    : "md:col-start-1 md:pr-8"
                }`}
              >
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--text)]">
                      {title}
                    </h3>
                    {(item.school || item.location) && (
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {item.school}
                        {item.school && item.location ? " • " : ""}
                        {item.location}
                      </p>
                    )}
                  </div>

                  {dateLabel && (
                    <p className="text-xs sm:text-sm font-medium text-[var(--brand)] whitespace-nowrap">
                      {dateLabel}
                    </p>
                  )}
                </div>

                {item.summary && (
                  <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                    {item.summary}
                  </p>
                )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};
