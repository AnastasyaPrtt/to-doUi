import { Context } from '@/pages/_app'
import React, { useContext } from 'react'

export const Content = () => {
	const { task } = useContext(Context)
	return <>
		{task.tasks.map(task =>
			<div key={task.id}>
				{task.title}
			</div>
		)}
	</>
}
