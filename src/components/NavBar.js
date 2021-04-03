import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<div>
			<nav className="mx-auto bg-gray-200">
				<div className="py-3 px-6 flex justify-around text-gray-700">
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
