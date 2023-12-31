import React from "react";

export const TodoList = ({todos, setTodos}) => {

    const handleDone = (id) => {
        //完了処理
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
    }

    const handleDelete = (id) => {
        //リスト削除処理
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div className="todoList">
            <div className="todos">
                {todos.map((todo, index) => (
                    <div className={`todo ${todo.completed && "completed"}`} key={index}>
                        <div className="todoText">
                            <span>{todo.text}</span>
                        </div>
                        <div className="icons">
                            <button onClick={() => handleDone(todo.id)}>
                                <i className="fa-solid fa-check"></i>
                            </button>
                            <button onClick={() => handleDelete(todo.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};