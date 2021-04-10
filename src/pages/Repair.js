import React, { useState } from 'react';

export default function Repair(props) {
	return (
		<div class="container mt-28 ml-14 flex justify-center">
			<div class="-mt-14 text-4xl absolute mb-4">Repair</div>
			<div class="relative m-8 border-solid rounded-md border-4 border-gray-400 -ml-50px w-5/12 h-3/4">
				<img src="https://i.imgur.com/90HAOLY.png?1" />
			</div>
			<div class="relative m-8 -ml-50px w-5/12 h-3/4 text-xl">
				Our repair services are second to none. Anchor Wood Flooring can address
				any number of problems that may be affecting the look, quality and
				functionality of your hardwood floors. Cracks, pits, scratches, dents,
				water damage are our specialty.
			</div>
		</div>
	);
}
