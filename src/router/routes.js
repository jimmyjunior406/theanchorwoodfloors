import React from 'react';
import Home from '../pages/Home';
import Installation from '../pages/Installation';
import Refinish from '../pages/Refinish';
import Unfinished from '../pages/UnFinished.js';
import Solid from '../pages/Solid';
import Vinyl from '../pages/Vinyl';
import Repair from '../pages/Repair';
import About from '../pages/About';
const routes = [
	{
		Component: Installation,
		key: 'Installation',
		path: '/installation'
	},
	{
		Component: Refinish,
		key: 'Refinish',
		path: '/refinish'
	},
	{
		Component: Unfinished,
		key: 'Unfinished',
		path: '/unfinished'
	},
	{
		Component: Solid,
		key: 'Solid',
		path: '/solid'
	},
	{
		Component: Repair,
		key: 'Repair/Demolition',
		path: '/repair'
	},
	{
		Component: Vinyl,
		key: 'Vinyl LVP',
		path: '/vinyl'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	}
];

export default routes;
