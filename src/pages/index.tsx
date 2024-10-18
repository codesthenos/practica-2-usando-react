import Header from '../components/index/Header.tsx'
import Description from '../components/index/Description.tsx'
import Skills from '../components/index/Skills.tsx'
import Banner from '../components/index/Banner.tsx'
import Contact from '../components/index/Contact.tsx'

function Index () {
  return (
    <>
      <Header />
      <main role='main'>
        <Description />
        <Skills />
        <Banner />
        <Contact />      
      </main>
    </>
  )
}

export default Index
