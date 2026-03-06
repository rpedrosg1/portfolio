import { useScrollAnimation } from "@/components/use-scroll-animation"
import { Mail, Linkedin, Github, ArrowRight, Download, MessageCircle } from "lucide-react"
import {EMAIL} from "@/utils";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: "mailto:"+EMAIL,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ruigoncalves",
    href: "https://www.linkedin.com/in/rui-gon%C3%A7alves-1087891a2/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/rpedrosg1",
    href: "https://github.com/rpedrosg1",
  },
]

export function Contact() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="contact" className="bg-background-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              {"Get in Touch"}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: CTA */}
            <div className="space-y-6">
              <p className="max-w-md leading-relaxed text-muted-foreground">
                {"I\u2019m currently open to new opportunities and would love to hear about interesting projects, roles, or collaborations. Whether you have a question or just want to say hello, feel free to reach out."}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:rpedrosg1@hotmail.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" />
                  Get in Touch
                </a>
                <a
                  href="/documents/RuiGoncalves.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </div>

            {/* Right: Contact Cards */}
            <div className="space-y-3">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-500 hover:border-primary/30 hover:bg-primary/[0.02] ${
                      isVisible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <span className="block text-xs font-medium text-muted-foreground">
                        {method.label}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {method.value}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
