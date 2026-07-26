import { CheckCircle2 } from 'lucide-react'

const POINTS = [
  'Equipe própria de desenvolvedores e técnicos certificados',
  'Atendimento humanizado com SLA transparente',
  'Soluções escaláveis, do pequeno negócio à grande operação',
  'Segurança e conformidade em primeiro lugar',
]

export default function About() {
  return (
    <section id="sobre" className="relative bg-brand-900/40 py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm font-semibold text-cyan-glow tracking-wide uppercase">Sobre a STI</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Parceiros de tecnologia, não apenas fornecedores
          </h2>
          <p className="mt-6 text-slate-300 leading-relaxed">
            A STI Soluções em Tecnologia da Informação nasceu para simplificar a
            relação das empresas com a tecnologia. Combinamos experiência técnica
            e visão de negócio para entregar projetos que realmente geram
            resultado — da concepção ao suporte contínuo.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Trabalhamos lado a lado com nossos clientes para entender seus
            desafios e construir soluções sob medida, com transparência e
            compromisso com prazos.
          </p>

          <ul className="mt-8 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-200">
                <CheckCircle2 className="h-5 w-5 text-cyan-glow shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <StatCard value="5+" label="Anos de experiência" />
          <StatCard value="10+" label="Projetos entregues" />
          <StatCard value="10+" label="Clientes ativos" />
          <StatCard value="99,9%" label="Uptime médio" />
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center hover:border-brand-400/40 transition-colors">
      <p className="text-3xl md:text-4xl font-bold text-gradient">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  )
}
