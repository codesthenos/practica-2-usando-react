import Header from "./components/Header.tsx"
import Description from "./components/Description.tsx"
import Skills from "./components/Skills.tsx"
import Banner from "./components/Banner.tsx"
import Contact from "./components/Contact.tsx"
import Footer from "./components/Footer.tsx"

import './styles/common/normalize.css'
import './styles/common/variables.css'
import './styles/index/header-burger-menu.css'
import './styles/index/description.css'
import './styles/index/skills.css'
import './styles/index/banner.css'
import './styles/index/contact.css'
import './styles/common/footer.css'

function App () {
  return (
    <>
      <Header />
      <main role='main'>
        <Description />
        <Skills />
        <Banner />
        <Contact />      
      </main>
      <Footer />
    </>
  )
}

export default App
