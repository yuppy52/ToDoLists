import React, {useState} from "react";

export const InputForm = ({todos, setTodos}) => {

    const [inputText, setInputText] = useState(""); // 入力された値を保持するstate

    const handleSubmit = (e) => {
        e.preventDefault(); // 再レンダリングを防ぐ
        setTodos([...todos,{id: todos.length ,text: inputText, completed: false}]); // todosの配列にinputTextを追加
        console.log(todos);
        setInputText(""); // inputTextを空にする
    }

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    return (
        <div className="inputForm">
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputText} onChange={handleChange} />
                <button>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
            </form>
        </div>
    );
}