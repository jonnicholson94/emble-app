
import Head from "next/head"

import Footer from "@/components/Homepage/Footer"
import Hero from "@/components/Homepage/Hero"
import InfoSection from "@/components/Homepage/InfoSection"
import Navbar from "@/components/Homepage/Navbar"

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Get feedback from users on prototypes, designs and more, in minutes | emble</title>
      </Head>
      <div className="h-auto w-screen flex items-center justify-center flex-col bg-homepage-pattern">
        <Navbar />
        <Hero />
        <InfoSection heading="Users interact with your research in the browser" content="Upload prototypes which render inside of intuitive surveys, which users can interact with on their own devices." image="/homepage/cursor-click.svg" />
        <InfoSection heading="Integrates seamlessly with Figma" content="Simply paste your Figma link in to your research, and your prototypes will load automatically in your users browser." image="/homepage/figma.svg" />
        <InfoSection heading="Review responses and make decisions" content="Users fill in your survey alongside your prototype, allowing them to test your work early and save you from pursuing wrong ideas." image="/homepage/send.svg" />
        <Footer />
      </div>
    </>
  
  )
}

export default HomePage

