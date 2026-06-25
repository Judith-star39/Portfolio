import Header from './composants/header'
import Home from './pages/home'
import Apropos from './pages/a_propos'
import Projects from './pages/projects'
import Skills from './composants/skills'
import Contact from './pages/contact'
import Footer from './composants/footer'


export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Apropos />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}