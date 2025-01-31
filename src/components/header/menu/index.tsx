import { MenuItems } from '@/lib/Constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function Menu({ isLight = true }: { isLight: boolean }) {
	const MenuLink = ({ href, title }: { href: string; title: string }) => {
		return (
			<>
				<Link href={href} className={cn('text-xl font-medium', { 'text-white': isLight })}>
					{title}
				</Link>
			</>
		)
	}
	return (
		<>
			<div className="lg:flex flex-row space-x-10 hidden">
				{MenuItems.map((item, index) => {
					return <MenuLink href={item.link} key={index} title={item.text} />
				})}
			</div>
		</>
	)
}

export default Menu
