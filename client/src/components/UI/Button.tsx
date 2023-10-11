import { ButtonInterface } from './Ui.interface'
import { ButtonStyle } from '../style'



export const Button: React.FC<ButtonInterface> = ({ children, name, onClick }) => {

	const handleClick = (event: EventTarget) => {
		onClick(event)
	}

	return <>
		<ButtonStyle $name={name} onClick={handleClick}>
			{children}
		</ButtonStyle>
	</>
}  