import React, { useEffect, useState, } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {        
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert('ログインエラー', error);
    }
  };


  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);


  return (
    <div>
        {user? (
         <Navigate to={'/'}/>
        ) : (
            <StyledDiv>
                <h1>ToDoList</h1>
                <br></br>
                <Sform onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">ログイン</button>
                </Sform>
                {/* *新規登録は */}
                <BaseButton>
                    <button onClick={() => window.location.href = '/register'}>新規登録</button>
                </BaseButton>    
            </StyledDiv>
        )}
    </div>
  );
};

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