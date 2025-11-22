"use client";
import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
export default function WorkingWithArraysAsynchronously() {
    const [todos, setTodos] = useState<any>([]);
    const [errormessage, setErrorMessage] = useState(null);
    const fetchTodos = async () => {
        const todos = await client.fetchTodos();
        setTodos(todos);
    };
    useEffect(() => {
        fetchTodos();
    }, []);
    const removeTodo = async (todo: any) => {
        const updatedTodos = await client.removeTodo(todo);
        setTodos(updatedTodos);
    };
    const createNewTodo = async () => {
        const todos = await client.createNewTodo();
        setTodos(todos);
    };
    const postNewTodo = async () => {
        const updatedTodos = await client.postNewTodo({
            title: "New Posted Todo",
            description: "",
            completed: false
        });
        setTodos(updatedTodos); 
    };
    const deleteTodo = async (todo: any) => {
        try {
        await client.deleteTodo(todo);
        const newTodos = todos.filter((t) => t.id !== todo.id);
        setTodos(newTodos);
        } catch (error:any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };
    const editTodo = (todo: any) => {
        const updatedTodos = todos.map(
        (t) => t.id === todo.id ? { ...todo, editing: true } : t );
        setTodos(updatedTodos);
    };
    const updateTodo = async (todo: any) => {
        try {
        await client.updateTodo(todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error:any) {
            setErrorMessage(error.response.data.message);
        }
    };
    return (
        <div id="wd-working-with-objects-asynchronously">
            <h3>Working With Arrays Asynchronously</h3>
            {errormessage && (<div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">{errormessage}</div>)}
            <h4>
                Todos
                <FaPlusCircle
                    onClick={createNewTodo}
                    className="text-success float-end fs-3"
                />
                <FaPlusCircle
                    onClick={postNewTodo}
                    className="text-primary float-end fs-3 me-3"
                    id="wd-post-todo"
                />
            </h4>
            <ListGroup>
                {todos.map((todo: any) => (
                    <ListGroupItem key={todo.id}>
                        <FaTrash
                            onClick={() => removeTodo(todo)}
                            className="text-danger float-end mt-1"
                            id="wd-remove-todo"
                        />
                        <TiDelete onClick={() => deleteTodo(todo)} className="text-danger float-end me-2 fs-3" id="wd-delete-todo" />
                        <FaPencil onClick={() => editTodo(todo)} className="text-primary float-end me-2 mt-1" />
                        <input
                            type="checkbox"
                            className="form-check-input me-2 float-start"
                            onChange={(e) => {updateTodo({...todo, completed: e.target.checked})}}
                            defaultChecked={todo.completed} 
                        />
                        <FormControl className="w-50 float-start me-2" defaultValue={todo.title} onKeyDown={(e) => {
                            if(e.key === "Enter") {
                                updateTodo({...todo, editing:false});
                            }
                        }}
                        onChange={(e) => updateTodo({...todo, title:e.target.value})}/>
                        <span
                            style={{
                                textDecoration: todo.completed
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {todo.title}
                        </span>
                    </ListGroupItem>
                ))}
            </ListGroup>    
            <hr />
        </div>
    );
}
