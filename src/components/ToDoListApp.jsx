import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { InputForm } from "./InputForm";
import { TodoList } from "./TodoList";
import styled from 'styled-components';

export const ToDoListApp = () => {
    return (
        <div>
            <SHeader>
                <h1>ToDoList</h1>
                <InputForm />
                <TodoList />
            </SHeader>
        </div>
    );
}

const SHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;