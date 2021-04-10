import React, { useState } from 'react';

export default function About(props) {
	return (
		<div class="container mt-28 ml-14 flex justify-center">
			<div class="-mt-14 text-4xl absolute mb-4">What We Do Differently</div>
			<div class="relative m-8 border-solid rounded-md border-4 border-gray-400 -ml-50px w-6/12 h-full">
				<img src="https://i.imgur.com/5eiUyDX.jpg" />
			</div>
			<div class="relative m-8 -ml-50px w-5/12 h-3/4 text-xl">
				It doesn't make sense to us that you should have to determine what color
				your entire floor will be stained based on a tiny 4x4 sample. We offer a
				unique stain test that allows you to see the true color of the stain on
				your floor, along with other samples that you might have a hard time
				deciding on. Spend the weekend looking at larger 1'x4' samples to make
				your choice with a little more confidence.
			</div>
		</div>
	);
}
