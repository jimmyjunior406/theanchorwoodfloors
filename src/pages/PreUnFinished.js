import React, { useState } from 'react';

export default function PreUnfinished(props) {
	return (
		<div class="flex items-stretch mt-8">
			<div class="border-solid rounded-md border-4 border-gray-400 m-4">
				<img src="https://i.imgur.com/rLqdFckl.png" />
			</div>
			<div class="font-sans text-base self-center m-4">
				This is were the Prefinished and Unfinished information is going to go
			</div>
		</div>
	);
}
