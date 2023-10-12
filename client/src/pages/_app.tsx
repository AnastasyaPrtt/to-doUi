import { Layout } from '@/Layout/Layout'
import taskStore from '@/store/taskStore'
import userStore from '@/store/userStore'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createContext } from 'react'

export const Context = createContext(null)
export default function App({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<title>To Do Ui</title>
		</Head>
		<Context.Provider value={{
			user: new userStore(),
			task: new taskStore()
		}}>
			<Component {...pageProps} />
		</Context.Provider>

	</>
}
