import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setActiveImage((i) => (i + 1) % project.images.length)
      if (e.key === 'ArrowLeft') setActiveImage((i) => (i - 1 + project.images.length) % project.images.length)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, project.images.length])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-950/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-brand-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-brand-950/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative aspect-video bg-brand-900">
          <img
            src={project.images[activeImage].src}
            alt={project.images[activeImage].caption}
            className="h-full w-full object-cover object-top"
          />
          {project.images.length > 1 && (
            <>
              <button
                onClick={() => setActiveImage((i) => (i - 1 + project.images.length) % project.images.length)}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-brand-950/70 border border-white/10 text-white hover:bg-brand-950/90 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setActiveImage((i) => (i + 1) % project.images.length)}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-brand-950/70 border border-white/10 text-white hover:bg-brand-950/90 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                aria-label={`Ver imagem ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeImage ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto px-6 pt-4">
          {project.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                i === activeImage ? 'border-brand-400' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt={img.caption} className="h-14 w-24 object-cover object-top" />
            </button>
          ))}
        </div>

        <div className="p-6 md:p-8">
          <span className="text-xs font-medium text-brand-300 uppercase tracking-wide">{project.tag}</span>
          <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">{project.description}</p>

          {project.flow && (
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-3">Como funciona</p>
              <ol className="space-y-2.5">
                {project.flow.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-800 text-xs font-semibold text-brand-200">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {project.stack && (
            <div className="mt-6 space-y-4">
              <p className="text-sm font-semibold text-white">Stack técnico</p>
              {project.stack.map(({ category, items }) => (
                <div key={category}>
                  <p className="text-xs text-slate-400 mb-2">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
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
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
