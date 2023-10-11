import axios from 'axios';

import { ListItem } from '@/components/ListItem';
import { Menu } from '@/components/Menu/Menu';
import { Modal } from '@/components/Modal';
import { TaskProps } from '@/components/interface';
import { MainStyle } from '@/components/style';
import React, { useEffect, useState } from 'react';
import { DeleteIcon, SaveIcon } from '../../public';
import { dateNow } from '@/DateNow';


export const Main: React.FC = () => {
	const [tasks, setTasks] = useState(
		[
			{
				id: 1,
				title: "first task",
				date: "2023-10-04",
				isChecked: false
			},
			{
				id: 2,
				title: "second task",
				date: "2023-10-03",
				isChecked: false
			},
		]
	);

	//TODO получение задач по id
	async function getUser() {
		try {
			const response = await axios.get('http://localhost:5001/api/tasks/4');
			setTasks(response.data)
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	}
	async function createUser() {
		try {
			const response = await axios.post('http://localhost:5001/api/tasks/4', createTask);
			console.log(response)
		} catch (error) {
			console.error(error);
		}
	}

	const [modal, setModal] = useState('none')
	const [filter, setFilter] = useState('')

	const [taskDelete, setTaskDelete] = useState<number>()
	const [createTask, setCreateTask] = useState({ title: '', date: dateNow })

	const [renderTasks, setRenderTasks] = useState(tasks)

	const handleCompleteStatusUpdate = (task: TaskProps) => {
		const newList = tasks.map(item => {
			if (item.id === task.id) {
				item.isChecked = task.isChecked
			}
			return item
		});
		setTasks(newList)
	}

	const createAddTask = () => {
		if (createTask.title == '') return;
		createUser()
		// const newTask = {
		// 	id: Date.now(),
		// 	title: createTask.title,
		// 	date: createTask.date,
		// 	isChecked: false
		// }
		// const newList = [...tasks, newTask]
		// // setTasks(newList)
		// setCreateTask({ title: '', date: '' })
		setModal('none')

	}
	const handleClickEditTask = (task: TaskProps, text: string) => {
		console.log(task);
		setTasks(tasks.map(item => {
			if (item.id == task.id) {
				item.title = text
			}
			return item
		}))
	}
	const handleOpenModalDelete = (task: TaskProps) => {
		setModal('delete')
		setTaskDelete(task.id)
	}
	const handleClickDelete = () => {
		setTasks(tasks.filter(item => item.id !== taskDelete))
		setModal('none')
	}

	useEffect(() => {
		filter == 'all' && setRenderTasks(tasks.filter(task => task))
		filter == 'done' && setRenderTasks(tasks.filter(task => task.isChecked))
		filter == 'undone' && setRenderTasks(tasks.filter(task => !task.isChecked))
		if (filter == 'today') setRenderTasks(tasks.filter(task => task.date === dateNow))

		if (filter == 'date') setRenderTasks(tasks.sort((task1, task2) => {
			if (task1.date > task2.date) return 1
			if (task1.date < task2.date) return -1
			return 0
		}).map(task => task))

	}, [filter, tasks])

	useEffect(() => {
		setRenderTasks(tasks)
	}, [tasks])

	useEffect(() => {
		getUser()
	}, [])

	return <>
		<MainStyle>
			<Menu
				onClick={() => setModal('add')}
				filterToday={() => setFilter('today')}
				filterAll={() => setFilter('all')}
				filterDone={() => setFilter('done')}
				filterUndone={() => setFilter('undone')}
				filterDate={() => setFilter('date')} />
			<ListItem
				tasks={renderTasks}
				handleOpenModalDelete={handleOpenModalDelete}
				handleCompleteStatusUpdate={handleCompleteStatusUpdate}
				handleClickEditTask={handleClickEditTask}
			/>
		</MainStyle>
		{
			modal == 'add' &&
			<Modal title={'Create task'} nameBtn={'Save'} active={modal} onClickClose={() => setModal('none')} onClickSave={createAddTask} IconBtn={<SaveIcon />}>
				<input type="text" placeholder='Enter text...' value={createTask.title} onChange={(e) => setCreateTask(createTask => ({ ...createTask, title: e.target.value }))} />
				<input type="date" value={createTask.date} onChange={(e) => setCreateTask(createTask => ({ ...createTask, date: e.target.value }))} />
			</Modal>
		}
		{
			modal == 'delete' &&
			<Modal title={'Delete task'} nameBtn={'Delete'} active={modal} onClickClose={() => setModal('none')} onClickSave={handleClickDelete} IconBtn={<DeleteIcon />}>
				<h3>Are you sure about deleting this task?</h3>
			</Modal>
		}
	</>

}