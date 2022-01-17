import {useState, useEffect, useRef} from 'react';

const useGameCustomHook = (amountOfTime=10) => {
    
    
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(amountOfTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null);
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(amountOfTime)
        setText("")
        setWordCount(0)
        textBoxRef.current.disabled = false;
        textBoxRef.current.focus();
    }
    
    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }
    
    // https://www.google.com/search?q=Disable+button+in+react
    
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

    return {textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount};
}

export default useGameCustomHook;