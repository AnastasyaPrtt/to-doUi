import React from "react";
import { AllIcon } from "../../../public";
import { ButtonMenu } from "../UI/ButtonMenu";
import { DropdownStyle } from '../style';
import { DropdownProps } from '../interface';


export const Dropdown: React.FC<DropdownProps> = ({ onClick, classNameDrop, filterDone, filterUndone, filterAll }) => {

	return (
		<DropdownStyle className={classNameDrop}>
			<ButtonMenu onClick={() => {
				onClick("All")
				filterAll()
			}}>
				<AllIcon className="icon" />
				All
			</ButtonMenu>
			<ButtonMenu onClick={() => {
				onClick("Done")
				filterDone()
			}} >
				<AllIcon className="icon" />
				Done
			</ButtonMenu>
			<ButtonMenu onClick={() => {
				onClick("Undone")
				filterUndone()
			}}>
				<AllIcon className="icon" />
				Undone
			</ButtonMenu>
		</DropdownStyle >
	);
};
