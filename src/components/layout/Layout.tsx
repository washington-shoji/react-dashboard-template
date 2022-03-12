import { useState } from 'react';
import './Layout.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { Main } from '../main/Main';
import { Sidebar } from '../sidebar/Sidebar';
import { TopBar } from '../tobar/TopBar';

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
					<Main />
					<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
				</div>
			</Route>
		</BrowserRouter>
	);
}

export default Layout;
