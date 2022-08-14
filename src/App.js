import React, {useState, useEffect} from 'react';
import './App.css';
//import component
import Form from './Component/Form';
import TodoList from './Component/TodoList'

function App() {
 const [inputText, setInputText] = useState("");
 const [todos, setTodos] = useState([]);
 const [status, setStatus] = useState("all");
 const [filteredTodos, setFilteredTodos] = useState([]);
 useEffect(() => {
  filterHandler()
  saveLocalTodos()
}, [todos, status]);
 const filterHandler = () => {
  switch(status){
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
    case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default:
        setFilteredTodos(todos);
        break;
  }
 };
const saveLocalTodos = () => {
  if(todos.length > 0){
    localStorage.setItem('todos', JSON.stringify([]))
  }
  else{
    localStorage.setItem('todos', JSON.stringify(todos))
    }
  };

  return (
    <div className="App">
      <header><h1>Todo List</h1></header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText}  setInputText={setInputText} setStatus={setStatus}  />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
