import React, { useRef, useState } from "react";
import { AddTaskIcon, AllIcon, CalendarIcon, DateIcon } from "../../../public";
import { Dropdown } from './Dropdown';
import { MenuStyle } from '../style';
import { ButtonMenu } from '../UI/ButtonMenu';
import useOnClickOutside from '../useOnClickOutside';
import { MenuProps } from '../interface';



export const Menu: React.FC<MenuProps> = ({ onClick, filterToday, filterDone, filterUndone, filterAll, filterDate }) => {
	const [activeBtn, setActiveBtn] = useState("All");
	const [dropdown, setDropdown] = useState(false);

	const handleClickOpenModal = () => {
		setDropdown(true)
	}
	const dropdownName = (name: string) => {
		setActiveBtn(name)
		setDropdown(false)
	}
	const refDropdown = useRef();
	useOnClickOutside(refDropdown, () => setDropdown(false));

	return (
		<MenuStyle>
			<div>
				<ButtonMenu onClick={() => filterToday()}>
					<CalendarIcon className='icon' />
					Today
				</ButtonMenu>
				<ButtonMenu onClick={() => handleClickOpenModal()}>
					<AllIcon className='icon' />
					{activeBtn}
				</ButtonMenu>
				<div ref={refDropdown}>
					<Dropdown
						onClick={dropdownName}
						filterDone={filterDone}
						filterUndone={filterUndone}
						filterAll={filterAll}
						classNameDrop={dropdown ? 'active' : ''}
					/>
				</div>


				<ButtonMenu onClick={() => filterDate()}>
					<DateIcon className='icon' />
					Date
				</ButtonMenu>

			</div>
			<button className='btnAdd' onClick={(e) => onClick(e.target)}>
				<AddTaskIcon className='icon' />
				Add task
			</button>
		</MenuStyle>
	);
};
