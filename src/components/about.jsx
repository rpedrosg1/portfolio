import { useScrollAnimation } from "@/components/use-scroll-animation"
import { AGE, EMAIL, EXPERIENCE_YEARS } from "@/utils"

const infoRows = [
  { label: "Age", value: String(AGE) },
  { label: "Location", value: "Porto, Portugal" },
  {
    label: "Email",
    value: EMAIL,
    href: "mailto:"+EMAIL,
  },
  {
    label: "Education",
    value: "Bachelor in Software Engineer \u00b7 Universidade Fernando Pessoa",
    href: "https://www.ufp.pt",
  },
  {
    label: "Languages",
    value: "Portuguese (Native) \u00b7 English (Professional)",
  },
]

export function About() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Bio */}
            <div className="space-y-5">
              <p className="leading-relaxed text-muted-foreground">
                I've been working as a Backend Software Engineer at Critical Techworks for {EXPERIENCE_YEARS} years, building and maintaining Java microservices that run across BMW's digital platforms. Most of what I do lives in the backend — APIs, cloud infrastructure, deployments — but I've spent enough time on the frontend to understand the full picture.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                I like working on things where reliability actually counts. Getting a service to work is one thing; keeping it observable, fault-tolerant and easy to change six months later is a different challenge. That's where I tend to focus.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Outside of work I play a lot of basketball. It's my main way to switch off — there's something about a sport that requires full attention that makes it hard to think about anything else.
              </p>
            </div>

            {/* Info Table */}
            <div className="hover-glow-primary rounded-xl border border-border bg-card overflow-hidden transition-all duration-300">
              {infoRows.map((row, idx) => (
                <div
                  key={row.label}
                  className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:gap-6 ${
                    idx < infoRows.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="min-w-[110px] text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {row.label}
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary no-underline transition-colors hover:text-primary/80"
                      style={{ textDecoration: "none" }}
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-foreground">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
