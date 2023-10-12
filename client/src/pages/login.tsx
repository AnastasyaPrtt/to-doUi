import React, { useContext, useState } from "react";
import { Global } from ".";
import styled from "styled-components";
import { Context } from './_app';
import Link from 'next/link';

export const FormAuth = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
  padding: 50px;
  border-radius: 10px;
  background-color: white;
  h1 {
    text-align: center;
    color: #9333ea;
    margin-bottom: 40px;
  }
  input {
    height: 30px;
    margin-bottom: 15px;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
  }
  button {
    background: linear-gradient(120deg, #f6d1fc, #b9d5ff);
    height: 40px;
    background-size: 200% 100%;
    background-position: 100% 0;
    transition: background-position 0.5s;
    border: 0;
    padding: 5px;
    color: white;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-position: 0 0;
    }
  }
  .text {
    cursor: pointer;
    margin-bottom: 10px;
    span {
      color: #9333ea;
      &:hover {
        text-decoration: solid;
      }
    }
  }
`;

const Login = () => {
	const { user } = useContext(Context)
	
	return (
		<>
			<Global />
			<FormAuth>
				<h1>Авторизация</h1>

				<input type="text" placeholder="Введите email ..." />
				<input type="password" placeholder="Введите пароль ..." />
				<div className="text">
					<div>
						Нет аккаунта? <Link href={'/registration'} >Зарегистрируйся!</Link>
					</div>
				</div>
				<button>Войти</button>
			</FormAuth>
		</>
	);
};

export default Login;
