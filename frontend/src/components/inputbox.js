import React from "react";
import {useState} from "react";
import "./inputbox.css"
import {VscAdd} from "react-icons/vsc";
import axios from 'axios';

const Inputbox = (props) => {

    const [text, setText] = useState("");

    function changeInInput(event){
        setText(event.target.value);
    }

    function buttonClicked(event){
        event.preventDefault();
        console.log("Hi");
        axios.post("http://localhost:5000/api/todos", {text: text})
        .then((res) => {
            props.addTodo(res.data.data);
        });
        setText("");
    }

    return(
        <form>
            <input type="text" name="todoText" placeholder="Write to do..." 
            id="inputArea" onChange={changeInInput} value={text}/>
            <button onClick={buttonClicked}><VscAdd /></button>
        </form>
    );
}

export default Inputbox;
