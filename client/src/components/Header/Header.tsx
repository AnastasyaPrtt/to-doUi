import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const HeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	width: 672px;
	background: #f4f4f4;
	border-radius: 10px;
	padding: 12px 16px;
	margin-bottom: 30px;
	color: #9333EA;

	& h2{
		font-size: 20px;
		font-weight: 700;
	}
	& p{
		font-size: 16px;
		font-weight: 400;
	}
`

const Header = (): JSX.Element => {
	return (
		<>
			<HeaderContainer>
				<h2>To-Do</h2>
				<p>userName</p>
				<Image
					src='/userIcon.svg'
					alt='userIcon'
					width={16}
					height={16}
				/>
			</HeaderContainer>
		</>
	)
}

export default Header