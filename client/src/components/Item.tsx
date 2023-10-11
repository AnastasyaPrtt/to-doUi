import React, { useRef, useState } from 'react';
import { CheckedIcon, DeleteIcon, EditIcon, InfoIcon } from '../../public';
import { TaskItemProps } from './interface';
import { DropdownBtnStyled, ItemStyle } from './style';
import useOnClickOutside from './useOnClickOutside';


export const Item: React.FC<TaskItemProps> = ({ handleCompleteStatusUpdate, handleClickEditTask, onClick, task }) => {

	const [isEdited, setIsEdited] = useState(true);
	const [isComplete, setIsComplete] = useState(task.isChecked)
	const [isDropdown, setDropdown] = useState(false)
	const [text, setText] = useState(task.title)


	const handleCheckBox = () => {
		setIsComplete(!isComplete);
		task.isChecked = !isComplete;
		handleCompleteStatusUpdate(task)
	}
	const handleEditClick = () => {
		setIsEdited(!isEdited)
	}
	const handleEditText = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value)
		handleClickEditTask(task, text)
	}
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			setIsEdited(!isEdited)
		}
	}
	const ref = useRef();
	useOnClickOutside(ref, () => setDropdown(false));

	return <>
		<ItemStyle>
			<label>
				<span className={isComplete ? 'icon active' : 'icon'}>
					<input type="checkbox" checked={isComplete} onChange={handleCheckBox} />
					<CheckedIcon />
				</span>
				{!isEdited ?
					<input type="text"
						onChange={handleEditText}
						onKeyDown={handleKeyDown}
						value={text}
						autoFocus />
					:
					<h3 onClick={handleEditClick}>
						{text}
					</h3>}
			</label>

			<div className='task-info'>
				<p>{task.date}</p>
				<div onClick={() => setDropdown(true)}>
					<InfoIcon />

					<DropdownBtnStyled ref={ref} className={isDropdown ? 'active' : ''}>
						<button onClick={handleEditClick}>
							<EditIcon />
						</button>
						<button onClick={() => onClick(task)}>
							<DeleteIcon />
						</button>
					</DropdownBtnStyled>

				</div>
			</div>
		</ItemStyle>
	</>
}