import { RecoveryStory } from "@/lib/types";

export default function StoryDisplay({ story }: { story: RecoveryStory }) {
  return (
    <article className="rounded-2xl border border-cream-200 bg-white p-8">
      <h2 className="text-2xl font-bold text-navy-950">{story.title}</h2>
      <div className="mt-6 space-y-6">
        {story.sections.map((section) => (
          <div key={section.heading}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-600">
              {section.heading}
            </h3>
            <div className="prose-body mt-2 text-charcoal-700">
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 rounded-xl bg-cream-100 p-6 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
            Time in Recovery
          </p>
          <p className="mt-1 font-medium text-navy-950">{story.currentJourney.timeInRecovery}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
            Current Stage
          </p>
          <p className="mt-1 font-medium text-navy-950">{story.currentJourney.currentStage}</p>
        </div>
      </div>
    </article>
  );
}
