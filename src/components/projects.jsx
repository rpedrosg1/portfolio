import { useScrollAnimation } from "@/components/use-scroll-animation"
import { ExternalLink, Cpu, Gamepad2, Car, MapPin, Plane } from "lucide-react"

const featuredProject = {
  icon: Cpu,
  title: "AI4RealAg",
  featured: true,
  tech: ["Flutter", "Dart", "FastAPI", "PostgreSQL", "AWS S3", "React", "AI/ML"],
  description:
    "My bachelor's final project, built in collaboration with Siscog. A POC exploring what an AI-powered agriculture platform could look like — a cross-platform mobile app that consumed IoT sensor data and surfaced crop insights for farmers. The work fed into Siscog's own project, which has since grown into something with real impact on the ground for farmers.",
  links: [
    { label: "View Presentation", href: "/documents/AI4RealAg.pptx", download: true },
    { label: "Siscog", href: "https://www.siscog.pt/pt/", external: true },
    { label: "Expresso Article", href: "https://expresso.pt/iniciativaseprodutos/mais-europa/2025-01-10-ja-e-possivel-prever-o-ciclo-de-crescimento-de-uma-planta-detetar-doencas-e-avaliar-o-nivel-de-agua-a-tecnologia-ao-servico-da-agricultura-094c3a02", external: true },
  ],
}

const projects = [
  {
    icon: Gamepad2,
    title: "Distributed Multiplayer Game Server",
    tech: ["Java", "RMI", "RabbitMQ", "Distributed Systems"],
    description:
      "Highly available distributed system for multiplayer gaming with automatic failover. Implemented Round Robin load balancing and state sync protocols to ensure zero data loss during node failures.",
  },
  {
    icon: Car,
    title: "StandOnline \u2014 Vehicle Marketplace",
    tech: ["PHP", "Laravel", "MySQL", "MVC"],
    description:
      "Full-featured vehicle marketplace with user auth, transactional emails, advanced search, and payment integration. Built on MVC architecture with a focus on being production-ready.",
  },
  {
    icon: MapPin,
    title: "GeoCaching \u2014 Algorithmic Pathfinding",
    tech: ["Java", "JavaFX", "Algorithms"],
    description:
      "Desktop app implementing Dijkstra's shortest-path algorithm for optimal route calculation between geocache locations, with interactive map visualization.",
  },
  {
    icon: Plane,
    title: "Travel Booking System",
    tech: ["C", "Data Structures", "Memory Management"],
    description:
      "Airbnb-inspired booking system in C, focused on low-level programming—manual memory management, pointer arithmetic, and building robust data structures from scratch.",
  },
]

export function Projects() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="projects" className="bg-background-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Projects
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A selection of projects showcasing my range from backend systems to full-stack applications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Featured Project */}
            <div
              className={`lg:col-span-2 rounded-xl border border-primary/20 bg-gradient-to-br from-card to-primary/[0.03] p-6 transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <featuredProject.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {featuredProject.title}
                </h3>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  Featured
                </span>
              </div>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {featuredProject.tech.map((t) => (
                  <span key={t} className="rounded-md border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>

            {/* Other Projects */}
            {projects.map((project, idx) => {
              const Icon = project.icon
              return (
                <div
                  key={project.title}
                  className={`rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/30 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mb-1.5 font-serif text-base font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="mb-3 flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-medium text-muted-foreground">
                        {t}{project.tech.indexOf(t) < project.tech.length - 1 ? " \u00b7" : ""}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {project.description}
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
