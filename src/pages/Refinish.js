import React, { useState } from 'react';

export default function Contact(props) {
	return (
		<div class="container mt-28 ml-14 flex justify-center">
			<div class="-mt-14 text-4xl absolute mb-4">Refinish</div>
			<div class="relative m-8 border-solid rounded-md border-4 border-gray-400 -ml-50px w-5/12 h-3/4">
				<img src="https://i.imgur.com/gUZcfYP.png" />
			</div>
			<div class="relative m-8 -ml-50px w-5/12 h-3/4 text-xl">
				Make your existing wood flooring look new! We remove scratches and
				damages from the surface before applying a variety of high-end,
				commercially graded oil or waterbased finsihes. The end result is a
				flawless look with extreme durabity.
			</div>
		</div>
	);
}
