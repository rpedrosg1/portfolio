import { useScrollAnimation } from "@/components/use-scroll-animation"

const responsibilities = [
  "Architected and delivered multiple production-grade RESTful APIs in Java & Quarkus, acting as critical integration layers across enterprise systems—handling thousands of daily requests with high availability.",
  "Established team-wide CI/CD standards using GitHub Actions, with automated testing gates and deployment workflows that improved release efficiency and took production incidents off the table.",
  "Led the Azure cloud infrastructure migration—containerizing services with Docker and orchestrating deployments on Kubernetes with KEDA auto-scaling, improving resilience and cutting infrastructure costs.",
  "Drove full-stack integration between Angular frontends and Java microservices, owning API contracts and resolving cross-system issues that were blocking feature delivery.",
  "Participated in code reviews and Agile ceremonies, helping maintain code quality standards and supporting junior developers on the team.",
]

const techStack = [
  "Java",
  "Quarkus",
  "Azure",
  "GitHub Actions",
  "Docker",
  "Kubernetes",
  "KEDA",
  "Angular",
  "REST APIs",
  "Prometheus",
  "Grafana",
  "Scrum",
]

export function Experience() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="experience" className="bg-background-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Experience
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Backend engineering at scale for the automotive industry.
            </p>
          </div>

          {/* Experience Card */}
          <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-card to-primary/[0.02] p-6 sm:p-8">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Critical Techworks
                </h3>
                <p className="mt-1 text-lg text-primary">Backend Software Developer</p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                {"Sep 2022 \u2014 Present"}
              </span>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {"Key Responsibilities & Achievements"}
              </h4>
              <ul className="space-y-3">
                {responsibilities.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex gap-3 transition-all duration-500 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${300 + idx * 100}ms` }}
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
