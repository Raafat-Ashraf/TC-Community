"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { ProgramPhase } from "@/content/recovery";

export default function ProgramPhaseAccordion({ phases }: { phases: ProgramPhase[] }) {
  const [openPhase, setOpenPhase] = useState<number>(1);

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {phases.map((phase) => {
        const isOpen = openPhase === phase.phase;
        return (
          <div
            key={phase.phase}
            className={clsx(
              "overflow-hidden rounded-2xl border bg-white transition-shadow",
              isOpen ? "border-gold-300 shadow-md" : "border-cream-200 shadow-sm"
            )}
          >
            <button
              type="button"
              className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-cream-50"
              aria-expanded={isOpen}
              onClick={() => setOpenPhase(isOpen ? 0 : phase.phase)}
            >
              <span
                className={clsx(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold transition-colors",
                  isOpen ? "bg-gold-500 text-navy-950" : "bg-navy-950 text-gold-300"
                )}
              >
                {phase.phase}
              </span>
              <span className="flex-1 font-bold text-navy-950">{phase.title}</span>
              <span
                className={clsx(
                  "shrink-0 text-xl text-gold-600 transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 border-t border-cream-200 px-6 py-5 text-charcoal-700">
                    <p>{phase.description}</p>
                    {phase.keyTopics && (
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-gold-600">
                          Key Topics
                        </p>
                        <ul className="mt-2 list-inside list-disc space-y-1">
                          {phase.keyTopics.map((topic) => (
                            <li key={topic}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {phase.recoveryTools && (
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-gold-600">
                          Recovery Tools
                        </p>
                        <ul className="mt-2 list-inside list-disc space-y-1">
                          {phase.recoveryTools.map((tool) => (
                            <li key={tool}>{tool}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {phase.psychologicalTraps && (
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-gold-600">
                          Psychological Traps Addressed
                        </p>
                        <ul className="mt-2 list-inside list-disc space-y-1">
                          {phase.psychologicalTraps.map((trap) => (
                            <li key={trap}>{trap}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="border-t border-cream-200 pt-4 font-medium text-navy-950">
                      {phase.closing}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
