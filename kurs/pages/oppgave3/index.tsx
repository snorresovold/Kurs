import React, { useEffect, useState } from 'react'
import Data from "./Quiz.json"
import Question from '@/components/Question'

function index() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [complete, setComplete] = useState(false)

    useEffect(() => {
        if (activeIndex+2 > Data.questions.length) {
            setComplete(true)
        }
    }, [activeIndex])
    

    return (
        <div>
            <h1>Quiz</h1>
            <h2>{activeIndex+1} / {Data.questions.length - 1}</h2>
            {complete 
            ? <h1>You are finished!!!</h1>
            : <Question
            question={Data.questions[activeIndex].question}
            answers={Data.questions[activeIndex].answers}
            correctIndex={Data.questions[activeIndex].correctIndex}
            activeIndex={activeIndex}
            setActiveindex={setActiveIndex}
        />
            }
        </div>
    )
}

export default index