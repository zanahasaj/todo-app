import React, { useReducer } from "react";
import AddForm from "../components/AddForm";
import ListItem from "../components/ListItem";
import ToDoContainer from "../components/ToDoContainer";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"


// action is an object that contains two items : type and payload,
// type: what action you want to do.
// payload: object with any data you want to pass to the reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log(state);
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), title: action.payload, completed: false },
        ],
      };
    case "DELETE":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "EDIT":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              title: action.payload.title,
              completed: action.payload.completed,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
function Home() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
  });
  const handleCompleted = (todo) => {
    dispatch({ type: "EDIT", payload: { ...todo, completed: true } });
  };
  return (
    <div>
      <h1>What's the plan for today?</h1>
      <AddForm dispatch={dispatch} />
      <div className="todo_list">
        <ul className="list_items">
          {state.todos.map((todo) => {
            return (
              <li
                className={`${todo.completed ? "completed" : ""} list_bullets`}
                onClick={() => handleCompleted(todo)}
                key={todo.id}
              >
               <span> {todo.title} </span>
                {"               "}
                <AiFillDelete onClick={() => {dispatch({type: "DELETE", payload: todo.id})}}></AiFillDelete>
                <AiFillEdit></AiFillEdit> 
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
