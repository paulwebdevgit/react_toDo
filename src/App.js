import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
import {useState} from 'react'



function App() {
  const [toDos, setToDos] = useState([]);

  const addTask = () => {

  }

  const deleteTask = () => {
    
  }
  const handleToggle = () => {
    
  }
  return (
    <div className="App">
      <header>
        <h1> ToDo list:{toDos.length} </h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {toDos.map((item,index) => {
        return(
         <ToDo 
            todo = {item}
            key = {index}
            toggleTask = {handleToggle}
            deleteTask = {deleteTask}
         />
        )
      })}
    </div>
  );
}

export default App;
