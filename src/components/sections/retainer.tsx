const changes = [
  "Case patterns change",
  "Staff change",
  "Requirements change",
  "UKVI guidance changes",
  "Bottlenecks appear",
  "Reporting needs change"
];

export function Retainer() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-4xl text-foreground mb-6">
            Your operating system evolves with your firm
          </h2>
          <p className="font-sans text-lg text-charcoal-600">
            Technology decays if it isn't maintained. Osvaro operates on a continuous maintenance model because operational realities are never static.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 max-w-4xl">
          {changes.map((change, index) => (
            <div key={index} className="flex items-center gap-3 py-3 border-b border-charcoal-100">
              <span className="size-2 rounded-full bg-olive-500 shrink-0"></span>
              <span className="font-sans font-medium text-charcoal-800">{change}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
