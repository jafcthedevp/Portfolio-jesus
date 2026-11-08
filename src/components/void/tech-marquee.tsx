const techItems = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "PYTHON",
  "AWS",
  "POSTGRESQL",
  "MYSQL",
  "DYNAMODB",
  "NEST.JS",
  "REACT NATIVE",
  "DOCKER",
  "NODE.JS",
  "EXPRESS.JS",
  "SUPABASE",
]

const tools = [
  "AWS LAMBDA",
  "API GATEWAY",
  "S3",
  "TEXTRACT",
  "IAM",
  "SECRETS MANAGER",
  "SERVERLESS FRAMEWORK",
  "ODOO",
  "WHATSAPP API",
  "CLAUDE API",
  "GIT",
  "SWAGGER",
  "VITEST",
  "PLAYWRIGHT",
]

function TechnologyList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="border-t border-white/10 pt-8">
      <h3 className="font-mono text-xs tracking-widest text-muted-foreground mb-6">{label}</h3>
      <ul className="flex flex-wrap gap-x-8 gap-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="technology-glow cursor-default font-sans text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white/85"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section className="relative py-24 px-8 md:px-12 md:py-32" aria-labelledby="technical-arsenal-title">
      <h2 id="technical-arsenal-title" className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-12">05 — TECHNICAL ARSENAL</h2>
      <div className="space-y-12">
        <TechnologyList label="DESARROLLO Y DATOS" items={techItems} />
        <TechnologyList label="CLOUD, INTEGRACIONES Y CALIDAD" items={tools} />
      </div>
    </section>
  )
}
