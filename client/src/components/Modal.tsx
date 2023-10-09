import React, { FC, useState } from "react";
import { Button } from "./UI/Button";
import { modalProps } from "./interface";
import { ModalStyle, ModalWrapStyle } from './style';
import { CloseIcon } from '../../public';



export const Modal: FC<modalProps> = ({
	active,
	title,
	children,
	nameBtn,
	onClickSave,
	onClickClose,
	IconBtn
}) => {

	return (
		<ModalWrapStyle className={active ? "active" : ""}>
			<ModalStyle>
				<div className="header-modal">
					<h3>{title}</h3>
				</div>
				<div className="body-modal">{children}</div>
				<div className="footer-modal">
					<Button name={nameBtn} onClick={(e) => onClickSave(e.target)}>
						{IconBtn}
						{nameBtn}
					</Button>
					<Button name={"Close"} onClick={(e) => onClickClose(e.target)}>
						<CloseIcon />
						{"Close"}
					</Button>
				</div>
			</ModalStyle>
		</ModalWrapStyle>
	);
};
