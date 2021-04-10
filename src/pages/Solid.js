import React, { useState } from 'react';

export default function Solid(props) {
	return (
		<div class="container mt-28 ml-14 flex justify-center">
			<div class="-mt-14 text-4xl absolute mb-4">Solid</div>
			<div class="relative m-8 border-solid rounded-md border-4 border-gray-400 -ml-50px w-5/12 h-3/4">
				<img src="https://i.imgur.com/7pmqOdY.png" />
			</div>
			<div class="relative m-8 -ml-50px w-5/12 h-3/4 text-xl">
				Hardwood floors make a beautiful addition to your home. Consult with us
				on the variety of species to choose from to find the perfect match for
				your home. Anchor Wood Flooring offers a satisfaction garuntee on all
				solid floor installations.
			</div>
		</div>
	);
}
