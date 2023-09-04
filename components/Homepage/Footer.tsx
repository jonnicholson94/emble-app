
import Link from "next/link"

type SectionProps = {
    children: React.ReactNode
}

type LinkProps = {
    link: string 
    content: string
}

type HeaderProps = {
    content: string
}

const FooterSection = ({ children }: SectionProps) => {
    return (
        <div className="h-auto w-auto mx-[50px] flex items-start justify-start flex-col">
            {children}
        </div>
    )
}

const FooterLink = ({ link, content }: LinkProps) => {
    return (
        <Link className="h-auto my-[5px] text-border" href={link}>{content}</Link>
    )
}

const FooterHeader = ({ content }: HeaderProps) => {
    return (
        <h3 className="text-md text-white font-bold mb-[20px]">{content}</h3>
    )
}

const Footer = () => {
    return (
        <footer className="h-auto w-full flex items-start justify-center py-[100px] bg-black">
            <h2 className="text-2xl font-bold text-white mr-[150px]">Emble</h2>
            <FooterSection>
                <FooterHeader content="Use cases" />
                <FooterLink link="/product-managers" content="Product Managers" />
                <FooterLink link="/designers" content="Designers" />
                <FooterLink link="/ux-research" content="UX Research" />
                <FooterLink link="/startups" content="Startups" />
            </FooterSection>
            <FooterSection>
                <FooterHeader content="Resources" />
                <FooterLink link="/pricing" content="Pricing" />
                <FooterLink link="/changelog" content="Changelog" />
            </FooterSection>
            <FooterSection>
                <FooterHeader content="Company" />
                <FooterLink link="/blog" content="Blog" />
                <FooterLink link="/contact" content="Contact" />
            </FooterSection>
            <FooterSection>
                <FooterHeader content="Legal" />
                <FooterLink link="/terms" content="Terms and Conditions" />
                <FooterLink link="/privacy" content="Privacy policy" />
            </FooterSection>
        </footer>
    )
}

export default Footer