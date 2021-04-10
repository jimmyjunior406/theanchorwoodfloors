import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<div>
			<nav className="static mx-auto bg-gray-200">
				<div className="py-3 px-6 flex justify-around text-gray-700">
					<img
						class="absolute m-11 left-0 max-w-xlg max-h-20"
						src="https://i.imgur.com/QlP6I3t.png"
					></img>
					603-598-2332
					{props.routes.map(({ key, path }) => (
						<Link key={key} to={path}>
							{key}
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
