import { ArrowRight, ShieldCheck, Server, Code2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-950 pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-cyan-glow/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-brand-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow animate-pulse" />
            Tecnologia da Informação sob medida
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Soluções em TI que fazem seu negócio{' '}
            <span className="text-gradient">ir mais longe</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            A STI Soluções em Tecnologia da Informação desenvolve, implementa e
            sustenta a infraestrutura tecnológica que sua empresa precisa para
            crescer com segurança, performance e escalabilidade.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-cyan-glow px-6 py-3 font-medium text-brand-950 hover:opacity-90 transition-opacity"
            >
              Fale com um especialista
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-slate-200 hover:bg-white/5 transition-colors"
            >
              Conhecer serviços
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            <Stat value="5+" label="anos de mercado" />
            <Stat value="10+" label="projetos entregues" />
            <Stat value="99,9%" label="uptime garantido" />
          </div>
        </div>

        <div className="relative hidden md:block animate-float">
          <div className="relative mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur shadow-2xl shadow-brand-900/50">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
            </div>
            <div className="space-y-4">
              <PanelRow icon={<Code2 className="h-4 w-4" />} title="Desenvolvimento" value="Deploy concluído" ok />
              <PanelRow icon={<Server className="h-4 w-4" />} title="Infraestrutura" value="Servidores saudáveis" ok />
              <PanelRow icon={<ShieldCheck className="h-4 w-4" />} title="Segurança" value="Sem incidentes" ok />
              <div className="h-24 rounded-lg bg-gradient-to-t from-brand-500/20 to-transparent border border-white/10 flex items-end p-3 gap-1.5">
                {[40, 65, 45, 80, 60, 90, 70].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-brand-400 to-cyan-glow"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-400 mt-1">{label}</p>
    </div>
  )
}

function PanelRow({ icon, title, value, ok }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white/5 border border-white/5 px-3 py-2.5">
      <div className="flex items-center gap-2.5 text-sm text-slate-200">
        <span className="text-brand-300">{icon}</span>
        {title}
      </div>
      <span className={`text-xs font-medium ${ok ? 'text-emerald-400' : 'text-slate-400'}`}>{value}</span>
    </div>
  )
}
