import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Founder from './components/Founder'
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-950">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Founder />
        <Portfolio />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
