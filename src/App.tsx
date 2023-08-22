import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Friends from './components/Friends';
import Chat from './components/Chat';
import Video from './components/Video';
import Setting from './components/Setting';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<header className="box-border px-12 py-6 w-full overflow-auto">
					<ul className="float-right">
						<li className="inline-block px-2">
							<Link to="/">Home</Link>
						</li>
						<li className="inline-block px-2">
							<Link to="/login">Login</Link>
						</li>
						<li className="inline-block px-2">
							<Link to="/logout">Logout</Link>
						</li>
						<li className="inline-block px-2">
							<Link to="/register">Register</Link>
						</li>
					</ul>
				</header>
				<section className="box-border px-12 w-full">
					<Routes>
						<Route path="/" element={<Layout children={<Friends />} />}/>
						<Route path="/friends" element={<Layout children={<Friends />} />}/>
						<Route path="/chat" element={<Layout children={<Chat />} />}/>
						<Route path="/video" element={<Layout children={<Video />} />}/>
						<Route path="/setting" element={<Layout children={<Setting />} />}/>
						<Route path="/login" element={<div>login</div>}/>
						<Route path="/logout" element={<div>logout</div>}/>
						<Route path="/register" element={<div>register</div>}/>
					</Routes>
				</section>
			</BrowserRouter>
		</div>
	);
}

export default App;
