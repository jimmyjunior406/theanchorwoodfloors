import React, { useState } from 'react';

export default function Vinyl(props) {
	return (
		<div class="container mt-28 ml-14 flex justify-center">
			<div class="-mt-14 text-4xl absolute mb-4">Vinyl</div>
			<div class="relative m-8 border-solid rounded-md border-4 border-gray-400 -ml-50px w-5/12 h-3/4">
				<img src="https://i.imgur.com/Uei2Ptu.jpg" />
			</div>
			<div class="relative m-8 -ml-50px w-5/12 h-3/4 text-xl">
				If you're looking for flooring that will last up to 10 or 20 years...
				Vinyl is the way to go. It's also an excellent choice for any room that
				has high foot traffic. Its surface is easy to clean and resistance to
				minor scratches and stains.
			</div>
		</div>
	);
}
