const steps = [
  {
    title: "Diagnose",
    description: "We map your current workflow and identify operational friction."
  },
  {
    title: "Map",
    description: "Document every step, handoff, and decision point in the process."
  },
  {
    title: "Configure",
    description: "Build the approved workflow with your templates, rules, and escalation logic."
  },
  {
    title: "Launch",
    description: "Deploy the first automation on one priority workflow."
  },
  {
    title: "Monitor",
    description: "Track exceptions, outcomes, and team feedback in real time."
  },
  {
    title: "Improve",
    description: "Continuously optimise as case patterns and requirements change."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-sand-50">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-display text-foreground mb-6">
            A practical path to operational clarity
          </h2>
        </div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[28px] left-8 right-8 h-px bg-olive-200 z-0"></div>
          
          {/* Mobile connecting line */}
          <div className="lg:hidden absolute top-8 bottom-8 left-[28px] w-px bg-olive-200 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex lg:flex-col gap-6 lg:gap-8 items-start lg:items-center text-left lg:text-center group">
                <div className="size-14 rounded-full bg-sand-50 border-2 border-olive-200 flex items-center justify-center font-serif text-xl text-olive-700 shrink-0 group-hover:bg-olive-50 group-hover:border-olive-400 transition-colors shadow-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-lg text-charcoal-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-charcoal-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
