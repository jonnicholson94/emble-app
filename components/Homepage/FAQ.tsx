
import * as Accordion from "@radix-ui/react-accordion"

const FAQ = () => {
    return (
        <section className={`h-auto xxs:w-[100%] md:w-[90%] flex items-center justify-center flex-col xxs:my-[25px] md:my-[75px]`}>
            <p className={`text-link uppercase font-bold text-lg my-[20px]`}>Questions</p>
            <h2 className="h-auto xxs:w-[90%] lg:w-[60%] font-bold text-text xxs:text-5xl sm:text-6xl md:text-7xl  text-center">Frequently asked questions</h2>
                <Accordion.Root type="single" className="h-auto w-[full] my-[50px] flex flex-wrap items-center justify-center" collapsible defaultValue="1">
                    <Accordion.AccordionItem value="1" className="h-auto xxs:w-[90%] lg:w-[900px] bg-altBackground text-text border border-altBorder px-[30px] py-[20px] my-[10px] rounded-md">
                        <Accordion.AccordionTrigger className="h-auto w-full flex items-center justify-center">
                            <p className="text-lg flex-grow text-left font-bold">What is Emble?</p>
                        </Accordion.AccordionTrigger>
                        <Accordion.AccordionContent className="h-auto my-[20px] text-sm text-text">Emble is an app that helps you conduct user testing. You can send prototype tests and surveys to your users, so they can complete it remotely. Once done, you can view their responses and make product decisions.</Accordion.AccordionContent>
                    </Accordion.AccordionItem>
                    <Accordion.AccordionItem value="2" className="h-auto xxs:w-[90%] lg:w-[900px] bg-altBackground text-text border border-altBorder p-[20px] my-[10px] rounded-md">
                        <Accordion.AccordionTrigger>
                            <p className="w-full text-lg flex-grow text-left font-bold">Why would I use Emble?</p>
                        </Accordion.AccordionTrigger>
                        <Accordion.AccordionContent className="h-auto my-[20px] text-sm text-text opacity-80">Building brilliant apps requires product feedback. However, for most teams, speaking to users can be timeconsuming, when you just need to be fast. Emble is great for sending prototypes, surveys and more to users so they can quickly provide you with feedback, and you can keep iterating your product.</Accordion.AccordionContent>
                    </Accordion.AccordionItem>
                    <Accordion.AccordionItem value="3" className="h-auto xxs:w-[90%] lg:w-[900px] bg-altBackground text-text border border-altBorder p-[20px] my-[10px] rounded-md">
                        <Accordion.AccordionTrigger>
                            <p className="text-lg flex-grow text-left font-bold">What sorts of teams would use Emble?</p>
                        </Accordion.AccordionTrigger>
                        <Accordion.AccordionContent className="h-auto my-[20px] text-sm text-text opacity-80">Emble can be used by any sort of team and company. Whether you are a Product Manager, a UX designer or engineer. If you need feedback on your product and designs, using Emble will help.</Accordion.AccordionContent>
                    </Accordion.AccordionItem>
                </Accordion.Root>
        </section>
       
    )
}

export default FAQ