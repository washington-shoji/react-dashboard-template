import { useState } from 'react';
import './Layout.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { Sidebar } from '../sidebar/Sidebar';
import { TopBar } from '../tobar/TopBar';
import { MainRouter } from '../router/MainRouter';

function Layout(): JSX.Element {
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

	function openSidebar(): void {
		setSidebarOpen(true);
	}

	function closeSidebar(): void {
		setSidebarOpen(false);
	}
	return (
		<BrowserRouter>
			<Route>
				<div className='container'>
					<TopBar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
					<MainRouter />
					<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
				</div>
			</Route>
		</BrowserRouter>
	);
}

export default Layout;
