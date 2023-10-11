import { MouseEvent, MouseEventHandler, ReactNode } from 'react';

export interface ButtonInterface {
	children: ReactNode,
	name: string,
	onClick: (event: EventTarget) => void
};


export interface TaskProps {
	id: string | number,
	title: string,
	date: Array<string>,
	isChecked: boolean,
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}
export interface buttonProps {
	id: number | string,
	name: string,
	isActive: boolean
}

export interface ButtonMenuProps {
	children: ReactNode,
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
	className?: string,
	//MouseEvent<HTMLButtonElement, MouseEvent>
}