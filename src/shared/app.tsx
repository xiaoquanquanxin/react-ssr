import Home from "./components/home";

const React = require('react');
import {Routes, Route, Outlet, Link} from 'react-router-dom';
import About from './components/about';

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
			<Outlet/>
		</>
	);
};

const App = () => {
	return (
		<div>
			<h1>小学生</h1>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index element={<Home/>}/>
					<Route path="about" element={<About/>}/>
				</Route>
			</Routes>
		</div>
	);
};
export default App;