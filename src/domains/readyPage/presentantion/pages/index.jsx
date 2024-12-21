import React, { useEffect, useState } from 'react';
import { images } from './images';
import './ReadyPage.scss';

const ReadyPage = () => {
	const [currentFrame, setCurrentFrame] = useState(0);
	const MAX_FRAMES = 151;

	useEffect(() => {
		const img = document.createElement('img');
		const main = document.querySelector('main');
		main.appendChild(img);

		const updateImage = (frame = 0) => {
			if (images[frame]) {
				const src = images[frame].p;
				img.src = src;
			}
		};

		updateImage(currentFrame);

		let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
		let lastFrameUpdate = 0;

		const handleResize = () => {
			maxScroll = document.documentElement.scrollHeight - window.innerHeight;
		};

		const handleScroll = () => {
			if (Date.now() - lastFrameUpdate < 1) return;
			lastFrameUpdate = Date.now();
			const scrollPosition = window.scrollY;
			const scrollFraction = scrollPosition / maxScroll;
			const frame = Math.floor(scrollFraction * MAX_FRAMES);
			if (currentFrame !== frame) {
				updateImage(frame);
				setCurrentFrame(frame);
			}
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [currentFrame]);

	return (
		<main className="container-ready-page">
			<section className="section-ready-page">
				<h1 className="title-page">Find a perfect & favorite moto for you.</h1>
				<img className="icon-next" src="/src/domains/readyPage/application/constants/imgs/next-icon.svg" alt="" />
			</section>
		</main>
	);
};

export default ReadyPage;
