
import { NewQuestionType } from "@/types/questionTypes"
import Intro from "../QuestionTypes/Intro"
import Outro from "../QuestionTypes/Outro"
import ShortText from "./CreateQuestionTypes/ShortText"
import LongText from "./CreateQuestionTypes/LongText"
import SingleSelect from "./CreateQuestionTypes/SingleSelect"
import MultiSelect from "./CreateQuestionTypes/MultiSelect"
import Rating from "./CreateQuestionTypes/Rating"
import Scale from "./CreateQuestionTypes/Scale"
import CreateAddQuestion from "./CreateAddQuestion"

type ResearchProps = {
    questions: NewQuestionType[]
    setQuestions: React.Dispatch<React.SetStateAction<NewQuestionType[] | []>>
    intro: boolean
    setIntro: React.Dispatch<React.SetStateAction<boolean>>
    outro: boolean 
    setOutro: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateQuestions = ({ questions, setQuestions, intro, setIntro, outro, setOutro }: ResearchProps) => {

    const handleOrderChange = async (index: number, change: 1 | -1) => {
        if (index + change > questions.length || index + change <= 0) {
            return;
        }
    
        // Identify the clicked target
        const clickedTarget = questions[index - 1];
    
        // Identify the change target
        const changeTarget = questions[index - 1 + change];
    
        // Swap the question_index values
        const tempIndex = clickedTarget.index;
        clickedTarget.index = changeTarget.index;
        changeTarget.index = tempIndex;
    
        // Update the state array with the new order
        const updatedQuestions = [...questions];
        updatedQuestions[index - 1] = changeTarget;
        updatedQuestions[index - 1 + change] = clickedTarget;

        setQuestions(updatedQuestions)
    };

    const handleDelete = (index: number) => {

        console.log(index);

        // Get copy of state
        const stateCopy = [...questions];
      
        // Find the item with the matching indexToDelete
        const itemToDelete = stateCopy.find((item) => item.index === index);
      
        if (!itemToDelete) {
          // Item with the specified index does not exist, handle this case as needed
          return;
        }
      
        // Filter through questions and remove the item
        const filteredArray = stateCopy.filter((item) => item.index !== index);
      
        // Update indexes to maintain a consistent sequence
        for (let i = 0; i < filteredArray.length; i++) {
          filteredArray[i].index = i + 1;
        }
      
        console.log(filteredArray);
      
        setQuestions(filteredArray);

    }


    return (
        <div className="h-auto w-[95%]">
            <h2 className="font-bold mb-[30px]">Survey</h2>

            <Intro intro={intro} setIntro={setIntro} />

            { questions.map((question, index) => {

                switch (question.type) {
                    case "Short text":
                        return <ShortText key={question.title} content={question.title} type={question.type} index={question.index} length={questions.length} changeOrder={handleOrderChange} handleDelete={handleDelete} />
                    case "Long text":
                        return <LongText key={question.title} content={question.title} type={question.type} index={question.index} length={questions.length} changeOrder={handleOrderChange} handleDelete={handleDelete} />
                    case "Single select":
                        return <SingleSelect key={question.title} content={question.title} type={question.type} index={question.index} length={questions.length} changeOrder={handleOrderChange} handleDelete={handleDelete} />
                    case "Multi select":
                        return <MultiSelect key={question.title} content={question.title} type={question.type} index={question.index} length={questions.length} changeOrder={handleOrderChange} handleDelete={handleDelete} />
                    case "Rating":
                        return <Rating key={question.title} content={question.title} type={question.type} index={question.index} length={questions.length} changeOrder={handleOrderChange} handleDelete={handleDelete} />
                    case "Scale":
                        return <Scale key={question.title} content={question.title} type={question.type} index={question.index} length={questions.length} changeOrder={handleOrderChange} handleDelete={handleDelete} />
                }

            })}

            <Outro outro={outro} setOutro={setOutro} />

            <CreateAddQuestion questions={questions} setQuestions={setQuestions} index={questions.length + 1} />

        </div>
    )
}

export default CreateQuestions