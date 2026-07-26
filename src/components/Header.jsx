import { useEffect, useState } from 'react'
import { Menu, X, Cpu } from 'lucide-react'

const LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#fundador', label: 'Fundador' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-brand-950/90 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-18 py-3">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-cyan-glow">
            <Cpu className="h-5 w-5 text-brand-950" strokeWidth={2.5} />
          </span>
          <span className="font-semibold text-lg tracking-tight text-white">
            STI <span className="text-brand-300 font-normal">Soluções</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-brand-400 to-cyan-glow text-brand-950 hover:opacity-90 transition-opacity"
          >
            Solicitar orçamento
          </a>
        </div>

        <button
          className="md:hidden text-slate-200 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-brand-950/98 backdrop-blur border-b border-white/10 px-6 pb-6 pt-2 flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-slate-200 text-base py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="text-center font-medium px-4 py-3 rounded-full bg-gradient-to-r from-brand-400 to-cyan-glow text-brand-950"
          >
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  )
}
