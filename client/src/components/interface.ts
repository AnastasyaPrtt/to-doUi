import { ReactNode } from 'react'

export interface TaskProps {
	id: number,
	title: string,
	date: string,
	isChecked: boolean
}

export interface TaskItemProps {
	task: TaskProps,
	handleCompleteStatusUpdate: (task:TaskProps) => void,
	handleClickEditTask: (task: TaskProps, text:string) => void
	onClick: (task:TaskProps) => any
}
export interface ListItemProps {
	tasks: TaskProps[],
	handleCompleteStatusUpdate: (task:TaskProps) => void,
	handleOpenModalDelete: (task:TaskProps) => void,
	handleClickEditTask: (task: TaskProps, text:string) => void
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
	active: string,
	IconBtn: ReactNode,
	onClickSave: (event: React.MouseEvent<HTMLElement>) => void,
	onClickClose: (event: React.MouseEvent<HTMLElement>) => void
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