import React, {useState} from 'react';

const Form = (props) => {
    let [name1, setName1] = useState("");
    let [name2, setName2] = useState("");

    let {setAnswer} = props;

    function calculateRelation () {
        if(name1.length === 0 || name2.length === 0){
            setAnswer("Please Enter valid input");
        } else {
            let firstName = name1;
            let secondName = name2;

            for (let i = 0; i < firstName.length; i++) {
                for (let j = 0; j < secondName.length; j++) {
                    if(firstName.charAt(i) == secondName.charAt(j)){
                        firstName= firstName.replace(firstName.charAt(i), "");
                        secondName= secondName.replace(secondName.charAt(j), "");
                        i--;
                    }
                }
            }

            switch((firstName.length + secondName.length) % 6){
                case 0:
                    setAnswer("Siblings");
                    break;
                case 1:
                    setAnswer("Friends");
                    break;
                case 2:
                    setAnswer("Love");
                    break;
                case 3:
                    setAnswer("Affection");
                    break;
                case 4:
                    setAnswer("Marriage");
                    break;
                case 5:
                    setAnswer("Enemy");
                    break;
                default:
                    setAnswer("");
            }
        }
    }

    return (
        <form onSubmit={(e) => {e.preventDefault()}}>
            <input type="text" name="name1" value={name1} data-testid="input1" onChange={(e) => {setName1(e.target.value)}} placeholder='Enter first name' />
            <input type="text" name="name2" value={name2} data-testid="input2" onChange={(e) => {setName2(e.target.value)}} placeholder='Enter second name' />
            <button type="submit" data-testid="calculate_relationship" onClick={calculateRelation}>Calculate Relationship Future</button>
            <button data-testid="clear" onClick={() => {
                setName1("");
                setName2("");
                setAnswer("");
            }}>Clear</button>
        </form>
    )
}

export default Form;