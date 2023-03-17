import React, { useEffect, useState } from 'react'
import Data from "./Quiz.json"
import Question from '@/components/Question'

function index() {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div>
            <h1>Quiz</h1>
            <Question
                question={Data.questions[activeIndex].question}
                answers={Data.questions[activeIndex].answers}
                correctIndex={Data.questions[activeIndex].correctIndex}
                activeIndex={activeIndex}
                setActiveindex={setActiveIndex}
            />
        </div>
    )
}

export default index