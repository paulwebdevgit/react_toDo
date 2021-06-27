import {useState} from 'react'

export default function ToDoForm({addTask}){

    const [userInput, setuserInput] = useState('')

    const handleChange = (e) => {
        setuserInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setuserInput("");
    }

    // const handleKeyPress = (e) =>{
    //     if(e.key === "Enter"){
    //         handleSubmit(e)
    //     }
    // }
    
    return(
        <form onSubmit = {handleSubmit}>
            
            <input
                className="text"
                value={userInput}
                type="text"
                onChange = {handleChange}
                // onKeyDown = {handleKeyPress}
                placeholder = "Wert eingeben"
            />
            <button>Add</button>
        </form>
    )
}