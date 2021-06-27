import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
import {useState, useEffect} from 'react'




function App() {
  const [toDos, setToDos] = useState(JSON.parse(localStorage.getItem("items")) || []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(toDos))
  }, [toDos])

  const addTask = (userInput) => {
      if (userInput){
        const newItem = {
          id: Math.random().toString(36).substr(2,9),
          task: userInput,
          complete: false
        }
        setToDos([...toDos, newItem])
      }
      
  }

  const deleteTask = (id) => {
    const updatedToDos = [...toDos].filter((todo) => todo.id !== id)
    setToDos(updatedToDos)
  }

  
  // const handleToggle = (id) =>{
  // const editedToDo =  toDos.map((item) => {
  //     if(item.id === id){
  //      return { ...item, complete: !item.complete}
  //     }
  //     else {
  //      return item
  //     }
  //   })
  //   setToDos(editedToDo)
  //   console.log(toDos, id)
  // }

  const handleToggle = (id) => {
      setToDos([...toDos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : {...todo})])
    }

  


  return (
    <div className="App">
      <header>
        <div className="title"> ToDo List: {toDos.length} </div>
      </header>
      <ToDoForm addTask={addTask}/>
      {toDos.map((item,index) => {
        
        return(
         <ToDo 
           
            todo = {item}
            key = {item.id}
            index = {index+1}
            toggleTask = {handleToggle}
            deleteTask = {deleteTask}
         />
        )
      })}
    </div>
  );
}

export default App;
