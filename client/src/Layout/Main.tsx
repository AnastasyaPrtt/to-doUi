import { ListItem } from '@/components/ListItem';
import { Menu } from '@/components/Menu/Menu';
import { Modal } from '@/components/Modal';
import { TaskProps } from '@/components/interface';
import { MainStyle } from '@/components/style';
import React, { useEffect, useState } from 'react';
import { DeleteIcon, SaveIcon } from '../../public';


export const Main: React.FC = () => {
	const [modalAdd, setModalAdd] = useState(false)
	const [modalDelete, setModalDelete] = useState(false)
	const [taskDelete, setTaskDelete] = useState()
	const [text, setText] = useState('')
	const [date, setDate] = useState('')
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
		if (text == '' || text == ' ') {
			return;
		}
		const newTask = {
			id: Date.now(),
			title: text,
			date: date,
			isChecked: false
		}
		const newList = [...tasks, newTask]
		setTasks(newList)
		setText('')
		setDate('')
		setModalAdd(false)

	}
	const handleClickEditTask = (task, text) => {
		console.log(task);
		setTasks(tasks.map(item => {
			if (item.id == task.id) {
				item.title = text
			}
			return item
		}))
	}
	const handleCloseModal = () => {
		setModalAdd(false)
		setModalDelete(false)
	}
	const handleClickOpenModal = () => {
		setModalAdd(true)
	}
	const handleOpenModalDelete = (task) => {
		setModalDelete(true)
		setTaskDelete(task)
	}
	const handleClickDelete = () => {
		setTasks(tasks.filter(item => item.id !== taskDelete))
		setModalDelete(false)
	}
	const filterToday = () => {
		const dateNow = String(new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + new Date().getMonth() + 1 : new Date().getMonth() + 1) + '-' + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()));
		setRenderTasks(tasks.filter(task => task.date == dateNow))
	}
	const filterDate = () => {
		setRenderTasks(tasks.sort((task1, task2) => {
			if (task1.date > task2.date) return 1
			if (task1.date < task2.date) return -1
			return 0
		}).map(task => task))
	}
	const filterAll = () => {
		setRenderTasks(tasks.filter(task => task))
	}
	const filterDone = () => {
		setRenderTasks(tasks.filter(task => task.isChecked))
	}
	const filterUndone = () => {
		setRenderTasks(tasks.filter(task => !task.isChecked))
	}

	useEffect(() => {
		setRenderTasks(tasks)
	}, [tasks])

	// useEffect(()=>{
	// 	constg sortedTasks = [...tasks]
	// 	if(filter.today){
	// 		sortedTasks.filter(today)
	// 	}
	// 	if(filter.status !=='all') {
	// 		sortedTasks.filter(filter.status)
	// 	}
	// 	sortedTask.sort(filter.date)
	// },[
	// 	filter,tasks
	// ])

	return <>
		<MainStyle>
			<Menu onClick={handleClickOpenModal} filterToday={filterToday} filterAll={filterAll} filterDone={filterDone} filterUndone={filterUndone} filterDate={filterDate} />
			<ListItem
				tasks={renderTasks}
				handleOpenModalDelete={handleOpenModalDelete}
				handleCompleteStatusUpdate={handleCompleteStatusUpdate}
				handleClickEditTask={handleClickEditTask}
			/>
		</MainStyle>
		{
			modalAdd ? <Modal title={'Create task'} nameBtn={'Save'} active={modalAdd} onClickClose={handleCloseModal} onClickSave={createAddTask} IconBtn={<SaveIcon />}>
				<input type="text" placeholder='Enter text...' value={text} onChange={(e) => setText(e.target.value)} />
				<input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
			</Modal> : null
		}
		{
			modalDelete ? <Modal title={'Delete task'} nameBtn={'Delete'} active={modalDelete} onClickClose={handleCloseModal} onClickSave={handleClickDelete} IconBtn={<DeleteIcon />}>
				<h3>Are you sure about deleting this task?</h3>
			</Modal> : null
		}
	</>

}