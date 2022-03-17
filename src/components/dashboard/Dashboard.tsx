import './Dashboard.scss';
import { GoOctoface } from 'react-icons/go';
import {
	MdSubscriptions,
	MdPreview,
	MdVideoLibrary,
	MdWifi,
} from 'react-icons/md';
import { IconType } from 'react-icons';

export function Dashboard() {
	return (
		<div className='dashboard__container'>
			<MainHeader />
			<MainCardContainer>
				{mainCardData.map((cardData: IMainCardProps) => {
					const { id, CardIcon, cardTitle, cardInfo } = cardData;
					return (
						<MainCard
							key={id}
							CardIcon={CardIcon}
							cardTitle={cardTitle}
							cardInfo={cardInfo}
						/>
					);
				})}
			</MainCardContainer>
		</div>
	);
}

export function MainHeader(): JSX.Element {
	return (
		<div className='main__header'>
			<GoOctoface className='main__logo' />
			<div className='main__title'>
				<h1>Hello JSD</h1>
				<p>Welcome to your admin dashboard</p>
			</div>
		</div>
	);
}

export interface IChildrenProps {
	children: React.ReactNode;
}
export function MainCardContainer({ children }: IChildrenProps): JSX.Element {
	return <div className='main__card__container'>{children}</div>;
}

export interface IMainCardProps {
	id?: number;

	CardIcon: IconType;
	cardTitle: string;
	cardInfo: number;
}

export const mainCardData: IMainCardProps[] = [
	{
		id: 1,
		CardIcon: MdSubscriptions,
		cardTitle: 'Subscriber',
		cardInfo: 1000,
	},

	{
		id: 2,
		CardIcon: MdVideoLibrary,
		cardTitle: 'Videos',
		cardInfo: 100,
	},
	{
		id: 3,
		CardIcon: MdPreview,
		cardTitle: 'Viewers',
		cardInfo: 10000,
	},
	{
		id: 4,
		CardIcon: MdWifi,
		cardTitle: 'Good vibes',
		cardInfo: 10000000000000,
	},
];

export function MainCard({
	CardIcon,
	cardTitle,
	cardInfo,
}: IMainCardProps): JSX.Element {
	return (
		<div className='main__card'>
			<CardIcon className='main__card__icon' />
			<div className='main__card__content'>
				<p className='main__card__title'>{cardTitle}</p>
				<span className='main__card__info'>{cardInfo}</span>
			</div>
		</div>
	);
}
