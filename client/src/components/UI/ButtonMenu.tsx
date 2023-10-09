import { ButtonMenuProps } from './Ui.interface'
import { FC, MouseEventHandler, ReactNode } from 'react'
import styled from 'styled-components'
import { ButtonMenuStyle } from '../style'



export const ButtonMenu: React.FC<ButtonMenuProps> = ({ children, onClick, className }) => {
	return <>
		<ButtonMenuStyle className={className} onClick={onClick}>
			{children}
		</ButtonMenuStyle>
	</>
}

