
import Head from "next/head"

import Footer from "@/components/Homepage/Footer"
import Hero from "@/components/Homepage/Hero"
import InfoSection from "@/components/Homepage/InfoSection"
import Navbar from "@/components/Homepage/Navbar"
import InfoCard from "@/components/Homepage/InfoCard"
import InfoTile from "@/components/Homepage/InfoTile"
import FAQ from "@/components/Homepage/FAQ"

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Get feedback from users on prototypes, designs and more, in minutes | emble</title>
      </Head>
      <div className="h-auto w-screen flex items-center justify-center flex-col bg-background">
        <Navbar />
        <Hero />
        <InfoSection tagline="Prototypes" heading="Conduct prototype tests with your users, remotely">
          <InfoCard image="/homepage/figma-link.svg" width="w-[50%]" heading="Upload Figma prototypes" content="As simple as copy and paste. Embed your prototypes into your tests by pasting a prototype link." />
          <InfoCard image="/homepage/questions.svg" width="w-[40%]" heading="Ask any questions you like" content="Add questions to your tests, which your user fills in while interacting with your prototype. All in the browser." />
          <InfoCard image="/homepage/responses.svg" width="w-[50%]" heading="Review responses quickly" content="Get your results presented to you, professionally and cleanly." />
          <InfoCard image="/homepage/survey-link.svg" width="w-[40%]" heading="Share your test, anywhere" content="Get publicly accessible links to your tests, that you can share just about anywhere" />
        </InfoSection>
        <InfoSection tagline="Collaborative" heading="Work collaboratively, from product to design">
          <InfoTile icon="/person-icon.svg" heading="Assign tests to team members" content="Be aware of who's working on which research at any one time." />
          <InfoTile icon="/in-progress.svg" heading="Keep research up to date" content="Tests close automatically when you change their status to completed." />
          <InfoTile icon="/notification-message.svg" heading="Receive emails with responses" content="Get notified when new responses are received, so you're always aware." />
        </InfoSection>
        <FAQ />
        <Footer />
      </div>
    </>
  
  )
}

export default HomePage

