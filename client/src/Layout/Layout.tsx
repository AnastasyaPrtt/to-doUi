import Header from '@/components/Header/Header'
import { Typography } from '@/components/Typography'
import { LayoutInterface } from '@/components/interface'
import { LayoutStyle } from '@/components/style'
import React, { ReactNode } from 'react'
import styled, { createGlobalStyle } from 'styled-components'


export const Layout: React.FC<LayoutInterface> = ({ children }) => {
	return (
		<>
			<LayoutStyle>
				<Typography />
				<div>
					<Header />
					{children}
				</div>
			</LayoutStyle>
		</>
	)
}
//!!!!!!!!!!!!!!!!!!!!!!!!!