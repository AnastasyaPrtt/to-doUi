import { MouseEvent, MouseEventHandler, ReactNode } from 'react';

export interface ButtonInterface {
	children: ReactNode,
	name: 'add task' | 'delete' | 'save' | 'close',
	onClick: () => void
};


export interface TaskProps {
	id: string | number,
	title: string,
	date: Array<string>,
	isChecked: boolean,
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}
export interface buttonProps {
	id: number | string,
	name: string,
	isActive: boolean
}

export interface ButtonMenuProps {
	children: ReactNode,
	onClick: (event: MouseEvent<HTMLButtonElement>) => void,
	className?: string,
	//MouseEvent<HTMLButtonElement, MouseEvent>
}