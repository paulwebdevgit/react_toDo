import ToDoForm from './ToDoForm'
import TextArea from './TextArea'
import {useState, useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {ReactComponent as ReactLogo} from "./delete.svg";




function App() {
  const [toDos, setToDos] = useState(JSON.parse(localStorage.getItem("items")) || []);


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(toDos))
  }, [toDos])

// const a = JSON.parse(localStorage.getItem("items"));
// const textInputLocal = a[0].textValue
// console.log(textInputLocal);

  const addTask = (userInput) => {
      if (userInput){
        const newItem = {
          id: Math.random().toString(36).substr(2,9),
          task: userInput,
          complete: false,
          textValue: ""
        }
        setToDos([...toDos, newItem])
      }
      
  }
  const addText = (textInput, id) => {
    if (textInput){
      setToDos([...toDos.map((todo) => todo.id === id ? {...todo, textValue: textInput } : {...todo})])
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
  

    const onBeforeCapture = () => {
      /*...*/
    };
    const onBeforeDragStart = () => {
      /*...*/
    };
    const onDragStart = () => {
      /*...*/
    };
    const onDragUpdate = () => {
      /*...*/
    };
    const onDragEnd = (result) => {
      console.log(result);
      if (!result.destination) {
        return;
      }
  
      if (result.destination.index === result.source.index) {
        return;
      }
      const items = Array.from(toDos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setToDos(items);
    };

  return (
   
    <div className="App">
      <header>
        <div className="title"> ToDo List: {toDos.length} </div>
      </header>

      <ToDoForm addTask={addTask}/>
      <DragDropContext
          onBeforeCapture={onBeforeCapture}
          onBeforeDragStart={onBeforeDragStart}
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
      >  
      <Droppable droppableId="droppable">
      {(provided) => (
        <div className="wrapper" {...provided.droppableProps} ref={provided.innerRef}>
        {toDos.map((item,index) => {
          return(
            <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div className="item-wrapper" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <div className="item-todo">
                        <label className="container">
                            <input onClick={() => handleToggle(item.id)} type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <div className="item-todo-inner">
                            <div className={ item.complete ? "item-text strike" : "item-text"}>
                            {index}. {item.task}
                            </div>
                            <div 
                                className="item-delete" 
                                onClick={() => deleteTask(item.id)}
                            >
                                {/* <img className="icon" src={svg} alt="icon"></img> */}
                                <ReactLogo />
                            </div>
                        </div>
                        
                    </div> 
                    <TextArea addText={addText} itemId={item.id} value={item.textValue} />
                   
                      {/* <label>Enter value : </label> */}  
                  </div>
                )}
               </Draggable>  
                 
          )
        })}
        {provided.placeholder}
        </div>
      )}
     
      </Droppable>
       </DragDropContext>
    </div>
    
  );
}

export default App;
