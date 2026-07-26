import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'A STI reestruturou toda nossa infraestrutura de rede e reduziu drasticamente as quedas de sistema. Suporte rápido e muito profissional.',
    name: 'Marina Alves',
    role: 'Diretora de Operações, Grupo Vetta',
  },
  {
    quote:
      'O sistema desenvolvido pela equipe atendeu exatamente o que precisávamos, dentro do prazo combinado. Recomendo sem ressalvas.',
    name: 'Carlos Eduardo Lima',
    role: 'CEO, Comércio Lima & Filhos',
  },
  {
    quote:
      'Migramos para a nuvem com a STI e hoje temos mais segurança, performance e economia. Parceria de longo prazo.',
    name: 'Fernanda Rocha',
    role: 'Gerente de TI, Rocha Logística',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-brand-900/40 py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-cyan-glow tracking-wide uppercase">Depoimentos</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Quem confia na STI
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 flex flex-col hover:border-brand-400/40 transition-colors"
            >
              <Quote className="h-7 w-7 text-brand-400" />
              <blockquote className="mt-4 text-slate-200 leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
