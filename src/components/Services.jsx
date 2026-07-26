import { Code2, Cloud, ShieldCheck, Headset, Database } from 'lucide-react'

const SERVICES = [
  {
    icon: Code2,
    title: 'Desenvolvimento de Software',
    desc: 'Sistemas web, mobile e integrações sob medida, alinhados aos processos da sua empresa.',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    desc: 'Migração e gestão de ambientes em nuvem com foco em custo, performance e disponibilidade.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança da Informação',
    desc: 'Políticas, backup, firewall e proteção contra ameaças para manter seus dados seguros.',
  },
  {
    icon: Headset,
    title: 'Suporte Técnico',
    desc: 'Atendimento remoto e presencial com SLA definido para manter sua operação sempre no ar.',
  },
  {
    icon: Database,
    title: 'Consultoria em TI',
    desc: 'Diagnóstico e plano estratégico de tecnologia para acelerar o crescimento do seu negócio.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="relative bg-brand-950 py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-cyan-glow tracking-wide uppercase">Serviços</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Tecnologia completa, do código à infraestrutura
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Atuamos em todas as camadas da tecnologia da sua empresa, com equipe
            própria e processos maduros.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] hover:border-brand-400/40 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 group-hover:from-brand-400 group-hover:to-cyan-glow transition-colors">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
