import { useEffect, useState } from "react";

const App = () => {
    const [text, setText] = useState("");
    const [countdown, setCoundown] = useState(5);
    const [isGameRunning, setIsGameRunning] = useState(false);

    useEffect(() => {
        if (countdown > 0 && isGameRunning) {
            setTimeout(() => {
                setCoundown((prevCountdown) => prevCountdown - 1);
            }, 1000);
        }
    }, [countdown, isGameRunning]);

    const handleTextChange = (event) => {
        const { value } = event.target;
        setText(value);
    };

    const wordCount = (text) => {
        const count = text
            .trim()
            .split(" ")
            .filter((word) => word !== "").length;
        console.log(count);
    };

    const startGame = () => {
        setIsGameRunning(isGameRunning => !isGameRunning);
        wordCount(text);
    }

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                placeholder="Type here!"
                value={text}
                onChange={handleTextChange}
            />
            <h4>Time Remaining: {countdown}s</h4>
            <button onClick={() => startGame()}>Start</button>
            <h1>Word Count: </h1>
        </div>
    );
};

export default App;
