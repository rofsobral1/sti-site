import { Building2 } from 'lucide-react'

const CLIENTS = [
  'Bradesco Seguros',
  'Secretaria de Fazenda do Estado do Rio de Janeiro',
  'CNP Seguradora',
  'BRT Sorocaba',
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

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {CLIENTS.map((name) => (
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
    </section>
  )
}
