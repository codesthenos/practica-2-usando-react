import Header from "./components/Header.tsx"
import Description from "./components/Description.tsx"
import Skills from "./components/Skills.tsx"
import Banner from "./components/Banner.tsx"
import Contact from "./components/Contact.tsx"
import Footer from "./components/Footer.tsx"

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
