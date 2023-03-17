import React, { useEffect, useState } from 'react'

interface input {
    question: string
    answers: Array<string>
    correctIndex: number
    activeIndex: number
    setActiveindex: (arg0: number) => void;
}

function Question({ question, answers, correctIndex, activeIndex, setActiveindex}: input) {
    const [correct, setCorrect] = useState(false)
    useEffect(() => {
        setCorrect(false)
    }, [activeIndex])
    
    function checkCorrect(i: number) {
        if(i == correctIndex) {
            console.log("Correct Answer")
            setCorrect(true)
        }
    }

    return (
        <div>
            <h1>{question}</h1>
            {answers.map((answer, i) => <p onClick={() => checkCorrect(i)}>{answer}</p>)}
            <div>
                {correct ? <p>CORRECT ANSWER!!!</p> : <></>}
            </div>
            <button onClick={() => setActiveindex(activeIndex + 1)}>Next question</button>
        </div>
    )
}

export default Question