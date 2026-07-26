import { Cpu, Mail, Phone, MessageCircle, MapPin } from 'lucide-react'

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23h-4.5V8.25zM8.5 8.25h4.31v2.02h.06c.6-1.13 2.07-2.33 4.26-2.33 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.66c0-1.59-.03-3.63-2.21-3.63-2.22 0-2.56 1.73-2.56 3.51V23h-4.5V8.25z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.78 8.44-4.94 8.44-9.94z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-brand-950 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid sm:grid-cols-2 gap-10">
        <div>
          <a href="#top" className="flex items-center gap-2 w-fit">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-cyan-glow">
              <Cpu className="h-4 w-4 text-brand-950" strokeWidth={2.5} />
            </span>
            <span className="font-semibold text-white">
              STI <span className="text-brand-300 font-normal">Soluções</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-slate-400 max-w-xs">
            Soluções em Tecnologia da Informação para o crescimento seguro do seu negócio.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <SocialIcon icon={LinkedinIcon} href="#" />
            <SocialIcon icon={InstagramIcon} href="#" />
            <SocialIcon icon={FacebookIcon} href="#" />
          </div>
        </div>

        <div className="sm:justify-self-end">
          <p className="text-sm font-semibold text-white">Contato</p>
          <div className="mt-4 space-y-3">
            <FooterContact icon={Mail} label="contato@stisolucoes.com.br" href="mailto:contato@stisolucoes.com.br" />
            <FooterContact icon={Phone} label="(21) 98183-4273" href="tel:+5521981834273" />
            <FooterContact icon={MessageCircle} label="WhatsApp: (21) 98183-4273" href="https://wa.me/5521981834273" />
            <FooterContact icon={MapPin} label="Rio de Janeiro, RJ — Brasil" />
          </div>
        </div>
      </div>

      <p className="mt-12 text-sm text-slate-500 text-center">
        © {year} STI Soluções em Tecnologia da Informação. Todos os direitos reservados.
      </p>
    </footer>
  )
}

function FooterContact({ icon: Icon, label, href }) {
  const content = (
    <>
      <Icon className="h-4 w-4 text-brand-300 shrink-0" />
      <span>{label}</span>
    </>
  )

  const className = 'flex items-center gap-2.5 text-sm text-slate-400 hover:text-cyan-glow transition-colors w-fit'

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {content}
      </a>
    )
  }

  return <div className={className}>{content}</div>
}

function SocialIcon({ icon: Icon, href }) {
  return (
    <a
      href={href}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-colors"
    >
      <Icon className="h-4 w-4" strokeWidth={1.6} />
    </a>
  )
}
