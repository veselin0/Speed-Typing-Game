import {useState} from 'react';

const App = () => {
    const [text, setText] = useState("")

    const handleTextChange = (event) => {
        const {value} = event.target;
        setText(value);
    }
    
    const wordCount = (text) => {
        const count = text
            .trim()
            .split(' ')
            .filter(word => word !== "")
            .length;
        console.log(count);
    }

    

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea 
                placeholder="Type here!" 
                value={text}
                onChange={handleTextChange}
            />
            <h4>Time Remaining: </h4>
            <button onClick={() => wordCount(text)}>Start</button>
            <h1>Word Count: </h1>
        </div>
    ); 
}

export default App;
