import { Main } from '@/Layout/Main';
import { Modal } from '@/components/Modal';
import { useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };
  body{
    background: linear-gradient(75deg, #F6D1FC, #B9D5FF);
    font-family: 'Roboto', sans-serif;
    padding: 254px 90px;
    margin: auto 90px;
  };
`


export default function Home() {

	return (
		<>
			<Global />
			<Main />
		</>
	);
}
