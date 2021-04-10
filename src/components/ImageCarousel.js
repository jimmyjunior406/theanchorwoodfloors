import React, { useState } from 'react';
import { CarouselData } from './CarouselData';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const ImageCarousel = ({ items }) => {
	const [current, setCurrent] = useState(0);
	const length = items.length;

	const nextItem = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevItem = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(items) || items.length <= 0) {
		return null;
	}

	return (
		<section className="slider">
			{CarouselData.map((item, index) => {
				return (
					<div
						className={
							index === current ? 'slide active relative show' : 'slide '
						}
						key={index}
					>
						<Link to="/about">
							{index === current && <img src={item.image} className="image" />}
						</Link>
						<FaArrowLeft className="left" onClick={prevItem} />
						<FaArrowRight className="right" onClick={nextItem} />
					</div>
				);
			})}
		</section>
	);
};

export default ImageCarousel;
