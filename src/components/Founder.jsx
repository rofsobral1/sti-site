import { CheckCircle2 } from 'lucide-react'
import rodrigoPhoto from '../assets/rodrigo-sobral.jpg'

const HIGHLIGHTS = [
  'Ciclo completo de desenvolvimento: requisitos, arquitetura, testes e implantação',
  'Sistemas Desktop e Web de grande porte',
  'Metodologias ágeis e desenvolvimento orientado a objetos',
  'Gestão de projetos baseada no PMBOK (PMI)',
]

const TECH_STACK = [
  'Java (J2EE, 8, 11, 21)',
  'Spring Boot',
  'Hibernate',
  'React',
  'JSF',
  'AngularJS',
  'APIs RESTful',
  'PostgreSQL',
  'MySQL',
  'Oracle',
  'SQL Server',
  'Maven',
]

export default function Founder() {
  return (
    <section id="fundador" className="relative bg-brand-950 py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center lg:sticky lg:top-28">
            <img
              src={rodrigoPhoto}
              alt="Rodrigo Figueiredo Sobral"
              className="mx-auto h-28 w-28 rounded-full object-cover ring-2 ring-brand-400/40"
            />
            <h3 className="mt-5 text-xl font-semibold text-white">Rodrigo Figueiredo Sobral</h3>
            <p className="mt-1 text-sm text-brand-300">Co-Fundador da STI Soluções</p>
            <p className="mt-2 text-sm text-slate-400">Analista de Sistemas</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Pill>Java</Pill>
              <Pill>React</Pill>
              <Pill>Spring Boot</Pill>
              <Pill>+15 anos de TI</Pill>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold text-cyan-glow tracking-wide uppercase">Co-Fundador</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
              Experiência técnica que sustenta cada entrega
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed">
              Com mais de 15 anos de experiência em Tecnologia da Informação,
              Rodrigo já atuou em projetos de grande porte no desenvolvimento
              de sistemas Desktop e Web, participando de todas as fases do
              ciclo de vida do software — do levantamento e especificação de
              requisitos até o desenvolvimento, testes e implantação de
              soluções robustas e escaláveis.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Especialista em Java (J2EE, 6, 8, 11, 21), Spring Boot,
              Hibernate e APIs RESTful no backend, com domínio de React, JSF,
              Struts e AngularJS no frontend — unindo arquitetura sólida a
              experiências de uso modernas.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Vivência com metodologias ágeis, modelagem de processos e boas
              práticas de gestão de projetos baseadas no PMBOK (PMI), sempre
              em busca de inovação, aprendizado contínuo e entregas de alto
              valor para o negócio.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {HIGHLIGHTS.map((item) => (
                <div key={item} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-cyan-glow shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-white mb-3">Stack técnico</p>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <Pill key={tech}>{tech}</Pill>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
      {children}
    </span>
  )
}
