export const siteConfig = {
  name: 'Osvaro',
  description: 'AI-powered operating systems for UK Immigration firms. Osvaro builds and manages workflows that collect evidence, maintain compliance, and surface operational bottlenecks.',
  url: 'https://osvaro.co.uk',
  email: 'surya@osvaro.co.uk',
  bookingUrl: 'https://calendly.com/surya-osvaro/workflow-diagnostic/',
  cta: {
    primary: 'Book a Workflow Diagnostic',
    secondary: 'Explore the Solutions',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/#products' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: 'mailto:surya@osvaro.co.uk' },
  ],
  products: [
    {
      slug: 'case-readiness-engine',
      name: 'Case Readiness Engine',
      tagline: 'Every file becomes case-ready before a fee earner touches it.',
      description: 'Generate tailored evidence checklists, collect and classify documents, detect exceptions, and deliver review-ready files — without adding caseworkers.',
      promise: 'Reduce document-chasing and file-preparation time by approximately 50–70%.',
      href: '/products/case-readiness-engine',
    },
    {
      slug: 'sponsor-compliance',
      name: 'Sponsor Compliance Command Centre',
      tagline: 'Turn sponsor compliance from an audit panic into a continuously maintained operating system.',
      description: 'Maintain sponsor profiles, track obligations, assign actions, collect evidence, detect discrepancies, and prepare audit packs — continuously.',
      promise: 'Maintain a continuously audit-ready sponsor file and reduce compliance-preparation labour by approximately 40–60%.',
      href: '/products/sponsor-compliance',
    },
    {
      slug: 'operations-control-tower',
      name: 'Immigration Operations Control Tower',
      tagline: 'Know which files are blocked, who owns the next action, and where capacity is leaking.',
      description: 'Monitor active matters, track blocked files, identify bottlenecks, understand workload and capacity, and produce approved client status updates.',
      promise: 'Identify bottlenecks and release approximately 30–50% more capacity from the same team.',
      href: '/products/operations-control-tower',
    },
  ],
} as const;

export type Product = (typeof siteConfig.products)[number];
