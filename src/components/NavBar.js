import React from 'react';
import { Link } from 'react-router-dom';
import { SiInstagram } from 'react-icons/fa';

const NavBar = props => {
	return (
		<nav class="mx-auto bg-gray-200">
			<div class="py-4 px-7 flex justify-around text-gray-700">
				{props.routes.map(({ key, path }) => (
					<Link key={key} to={path}>
						{key}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default NavBar;
