import BetaList from "@/components/Homepage/BetaList"
import Footer from "@/components/Homepage/Footer"
import InfoSection from "@/components/Homepage/InfoSection"
import InfoTile from "@/components/Homepage/InfoTile"
import Navbar from "@/components/Homepage/Navbar"

const ProductManagers = () => {
    return (
        <section className="h-auto w-screen flex items-center justify-center flex-col bg-[#000]">

            <Navbar />

            <section className="h-auto w-screen flex items-center justify-center flex-col mt-[100px] mb-[100px]">
                <p className={`xxs:w-[90%] lg:w-[70%] text-salmon uppercase font-bold text-lg my-[20px]`}>Product Managers</p>
                <h1 className="h-auto xxs:w-[90%] lg:w-[70%] font-bold heading-gradient xxs:text-5xl sm:text-6xl md:text-7xl mb-[30px]">Validate your product ideas, and push your roadmap forwards</h1>
                <BetaList />
            </section>

            <InfoSection tagColour="text-salmon" tagline="Validate" heading="Test ideas out using prototypes">
                <InfoTile icon="/survey.svg" heading="Send prototype tests" content="Send prototypes to your target users, and figure out what they like and dislike about new product ideas." />
                <InfoTile icon="/announcement.svg" heading="Analyse feedback" content="Once users have completed your test, review their feedback and make decisions on your new idea." />
                <InfoTile icon="/better.svg" heading="Build a better product" content="Use Emble in conjunction with other forms of research, to help you build better products" />
            </InfoSection>

            <Footer />

        </section>
    )
}

export default ProductManagers