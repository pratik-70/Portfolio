import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { SkillGroup } from "../types/portfolio";
import * as SiIcons from "react-icons/si";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const SKILL_ICON_COLORS: Record<string, string> = {
  SiHtml5: "#E34F26",
  SiCss3: "#1572B6",
  SiJavascript: "#F7DF1E",
  SiNodedotjs: "#339933",
  SiExpress: "#000000",
  SiJava: "#007396",
  SiPython: "#3776AB",
  SiDocker: "#2496ED",
  SiKubernetes: "#326CE5",
  SiJenkins: "#D24939",
  SiTerraform: "#7B42BC",
  SiAmazonaws: "#FF9900",
  SiMongodb: "#47A248",
  SiMysql: "#4479A1",
  SiGit: "#F05032",
  SiGithub: "#181717",
  SiGitlab: "#FC6D26",
};

export const SkillsList: React.FC<{
  skills?: SkillGroup[];
  isBar?: boolean;
}> = ({ skills = [] }) => {
  const groupTitles = useMemo(
    () => skills.map((g) => g.title ?? "Other"),
    [skills],
  );

  const [selectedTitles, setSelectedTitles] = useState<string[]>(["all"]);
  const [expanded, setExpanded] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleTitle = (title: string) => {
    if (title === "all") {
      setSelectedTitles(["all"]);
      return;
    }
    setSelectedTitles((prev) => {
      const withoutAll = prev.filter((t) => t !== "all");
      if (withoutAll.includes(title)) {
        const next = withoutAll.filter((t) => t !== title);
        return next.length === 0 ? ["all"] : next;
      }
      return [...withoutAll, title];
    });
  };

  const filteredGroups = useMemo(() => {
    if (selectedTitles.includes("all")) return skills;
    return skills.filter((g) => selectedTitles.includes(g.title ?? "Other"));
  }, [skills, selectedTitles]);

  const getCount = (title: string) => {
    if (title === "all") return skills.flatMap((g) => g.skills ?? []).length;
    const found = skills.find((g) => g.title === title);
    return found ? (found.skills ?? []).length : 0;
  };

  // collapse sizing
  const rowHeight = 120;
  const maxRowsCollapsed = 3;
  const collapsedPx = rowHeight * maxRowsCollapsed;
  const maxHeight = `${collapsedPx}px`;
  const totalSkillCount = skills.flatMap((g) => g.skills ?? []).length;

  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) {
      setHasOverflow(false);
      return;
    }
    const check = () => {
      setHasOverflow(el.scrollHeight > collapsedPx);
    };
    check();
    const ro = new ResizeObserver(() => check());
    ro.observe(el);
    const onResize = () => check();
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [filteredGroups, collapsedPx, selectedTitles, totalSkillCount, expanded]);

  useEffect(() => setExpanded(false), [selectedTitles]);

  // If no overflow, collapsedHeightTarget is "auto" (so no empty space).
  const collapsedHeightTarget = hasOverflow ? maxHeight : "auto";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => toggleTitle("all")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleTitle("all");
            }
          }}
          aria-pressed={selectedTitles.includes("all")}
          className={`px-3 py-1 rounded-full text-sm border transition select-none ${
            selectedTitles.includes("all")
              ? "bg-[var(--brand)] text-white border-[var(--brand)]"
              : "bg-[var(--surface)] text-[var(--text)] border-[var(--border)] hover:bg-[var(--border)]/30"
          }`}
        >
          All ({getCount("all")})
        </button>

        {groupTitles.map((t) => {
          const active = selectedTitles.includes(t);
          return (
            <button
              key={t}
              onClick={() => toggleTitle(t)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleTitle(t);
                }
              }}
              aria-pressed={active}
              className={`px-3 py-1 rounded-full text-sm border transition select-none ${
                active
                  ? "bg-[var(--brand)] text-white border-[var(--brand)]"
                  : "bg-[var(--surface)] text-[var(--text)] border-[var(--border)] hover:bg-[var(--border)]/30"
              }`}
            >
              {t} ({getCount(t)})
            </button>
          );
        })}
      </div>

      {/* key change: only force the collapsed maxHeight when hasOverflow === true.
          Otherwise use "auto" to avoid empty space. */}
      <motion.div
        animate={{ height: expanded ? "auto" : collapsedHeightTarget }}
        transition={{ duration: 0.45 }}
        className="overflow-hidden"
      >
        <motion.div
          key={selectedTitles.join("-")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="space-y-6"
          ref={contentRef}
        >
          {filteredGroups.map((group) => {
            const groupTitle = group.title ?? "Other";
            const groupSkills = group.skills ?? [];
            return (
              <section
                key={groupTitle}
                aria-labelledby={`skills-${groupTitle}`}
                className=""
              >
                <h3
                  id={`skills-${groupTitle}`}
                  className="text-sm font-semibold text-[var(--brand)] mb-3 text-center"
                >
                  {groupTitle}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
                  {groupSkills.map((s) => {
                    const Icon = SiIcons[s.icon as keyof typeof SiIcons];
                    const iconColor = s.icon
                      ? SKILL_ICON_COLORS[s.icon] ?? "var(--brand)"
                      : "var(--brand)";
                    return (
                      <motion.div
                        key={s.name}
                        whileHover={{ y: -6 }}
                        className="flex flex-col items-center gap-2 transition duration-300 cursor-default text-[var(--muted)] hover:text-[var(--text)] text-center"
                      >
                        <div className="w-16 h-16 rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center shadow-sm">
                          {Icon ? (
                            <Icon
                              className="w-8 h-8"
                              style={{ color: iconColor }}
                            />
                          ) : (
                            <span className="text-lg font-semibold text-[var(--brand)]">
                              {s.name.charAt(0)}
                            </span>
                          )}
                        </div>

                        <div>
                          <div className="font-medium text-sm">{s.name}</div>
                          {s.note ? (
                            <div className="text-xs text-[var(--muted)] mt-1">
                              {s.note}
                            </div>
                          ) : null}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </motion.div>
      </motion.div>

      {/* show expand control only when content actually overflows or when expanded */}
      {(hasOverflow || expanded) && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="flex items-center gap-2 px-3 py-2 rounded-full cursor-pointer border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--border)]/30 text-[var(--text)] transition"
            aria-expanded={expanded}
          >
            {expanded ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
            <span className="text-sm">
              {expanded ? "Show less" : "Show more"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SkillsList;
