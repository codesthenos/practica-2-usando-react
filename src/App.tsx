// @ts-expect-error the following dependency has no types
import { Router, Route } from 'codesthenos-07-midu-router'
import Index from './pages/index.tsx'
import Projects from './pages/projects.tsx'
import Error404 from './pages/Error404.tsx'
//import Error500 from './pages/Error500.tsx'
import Footer from './components/Footer.tsx'

function App () {
  return (
    <>    
      <Router defaultComponent={Error404}>
        <Route path='/practica-2-usando-react/' Component={Index} />
        <Route path='/practica-2-usando-react/projects' Component={Projects} />
      </Router>
      <Footer />
    </>
  )
}

export default App
