import React, {Component, useState} from "react";
import '../styles/App.css';
import Form from './Form.js';

const App = () => {
    const [answer, setAnswer] = useState("");

    return(
        <div id="main">
           {/* Do not remove the main div */}
           <Form 
                setAnswer = {setAnswer}
           />
           <h3 data-testid="answer">{answer}</h3>
        </div>
    )
}


export default App;