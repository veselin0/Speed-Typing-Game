import {useState} from 'react';

const App = () => {
    const [text, setText] = useState("")

    const handleTextChange = (event) => {
        const {value} = event.target;
        setText(value);
    }
    console.log(text);
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea 
                placeholder="Type here!" 
                value={text}
                onChange={handleTextChange}
            />
            <h4>Time Remaining: </h4>
            <button>Start</button>
            <h1>Word Count: </h1>
        </div>
    ); 
}

export default App;
