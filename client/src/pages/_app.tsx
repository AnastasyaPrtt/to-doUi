import { Layout } from '@/Layout/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<title>To Do Ui</title>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
		</Head>
		<Layout>
			<Component {...pageProps} />
		</Layout>

	</>

}
