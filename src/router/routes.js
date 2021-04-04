import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Installation from '../pages/Installation';
import Refinish from '../pages/Refinish';
import PreUnfinished from '../pages/PreUnFinished.js';
import SolidEngineered from '../pages/SolidEngineered';
import Vinyl from '../pages/Vinyl';
import Repair from '../pages/Repair';
import Gallery from '../pages/Gallery';

const routes = [
	{
		Component: Installation,
		key: 'Installation',
		path: '/installation'
	},
	{
		Component: Gallery,
		key: 'Gallery',
		path: '/gallery'
	},
	{
		Component: Refinish,
		key: 'Refinish',
		path: '/refinish'
	},
	{
		Component: PreUnfinished,
		key: 'Prefinished/Unfinished',
		path: '/prefinishedUnfinished'
	},
	{
		Component: SolidEngineered,
		key: 'Solid/Engineered',
		path: '/solidEngineered'
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
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
