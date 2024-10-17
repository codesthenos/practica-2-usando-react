import './styles/common/normalize.css'
import './styles/common/variables.css'
import './styles/common/body.css'

import Banner from "./components/Banner.tsx"
import Contact from "./components/Contact.tsx"
import Description from "./components/Description.tsx"
import Footer from "./components/Footer.tsx"
import Header from "./components/Header.tsx"
import Skills from "./components/Skills.tsx"

function App () {
  return (
    <>
      <Header />
      <Description />
      <Skills />
      <Banner />
      <Contact />      
      <Footer />
    </>
  )
}

export default App
