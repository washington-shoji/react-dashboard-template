import { Route, Switch } from 'react-router-dom';
import { Dashboard } from '../dashboard/Dashboard';
import './MainRouter.scss';

export function MainRouter(): JSX.Element {
	return (
		<main className='main'>
			<Switch>
				<Route exact path='/'>
					<Dashboard />
				</Route>
				<Route exact path='/event'>
					<div>Event</div>
				</Route>
				<Route exact path='/stat'>
					<div>Stats</div>
				</Route>
				<Route exact path='/task'>
					<div>Tasks</div>
				</Route>
				<Route exact path='/setting'>
					<div>Settings</div>
				</Route>
			</Switch>
		</main>
	);
}
