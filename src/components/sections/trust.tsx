import { FileText, ShieldCheck, Path, BellRinging, Eye, LockKey, ChartBar, ArrowsClockwise } from '@phosphor-icons/react/dist/ssr';

const principles = [
  {
    title: "Human-reviewed legal decisions",
    description: "The system prepares; lawyers decide.",
    icon: FileText
  },
  {
    title: "Firm-approved workflows",
    description: "Your standard operating procedures encoded into software.",
    icon: ShieldCheck
  },
  {
    title: "Configurable escalation rules",
    description: "Clear paths for complex or delayed cases.",
    icon: Path
  },
  {
    title: "Clear exception handling",
    description: "Immediate alerts when requirements aren't met.",
    icon: BellRinging
  },
  {
    title: "Audit trails",
    description: "Comprehensive history of every action and document.",
    icon: Eye
  },
  {
    title: "Controlled access",
    description: "Strict role-based permissions and data segregation.",
    icon: LockKey
  },
  {
    title: "Transparent reporting",
    description: "Real-time visibility into workflow bottlenecks.",
    icon: ChartBar
  },
  {
    title: "Continuous improvement",
    description: "Systems evolve alongside your changing requirements.",
    icon: ArrowsClockwise
  }
];

export function Trust() {
  return (
    <section className="section-padding bg-charcoal-900">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-display text-sand-50 mb-6">
            Built for firms that take governance seriously
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div 
                key={index} 
                className="bg-charcoal-800 rounded-xl p-6 border border-charcoal-700 flex flex-col"
              >
                <div className="mb-4">
                  <Icon className="size-8 text-sand-400" weight="duotone" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-sand-50 mb-2">
                  {principle.title}
                </h3>
                <p className="font-sans text-sm text-sand-300">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
