import { Building2, Landmark, ShieldCheck } from 'lucide-react'

const OTHER_CLIENTS = ['CNP Seguradora', 'BRT Sorocaba']

const FEATURED_CLIENTS = [
  {
    name: 'Secretaria de Fazenda do Estado do Rio de Janeiro',
    tag: 'Setor Público',
    icon: Landmark,
    description:
      'Desenvolvimento e manutenção das aplicações GCT Portal de Pagamentos e GCT Recolhimento Especial, responsáveis pela emissão do DARJ (Documento de Arrecadação do Estado do Rio de Janeiro). O trabalho incluiu correção de bugs em produção, implementação de melhorias de funcionalidades e planejamento das atividades diárias conforme prazos definidos em equipe, sempre priorizando comunicação transparente e entregas de excelência.',
    tech: [
      'Java',
      'JavaScript',
      'JSP',
      'Maven',
      'Oracle',
      'GitLab',
      'JasperSoft Studio (iReport)',
      'OpenShift / WebLogic',
      'JMeter',
    ],
  },
  {
    name: 'Bradesco Seguros',
    tag: 'Seguros',
    icon: ShieldCheck,
    description:
      'Desenvolvimento de soluções para atender às demandas dos usuários do Bradesco Seguros, com planejamento de metas e cronogramas para garantir a entrega dos projetos dentro do prazo. Atuação no centro de custo WSCB, com análise de vulnerabilidades apontadas em relatórios Fortify e implementação de correções e melhorias de código. Participação também na migração de aplicações para WAS9 e DataPower, sempre priorizando comunicação transparente com o cliente.',
    tech: ['Java (1.6, 1.8)', 'WebSphere', 'JSP', 'Struts', 'WAS9', 'DataPower', 'Fortify'],
  },
]

export default function Clients() {
  return (
    <section id="clientes" className="relative bg-brand-900/40 py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-cyan-glow tracking-wide uppercase">Clientes</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Empresas que confiam na STI
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Atendemos organizações públicas e privadas de diferentes portes e
            segmentos.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {FEATURED_CLIENTS.map(({ name, tag, icon: Icon, description, tech }) => (
            <div
              key={name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-brand-400/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800">
                  <Icon className="h-6 w-6 text-white" />
                </span>
                <div>
                  <p className="text-xs font-medium text-brand-300 uppercase tracking-wide">{tag}</p>
                  <h3 className="text-lg font-semibold text-white">{name}</h3>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-300 leading-relaxed">{description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="grid sm:grid-cols-2 gap-6">
            {OTHER_CLIENTS.map((name) => (
              <div
                key={name}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-brand-400/40 transition-colors"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800">
                  <Building2 className="h-6 w-6 text-white" />
                </span>
                <span className="text-lg font-semibold text-white">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
