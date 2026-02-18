import { MessageCircle, Briefcase } from "lucide-react"
import { EXPERIENCE_YEARS } from "@/utils"

const strengths = [
  { title: "Backend Architecture", desc: "Java, Quarkus, REST APIs" },
  { title: "Cloud & DevOps", desc: "Azure, Docker, Kubernetes, KEDA" },
  { title: "Full Ownership", desc: "Design to deployment to monitoring" },
  { title: "Production Experience", desc: `${EXPERIENCE_YEARS} years at Critical Techworks` },
]

const stats = [
  { value: EXPERIENCE_YEARS, label: "Years in production" },
  { value: "Java", label: "Primary stack" }
]

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16" id="hero">
      {/* Background grid and glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        {/* Content */}
        <div className="flex-1 space-y-8">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Open to opportunities</span>
          </div>

          {/* Name */}
          <div className="animate-fade-in-up animation-delay-100 space-y-1">
            <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Rui
            </h1>
            <h1 className="font-serif text-5xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
              {"Gon\u00e7alves"}
            </h1>
          </div>

          {/* Role */}
          <p className="animate-fade-in-up animation-delay-200 text-xl font-medium text-muted-foreground sm:text-2xl">
            Backend Software Engineer
          </p>

          {/* Pitch */}
          <p className="animate-fade-in-up animation-delay-200 max-w-xl leading-relaxed text-muted-foreground">
            I build backend systems and cloud infrastructure that hold up under real-world conditions.
            {" "}{EXPERIENCE_YEARS} years at Critical Techworks shipping Java microservices for BMW—I care about
            clean architecture, good observability, and making sure things don't break at 3am.
          </p>

          {/* Core Strengths */}
          <div className="animate-fade-in-up animation-delay-300 rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Core Strengths
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {strengths.map((s) => (
                <div key={s.title} className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">{s.title}</span>
                  <span className="text-xs text-muted-foreground">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up animation-delay-300 flex flex-wrap gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-primary">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-400 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              {"Let\u2019s Talk"}
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Briefcase className="h-4 w-4" />
              View Experience
            </a>
          </div>
        </div>

        {/* Photo (desktop only) */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-2 border-primary/30">
              <img
                src="/images/rui-portrait.png"
                alt="Rui Goncalves - Backend Software Engineer"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
