import React, { useState } from 'react';
import { CarouselData } from '../components/CarouselData';
import ImageCarousel from '../components/ImageCarousel';

export default function App() {
	return <ImageCarousel items={CarouselData} />;
}
