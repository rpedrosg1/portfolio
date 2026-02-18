import { useScrollAnimation } from "@/components/use-scroll-animation"

const categories = [
  {
    name: "Backend Engineering",
    skills: ["Java", "Quarkus", "REST APIs", "SQL"],
  },
  {
    name: "Architecture & Design",
    skills: ["Microservices", "Distributed Systems", "Event-Driven"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["Azure", "Kubernetes", "Docker", "KEDA", "GitHub Actions", "CI/CD", "Helm"],
  },
  {
    name: "Observability",
    skills: ["Prometheus", "Grafana", "Alerting"],
  },
  {
    name: "Frontend",
    skills: ["Angular", "TypeScript"],
  },
  {
    name: "Engineering Practices",
    skills: ["Git", "Scrum", "Testing (JUnit, E2E)", "Algorithms"],
  },
]

export function Skills() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Technical Skills
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Technologies and tools I work with to build production-grade backend systems and cloud infrastructure.
            </p>
          </div>

          <div className="space-y-10">
            {categories.map((cat, catIdx) => (
              <div
                key={cat.name}
                className={`transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                style={{ transitionDelay: `${catIdx * 100}ms` }}
              >
                {/* Category Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-6 w-1 rounded-full bg-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    {cat.name}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
