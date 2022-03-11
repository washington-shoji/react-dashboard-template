import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { TopBar } from '../tobar/TopBar';

interface ILayoutProps {}

function Layout(): JSX.Element {
	return (
		<BrowserRouter>
			<Route>
				<div className='layout'>
					<TopBar />
					<div>
						<div>Routes</div>
					</div>
					<div>Sidebar</div>
				</div>
			</Route>
		</BrowserRouter>
	);
}

export default Layout;
