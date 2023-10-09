import { ReactNode } from 'react'

export interface TaskProps {
	id: number,
	title: string,
	date: string,
	isChecked: boolean,
	order: 0 | 1,
}

export interface TaskItemProps {
	task: TaskProps,
	handleCompleteStatusUpdate: () => TaskProps,
	handleClickEditTask: () => TaskProps
	onClick: () => any
}
export interface ListItemProps {
	tasks: TaskProps[],
	handleCompleteStatusUpdate: () => TaskProps,
	handleOpenModalDelete: () => void,
	handleClickEditTask: () => TaskProps
}
export interface taskProps {
	id: number,
	title: string,
	isChecked: boolean,
	order: number
}
export interface modalProps {
	children: ReactNode,
	title: string,
	nameBtn: string,
	active: boolean,
	IconBtn: ReactNode,
	onClickSave: () => void,
	onClickClose: () => void
}
export interface newTaskProps {
	title: string,
	date: string,
}
export interface DropdownProps {
	onClick: (name: string) => void,
	classNameDrop: string,
	filterDone: () => void,
	filterUndone: () => void,
	filterAll: () => void,
}
export interface MenuProps {
	onClick: () => void,
	filterToday: () => void,
	filterDone: () => void,
	filterUndone: () => void,
	filterAll: () => void,
	filterDate: () => void,
}

export interface LayoutInterface {
	children: ReactNode
}