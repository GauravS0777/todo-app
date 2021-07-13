import React from "react";
import {useState,  useEffect} from "react";
import Inputbox from "./inputbox";
import Todo from "./todo"
import "./app.css"
import axios from 'axios';

const App = () => {
    const [todoList, setTodoList] = useState([]);

    function addTodo(todo){
        setTodoList([
            ...todoList,
            todo
        ]);
    }

    function deleteTodo(_index){
        setTodoList(
            todoList.filter((value, index) => index !== _index)
        );
    }

    useEffect(() => {
        function fetchData(){
            axios.get("http://localhost:5000/api/todos").then((res) =>{
                console.log(res.data.data);
                setTodoList(res.data.data);
            });
        }
        fetchData();
    }, [])

    return(
        <div id="appDiv">
            <h1>To Do List</h1>
            <Inputbox addTodo={addTodo}/>
            <ul>
                {todoList.map((todo, index) => 
                (<Todo key={index} index={index} todo={todo} 
                deleteTodo={deleteTodo}/>))}
            </ul>
        </div>
    )
}

export default App;
