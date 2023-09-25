
import SurveyParentContainer from "@/components/Containers/SurveyParentContainer"
import SurveyMainContainer from "@/components/Containers/SurveyMainContainer"
import SurveySecondaryContainer from "@/components/Containers/SurveySecondaryContainer"
import Progress from "../Progress"
import QuestionBox from "../QuestionBox"
import EmbleLink from "../EmbleLink"

import { SurveyAnswer } from "@/types/surveyTypes"

type Props = {
    prototype_url: string
    active: number 
    setActive: React.Dispatch<React.SetStateAction<number>>
    answers: SurveyAnswer[] | []
    setAnswers: React.Dispatch<React.SetStateAction<SurveyAnswer[]>>
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>
    handleDecrement: () => void 
    handleIncrement: () => void 
}

const Prototype = ({ prototype_url, active, setActive, answers, setAnswers, setSuccess, handleDecrement, handleIncrement }: Props) => {

    return (
        // <div onKeyDown={(e) => handleKeyDown(e)} tabIndex={-1} ref={containerRef}>
                <SurveyParentContainer>

                    <SurveyMainContainer>
                        <iframe className="xxs:w-[100%] md:w-[90%] xxs:h-[400px] md:h-[90%] md:rounded-md" src={`https://www.figma.com/embed?embed_host=emble&url=${prototype_url}`} allowFullScreen />
                    </SurveyMainContainer>

                    <SurveySecondaryContainer>
                        <div className="h-auto w-[90%] flex items-center justify-start xxs:mt-[50px] mb-[10px]">
                            <img className="h-[30px] w-[30px] mr-[10px] cursor-pointer" src={active === 0 ? "/arrow-up-grey.svg" : "/arrow-up-black.svg"} alt="An up icon for moving up a question" onClick={() => handleDecrement()} />
                            <img className="h-[30px] w-[30px] mr-10 cursor-pointer" src={active + 1 > answers.length - 1 ? "/arrow-down-grey.svg" : "/arrow-down-black.svg"} alt="A down icon for moving down a question" onClick={() => handleIncrement()} />
                            <Progress active={active} setActive={setActive} answers={answers} />
                        </div>
                        <QuestionBox state={answers} setState={setAnswers} setSuccess={setSuccess} active={active} setActive={setActive} id={answers[active]?.question_id} title={answers[active]?.question_title} type={answers[active]?.question_type} options={answers[active]?.question_options} index={active} />

                        <EmbleLink />
                        
                    </SurveySecondaryContainer>
                
                </SurveyParentContainer>
            // </div>
    )
}

export default Prototype