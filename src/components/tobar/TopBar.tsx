import React from 'react';
import './TopBar.scss';
import { GiHamburgerMenu, GiPerson, GiCog } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export interface ITopBarMenu {
	id: number;
	title?: string;
	link: string;
	icon?: React.FC;
}

const leftNavData: ITopBarMenu[] = [
	{
		id: 1,
		title: 'Link1',
		link: '#',
	},
	{
		id: 2,
		title: 'Link2',
		link: '#',
	},
	{
		id: 3,
		title: 'Link3',
		link: '#',
	},
];

const rightNavData: ITopBarMenu[] = [
	{
		id: 1,
		icon: GiPerson,
		link: '#',
	},
	{
		id: 2,
		icon: GiCog,
		link: '#',
	},
];

export interface ITopBarProps {
	sidebarOpen: boolean;
	openSidebar(): void;
}
export function TopBar({ openSidebar }: ITopBarProps): JSX.Element {
	return (
		<nav className='top__navbar'>
			<div className='navbar__icon__wrapper' onClick={openSidebar}>
				<GiHamburgerMenu className='navbar_icon' />
			</div>
			<div className='navbar__left'>
				{leftNavData.map((data: ITopBarMenu) => {
					const { id, link, title } = data;
					return (
						<Link key={id} to={link} className='navbar__left__link active_link'>
							{title}
						</Link>
					);
				})}
			</div>
			<div className='navbar__right'>
				{rightNavData.map((data: ITopBarMenu) => {
					const { id, link, icon } = data;
					const Icon = icon;
					return (
						<Link
							key={id}
							to={link}
							className='navbar__right__link nav_right_icon'
						>
							{Icon && <Icon />}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
