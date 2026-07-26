import { useState } from 'react'
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contato" className="relative bg-brand-950 py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-sm font-semibold text-cyan-glow tracking-wide uppercase">Contato</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Vamos conversar sobre o seu projeto
          </h2>
          <p className="mt-4 text-slate-300 text-lg max-w-md">
            Preencha o formulário ou fale diretamente com a gente pelos canais abaixo.
          </p>

          <div className="mt-10 space-y-5">
            <ContactItem icon={Mail} label="contato@stisolucoes.com.br" href="mailto:contato@stisolucoes.com.br" />
            <ContactItem icon={Phone} label="(21) 98183-4273" href="tel:+5521981834273" />
            <ContactItem icon={MessageCircle} label="WhatsApp: (21) 98183-4273" href="https://wa.me/5521981834273" />
            <ContactItem icon={MapPin} label="Rio de Janeiro, RJ — Brasil" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          {sent ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center gap-3">
              <CheckCircle2 className="h-12 w-12 text-emerald-400" />
              <p className="text-lg font-semibold text-white">Mensagem enviada!</p>
              <p className="text-sm text-slate-400 max-w-xs">
                Obrigado pelo contato. Nossa equipe irá retornar em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field
                label="Nome"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
              />
              <Field
                label="E-mail"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="voce@empresa.com"
                required
              />
              <div>
                <label className="block text-sm text-slate-300 mb-1.5" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Conte um pouco sobre o que você precisa"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-400/60 focus:ring-1 focus:ring-brand-400/60"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-cyan-glow px-6 py-3 font-medium text-brand-950 hover:opacity-90 transition-opacity"
              >
                Enviar mensagem
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon: Icon, label, href }) {
  const content = (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-brand-300">
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-slate-200 text-sm">{label}</span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="flex items-center gap-3 hover:text-cyan-glow transition-colors w-fit"
      >
        {content}
      </a>
    )
  }

  return <div className="flex items-center gap-3">{content}</div>
}

function Field({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-sm text-slate-300 mb-1.5" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-400/60 focus:ring-1 focus:ring-brand-400/60"
      />
    </div>
  )
}
