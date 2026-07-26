import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Portal Corporativo Financeiro',
    tag: 'Desenvolvimento Web',
    desc: 'Plataforma interna para gestão de processos financeiros com dashboards em tempo real.',
    gradient: 'from-brand-600 to-brand-900',
  },
  {
    title: 'Migração para Nuvem Híbrida',
    tag: 'Cloud & Infraestrutura',
    desc: 'Migração de data center on-premise para ambiente híbrido, reduzindo custos em 35%.',
    gradient: 'from-cyan-glow/60 to-brand-800',
  },
  {
    title: 'App de Gestão de Estoque',
    tag: 'Mobile',
    desc: 'Aplicativo mobile para controle de estoque em tempo real integrado ao ERP do cliente.',
    gradient: 'from-brand-400/70 to-brand-900',
  },
  {
    title: 'Hardening de Segurança',
    tag: 'Segurança da Informação',
    desc: 'Implementação de políticas de segurança e monitoramento contínuo contra ameaças.',
    gradient: 'from-brand-700 to-brand-950',
  },
  {
    title: 'Automação de Atendimento',
    tag: 'Suporte & Automação',
    desc: 'Central de chamados automatizada, reduzindo o tempo médio de resposta em 60%.',
    gradient: 'from-brand-500 to-cyan-glow/40',
  },
  {
    title: 'Rede Corporativa Multi-filial',
    tag: 'Infraestrutura de TI',
    desc: 'Projeto e implantação de rede segura conectando 8 filiais em tempo real.',
    gradient: 'from-brand-800 to-brand-600',
  },
]

export default function Portfolio() {
  return (
    <section id="projetos" className="relative bg-brand-950 py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-cyan-glow tracking-wide uppercase">Projetos</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Alguns trabalhos que já entregamos
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Uma amostra de projetos reais que ajudaram nossos clientes a crescer
            com mais eficiência e segurança.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] hover:border-brand-400/40 transition-colors"
            >
              <div className={`relative h-40 bg-gradient-to-br ${project.gradient} bg-grid`}>
                <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-brand-950/0 transition-colors" />
                <ArrowUpRight className="absolute bottom-3 right-3 h-5 w-5 text-white/80" />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-brand-300 uppercase tracking-wide">
                  {project.tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
