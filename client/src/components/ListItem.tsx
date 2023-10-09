import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { ListItemProps } from "./interface";
import { Item } from "./Item";
import { ListItemStyle } from './style';



export const ListItem: React.FC<ListItemProps> = ({
	tasks,
	handleOpenModalDelete,
	handleCompleteStatusUpdate,
	handleClickEditTask
}) => {
	return (
		<>
			<ListItemStyle>
				<ul>
					{tasks.map((task) => (
						<Item
							key={task.id}
							task={task}
							onClick={handleOpenModalDelete}
							handleCompleteStatusUpdate={handleCompleteStatusUpdate}
							handleClickEditTask={handleClickEditTask}
						/>
					))}
				</ul>
			</ListItemStyle>
		</>
	);
};
