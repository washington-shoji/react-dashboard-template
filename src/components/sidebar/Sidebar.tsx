import './Sidebar.scss';
import { GoOctoface } from 'react-icons/go';
import { RiCloseCircleLine, RiLogoutBoxRLine } from 'react-icons/ri';

import {
	MdOutlineSpaceDashboard,
	MdEvent,
	MdOutlineQueryStats,
	MdOutlineTask,
	MdSettings,
} from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';

export interface ISidebar {
	id: number;
	title: string;
	Icon: IconType;
	internalLink: string;
}

const sidebarData: ISidebar[] = [
	{
		id: 1,
		Icon: MdOutlineSpaceDashboard,
		title: 'dashboard',
		internalLink: '/',
	},
	{
		id: 2,
		Icon: MdEvent,
		title: 'event',
		internalLink: '/event',
	},
	{
		id: 3,
		Icon: MdOutlineQueryStats,
		title: 'stats',
		internalLink: '/stat',
	},
	{
		id: 4,
		Icon: MdOutlineTask,
		title: 'tasks',
		internalLink: '/task',
	},
	{
		id: 5,
		Icon: MdSettings,
		title: 'settings',
		internalLink: '/setting',
	},
];

export interface ISidebarProps {
	sidebarOpen: boolean;
	closeSidebar(): void;
}

export function Sidebar({
	sidebarOpen,
	closeSidebar,
}: ISidebarProps): JSX.Element {
	return (
		<div className={`${sidebarOpen ? 'sidebar_responsive' : ''} sidebar`}>
			<div className='sidebar__header'>
				<GoOctoface className='sidebar__logo' />
				<h1>JSD Dash</h1>
				<RiCloseCircleLine className='sidebar__icon' onClick={closeSidebar} />
			</div>
			<div className='sidebar__menu'>
				{sidebarData.map((data: ISidebar) => {
					const { id, Icon, title, internalLink } = data;
					return (
						<NavLink
							key={id}
							exact
							to={internalLink}
							className='sidebar__link'
							activeClassName='sidebar__link__active'
						>
							<div className='sidebar__link__container'>
								<Icon />
								{title}
							</div>
						</NavLink>
					);
				})}
				<div className='sidebar__logout'>
					<RiLogoutBoxRLine className='sidebar__logout__icon' />
					<Link to={''} className='sidebar__link'>
						Logout
					</Link>
				</div>
			</div>
		</div>
	);
}
