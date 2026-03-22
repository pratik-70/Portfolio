import React from "react";
import type { DateRange, Hackathon, Training } from "../types/portfolio";

const formatDate = (date?: string | DateRange): string => {
  if (!date) return "";
  if (typeof date === "string") return date;

  const start = date.start ?? "";
  if (date.present) return `${start} - Present`;
  if (date.end) return `${start} - ${date.end}`;
  return start;
};

const EmptyState: React.FC<{ label: string }> = ({ label }) => (
  <div className="rounded-xl border border-dashed border-[var(--border)] p-5 text-sm text-[var(--muted)]">
    No {label} added yet.
  </div>
);

export const TrainingHackathonsSection: React.FC<{
  trainings?: Training[];
  hackathons?: Hackathon[];
}> = ({ trainings = [], hackathons = [] }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <section>
        <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Training</h3>
        <div className="space-y-4">
          {trainings.length === 0 ? (
            <EmptyState label="training entries" />
          ) : (
            trainings.map((item, index) => {
              const dateLabel = formatDate(item.date);
              return (
                <article
                  key={item.id ?? `${item.title}-${index}`}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  {item.image && (
                    <div className="mb-4 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]/40 aspect-[4/3]">
                      <img
                        src={item.image}
                        alt={`${item.title} preview`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <h4 className="text-base font-semibold text-[var(--text)] leading-snug">
                    {item.title}
                  </h4>
                  {(item.provider || dateLabel) && (
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {item.provider}
                      {item.provider && dateLabel ? " • " : ""}
                      {dateLabel}
                    </p>
                  )}
                  {item.summary && (
                    <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                      {item.summary}
                    </p>
                  )}
                  {item.skills && item.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium px-2 py-1 rounded-full bg-[var(--background)] border border-[var(--border)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-3 text-sm font-medium text-[var(--brand)] hover:underline"
                    >
                      View details
                    </a>
                  )}
                </article>
              );
            })
          )}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Hackathons</h3>
        <div className="space-y-4">
          {hackathons.length === 0 ? (
            <EmptyState label="hackathon entries" />
          ) : (
            hackathons.map((item, index) => {
              const dateLabel = formatDate(item.date);
              return (
                <article
                  key={item.id ?? `${item.name}-${index}`}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  {item.image && (
                    <div className="mb-4 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]/40 aspect-[4/3]">
                      <img
                        src={item.image}
                        alt={`${item.name} preview`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <h4 className="text-base font-semibold text-[var(--text)] leading-snug">
                    {item.name}
                  </h4>
                  {(item.organizer || dateLabel) && (
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {item.organizer}
                      {item.organizer && dateLabel ? " • " : ""}
                      {dateLabel}
                    </p>
                  )}
                  {item.result && (
                    <p className="mt-2 text-sm font-medium text-[var(--text)]">
                      {item.result}
                    </p>
                  )}
                  {item.summary && (
                    <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                      {item.summary}
                    </p>
                  )}
                  {item.tech && item.tech.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-2 py-1 rounded-full bg-[var(--background)] border border-[var(--border)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-3 text-sm font-medium text-[var(--brand)] hover:underline"
                    >
                      View details
                    </a>
                  )}
                </article>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
};
