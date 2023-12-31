import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { InputForm } from "./InputForm";
import { TodoList } from "./TodoList";
import styled from 'styled-components';

export const Title = () => {

    const [user, setUser] = useState("");
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
                setLoading(false);
            });
        }
    , []);

    const logout  = async () => {
        await signOut(auth);
    }

    return (
        <div>
            <SHeader>
                <h1>ToDoList</h1>
                {!loading && (
                    <>
                {user ? (
                    <>
                    <p>{user.email}</p>
                    <button onClick={logout}>ログアウト</button>
                    </>
                ) : (
                    <p><br></br></p>
                )
                }
                {user ? (
                    <div>
                        <InputForm todos={todos} setTodos={setTodos}/>
                        <TodoList todos={todos} setTodos={setTodos}/>
                    </div>
                ) : (
                    // loginのページに飛ばす
                    <StyledDiv>
                        <button onClick={() => window.location.href = '/login'}>ログイン</button><br></br>
                        <button onClick={() => window.location.href = '/register'}>新規登録</button>
                    </StyledDiv>
                )}
                </>
                )}
            </SHeader>
        </div>
    );
};

const SHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);

    button {
        padding: 0.5rem;
        width: 300px;
        border: 1px solid #ddd;
        border-radius: 5px;
        cursor: pointer;
    }
`;
