// @ts-expect-error the following dependency has no types
import { Router, Route } from 'codesthenos-07-midu-router'
import Index from './pages/index.tsx'
import Projects from './pages/projects.tsx'
import Error404 from './pages/Error404.tsx'
import Error500 from './pages/Error500.tsx'
import Footer from './components/Footer/Footer.tsx'

function App () {
  return (
    <>
      {/* <-- Here Error404, but in gh-pages SPAs doesnt work, so this routing is not working, managed routing with vite-plugin */}
      <Router defaultComponent={Index}>
        <Route path='/practica-2-usando-react/' Component={Error404} />
        <Route path='/practica-2-usando-react/projects' Component={Projects} />
        <Route path='/practica-2-usando-react/500' Component={Error500} />
      </Router>
      <Footer />
    </>
  )
}

export default App
