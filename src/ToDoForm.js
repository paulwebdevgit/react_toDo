import {useState} from 'react'

export default function ToDoForm(){

    const [userImput, setUserImput] = useState('')

    const handleSubmit = () => {
        
    }
    const handleChange = (e) => {
        setUserImput(e.target.value);
    }
    const handleKeyPress = () =>{

    }
    
    return(
        <form onSubmit = {handleSubmit}>
            <input
                value={userImput}
                type="text"
                onChange = {handleChange}
                onKeyDown = {handleKeyPress}
                placeholder = "Wert eingeben"
            />
            <button>Add</button>
        </form>
    )
}