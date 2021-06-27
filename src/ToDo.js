import svg from "./delete.svg"
import {ReactComponent as ReactLogo} from "./delete.svg";

export default function ToDo({todo, index, toggleTask, deleteTask, color}){

    return (
        <div className="item-todo">
            <label className="container">
                <input onClick={() => toggleTask(todo.id)} type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <div className={ todo.complete ? "item-text strike" : "item-text"}>
               {index}. {todo.task}
            </div>
            <div 
                className="item-delete" 
                onClick={() => deleteTask(todo.id)}
            >
                {/* <img className="icon" src={svg} alt="icon"></img> */}
                <ReactLogo />
            </div>
        </div>
    )
}