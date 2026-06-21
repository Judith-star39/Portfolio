import Header from './composants/header'
import Home from './pages/home'
import Apropos from './pages/a_propos'
import Projects from './pages/projects'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Apropos />
        <Projects />
      </main>
    </>
  )
}