import React, {useEffect, useState} from "react";
import { createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import styled from 'styled-components';

export const Register = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            alert('登録成功');
        } catch (error) {
            alert('登録エラー');
        }
    }

    const [user, setUser] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    return (
        <div>
            {user ? (
                <Navigate to="/"/>
            ) : (
                <StyledDiv>
                    <h1>ToDoList</h1>
                    <br></br>
                    <Sform onSubmit={handleRegister}>
                        <input name="email" type="email" placeholder="Email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)}/>
                        <input name="password" type="password" placeholder="Password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)}/>
                        <button type="submit">登録</button>
                    </Sform>
                    <BaseButton>
                        <button onClick={() => window.location.href = '/login'}>ログイン</button>
                    </BaseButton>  
                </StyledDiv>
            )}
        </div>
    );
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Sform = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3rem;
border: 1px solid #ddd;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0,0,0,0.2);

input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    padding: 0.5rem;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
}
`;

const BaseButton = styled.div`
margin-top: 1rem;
`;