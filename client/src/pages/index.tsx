import { Modal } from '@/components/Modal';
import styled, { createGlobalStyle } from "styled-components";
import { Layout } from '@/Layout/Layout';
import { useContext, useEffect } from 'react';
import { Context } from './_app';
import Router, { useRouter } from 'next/router';
import { Content } from '@/Layout/Content';

export const Global = createGlobalStyle`
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
	const { user } = useContext(Context)
	const router = useRouter();
	useEffect(() => {
		if (!user.isAuth) {
			router.push('/login', undefined, { shallow: true })
		}
	}, [])

	return (
		<>
			<Global />
			<Layout>
				<Content />
			</Layout>
		</>
	);
}
