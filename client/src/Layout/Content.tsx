import { ListItem } from '@/components/ListItem'
import { Menu } from '@/components/Menu/Menu'
import { TaskProps } from '@/components/interface'
import { MainStyle } from '@/components/style'
import { Context } from '@/pages/_app'
import React, { useContext, useEffect, useState } from 'react'

export const Content: React.FC = () => {
	const { task } = useContext(Context);
	const [renderTasks, setRenderTask] = useState(task.tasks)
	const [modal, setModal] = useState('none')
	const [filter, setFilter] = useState('')




	useEffect(() => {
		setRenderTask(task.tasks)
	}, [task.tasks])
	return (
		<MainStyle>
			<Menu
				onClick={() => setModal('add')}
			/>
			<ListItem
				tasks={renderTasks}
				handleCompleteStatusUpdate={task.completeTask()}
			/>
		</MainStyle>
	)
}
