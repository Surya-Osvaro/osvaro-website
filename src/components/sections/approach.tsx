import { Robot, ShieldCheck, UserCheck } from '@phosphor-icons/react/dist/ssr';

const approaches = [
  {
    title: "AI Agents & Automation",
    description: "Structured AI agents handle document collection, classification, reminders, and exception detection.",
    icon: Robot,
  },
  {
    title: "Firm-Approved Workflows",
    description: "Every workflow follows your firm's approved rules, templates, escalation policies, and checklists.",
    icon: ShieldCheck,
  },
  {
    title: "Human Review & Control",
    description: "Legal conclusions remain lawyer-reviewed. The system surfaces work — it doesn't replace judgment.",
    icon: UserCheck,
  }
];

export function Approach() {
  return (
    <section className="section-padding bg-sand-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-serif text-display text-foreground mb-6">
            How Osvaro works
          </h2>
          <p className="font-sans text-body-lg text-charcoal-500">
            Osvaro doesn't remove professional judgment. It removes the repetitive operational friction around it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {approaches.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="size-16 rounded-2xl bg-olive-100 text-olive-700 flex items-center justify-center mb-8 shadow-sm">
                  <Icon className="size-8" weight="duotone" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-charcoal-900 mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-charcoal-500 text-body">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
