import { useScrollAnimation } from "@/components/use-scroll-animation"
import { Rocket, Cloud, RefreshCw, Users } from "lucide-react"

const achievements = [
  {
    icon: Rocket,
    title: "Production Systems",
    description:
      "Architected and maintained production microservices serving BMW's digital platforms—built to stay up, handle load, and be debuggable when something does go wrong.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Led the Azure cloud migration, containerizing services with Docker and deploying on Kubernetes with KEDA auto-scaling to handle variable workloads without manual intervention.",
  },
  {
    icon: RefreshCw,
    title: "CI/CD Automation",
    description:
      "Designed CI/CD pipelines with GitHub Actions that automated testing gates and deployments—improving release efficiency and eliminating the kind of incidents that used to happen on manual deploys.",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description:
      "Led code reviews and Agile ceremonies, kept code quality standards in check, and helped junior developers get up to speed without slowing down the team.",
  },
]

export function Achievements() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="achievements" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Achievements
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A few things I'm proud of from the past few years.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {achievements.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`group rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:bg-primary/[0.02] ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
