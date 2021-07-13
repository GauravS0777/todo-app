import React from "react";
import "./todo.css";
import axios from 'axios';
import {FaTrash} from "react-icons/fa";

const Item = (props) => {
    return(
        <li>
            <p>{props.todo.text}</p>
            <span className="deleteBtn"
            onClick={() => {
                props.deleteTodo(props.index)
                const pk = props.todo["_id"]
                axios.delete("http://localhost:5000/api/todos/" + pk)
            }}><FaTrash /></span>
        </li>
    );
}

export default Item;
