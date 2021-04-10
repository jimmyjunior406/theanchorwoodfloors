import React, { useState } from 'react';

export default function PreUnfinished(props) {
	return (
		<div class="container mt-28 ml-14 flex justify-center">
			<div class="-mt-14 text-4xl absolute mb-4">Unfinished</div>
			<div class="relative m-8 border-solid rounded-md border-4 border-gray-400 -ml-50px w-5/12 h-3/4">
				<img src="https://i.imgur.com/TAA0QHa.png" />
			</div>
			<div class="relative m-8 -ml-50px w-5/12 h-3/4 text-xl">
				If your home is still under construction, an unfinished floor is the way
				to go. There's no worry about minor damage while the rest of the home is
				being built, and starting with an unfinished floors gives you a larger
				variety of finishes to choose from.
			</div>
		</div>
	);
}
