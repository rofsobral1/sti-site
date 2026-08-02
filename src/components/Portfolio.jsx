import { useState } from 'react'
import { ArrowUpRight, Eye } from 'lucide-react'
import ProjectModal from './ProjectModal'
import agendaProLogin from '../assets/agendapro/login.jpg'

const AGENDAPRO = {
  title: 'AgendaPro',
  tag: 'Desenvolvimento Web',
  desc: 'SaaS multi-tenant de agendamento e gestão para pequenos negócios, com agenda pública, catálogo de serviços e faturamento por assinatura.',
  thumbnail: agendaProLogin,
  caseStudy: {
    tag: 'Desenvolvimento Web · SaaS',
    title: 'AgendaPro',
    description:
      'AgendaPro é um SaaS multi-tenant de agendamento e gestão para pequenos negócios — salões, barbearias, clínicas, estúdios, academias, consultórios, pet shops e outros. Donos de negócio se cadastram, montam seu catálogo de serviços e equipe, e passam a receber agendamentos automaticamente: tanto pelos próprios clientes, através de um link público sem necessidade de login, quanto lançados manualmente pela equipe. Em troca, pagam uma assinatura mensal para usar a plataforma.',
    video: '/agendapro/demo-agendapro.webm',
    flow: [
      'Dona/dono do negócio se cadastra em /registrar e ganha 14 dias de teste grátis.',
      'Cadastra serviços (Catálogo), profissionais e os horários de expediente de cada um (Equipe).',
      'Compartilha o link público de agendamento (/agendar/<slug-do-negocio>) com os clientes.',
      'Clientes agendam sozinhos, sem precisar criar conta.',
      'O negócio acompanha tudo pela Agenda, gerencia Clientes e vê métricas no Painel.',
      'Ao final do teste, assina um plano (Faturamento) via Stripe para continuar usando.',
    ],
    stack: [
      {
        category: 'Backend',
        items: [
          'Java 21',
          'Spring Boot 3.5',
          'Spring Security / JWT',
          'Spring Data JPA / Hibernate',
          'Flyway',
          'Validation',
          'Mail',
          'springdoc-openapi',
          'Maven',
          'PostgreSQL',
          'JUnit 5',
          'Mockito',
          'Testcontainers',
        ],
      },
      {
        category: 'Frontend',
        items: ['Angular 19 (standalone, Signals)', 'Angular Material', 'ng2-charts'],
      },
      {
        category: 'Infra',
        items: ['Docker', 'Docker Compose', 'GitHub Actions'],
      },
    ],
  },
}

const OTHER_PROJECTS = [
  {
    title: 'App de Gestão de Estoque',
    tag: 'Mobile',
    desc: 'Aplicativo mobile para controle de estoque em tempo real integrado ao ERP do cliente.',
    gradient: 'from-brand-400/70 to-brand-900',
  },
  {
    title: 'Automação de Atendimento',
    tag: 'Suporte & Automação',
    desc: 'Central de chamados automatizada, reduzindo o tempo médio de resposta em 60%.',
    gradient: 'from-brand-500 to-cyan-glow/40',
  },
]

export default function Portfolio() {
  const [openCase, setOpenCase] = useState(null)

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
          <button
            onClick={() => setOpenCase(AGENDAPRO.caseStudy)}
            className="group text-left rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] hover:border-brand-400/40 transition-colors"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={AGENDAPRO.thumbnail}
                alt={AGENDAPRO.title}
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-950/40 group-hover:bg-brand-950/60 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-medium text-white border border-white/20">
                  <Eye className="h-3.5 w-3.5" />
                  Ver detalhes
                </span>
              </div>
            </div>
            <div className="p-6">
              <span className="text-xs font-medium text-brand-300 uppercase tracking-wide">
                {AGENDAPRO.tag}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">{AGENDAPRO.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{AGENDAPRO.desc}</p>
            </div>
          </button>

          {OTHER_PROJECTS.map((project) => (
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

      {openCase && <ProjectModal project={openCase} onClose={() => setOpenCase(null)} />}
    </section>
  )
}
