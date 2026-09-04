import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

const outcomes = [
  "Less document chasing",
  "Faster file preparation",
  "Fewer missed actions",
  "Clearer ownership",
  "Earlier risk detection",
  "Better visibility across matters",
  "More capacity from the same team",
  "Less last-minute compliance pressure"
];

export function Outcomes() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-display text-foreground mb-6">
            Operational outcomes, not feature lists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="size-6 text-olive-600 shrink-0 mt-0.5" weight="fill" />
              <p className="font-sans font-medium text-charcoal-800 text-lg">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
