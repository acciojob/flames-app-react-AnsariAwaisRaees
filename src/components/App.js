import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
    const [firstname, setFirstname] = useState("");
    const [secondname, setSecondname] = useState("");
    const [status, setStatus] = useState("");

    const calculateRelationship = () => {
        if(firstname === '' || secondname === ''){
            setStatus('Please Enter valid input');
            return;
        }

        let firstArr = firstname.split("");
        let secondArr = secondname.split("");
        let newArr = [];

        // To splice array and modify string
        for(let i=0; i<firstArr.length; i++){
            let flag = false;
            for(let j=0; j<secondArr.length; j++){
                if(firstArr[i]===secondArr[j]){
                    secondArr.splice(j, 1);
                    flag = true;
                    break;
                }
            }
            if(!flag){
                // Then only need to add it(char) in our first string array
                newArr.push(firstArr[i]);
            }
        }


        // To calculate relationship status
        let str = newArr.join("") + secondArr.join("");
        let n = (str.length) % 6;
        switch(n){
            case 1 :
                return setStatus('Friends');
            case 2 :
                return setStatus('Love');
            case 3 :
                return setStatus('Affection');
            case 4 :
                return setStatus('Marriage');
            case 5 :
                return setStatus('Enemy');
            case 0 :
                return setStatus('Siblings');
        }
    }

    const clearStatus = () => {
        setFirstname('');
        setSecondname('');
        setStatus('');
    }

    return (
        <div id="main">
            {/* Do not remove the main div */}
            <input type="text" placeholder="Enter first name" value={firstname} 
                onChange={(e) => setFirstname(e.target.value)} data-testid="input1" name="name1"/>
            <input type="text" placeholder="Enter second name" value={secondname} 
                onChange={(e) => setSecondname(e.target.value)} data-testid="input2" name="name2" />
            <button onClick={calculateRelationship} data-testid="calculate_relationship" >Calculate Relationship Future</button>
            <button onClick={clearStatus} data-testid="clear" >Clear</button>

            <h3 data-testid="answer" >{status}</h3>
        </div>
    )
}



export default App;