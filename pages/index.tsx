import FinalCta from "@/components/Homepage/FinalCta"
import Footer from "@/components/Homepage/Footer"
import Hero from "@/components/Homepage/Hero"
import InfoSection from "@/components/Homepage/InfoSection"
import Navbar from "@/components/Homepage/Navbar"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoSection heading="Users interact with your research in the browser" content="Upload prototypes which render inside of intuitive surveys, which users can interact with on their own devices." image="/homepage/research.svg" />
      <InfoSection heading="Integrates seamlessly with Figma" content="Simply paste your Figma link in to your research, and your prototypes will load automatically in your users browser." image="/homepage/research.svg" />
      <InfoSection heading="Review responses and make decisions" content="When users leave responses, they get collected inside your research page. " image="/homepage/research.svg" />
      <FinalCta />
      <Footer />
    </>
    
  )
}

export default HomePage

