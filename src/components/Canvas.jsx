import React, { useEffect, useRef } from 'react';
import CanstellationEffect from './js/Canstellation';

function Canvas() {
	const canvasRef = useRef();
	const ctxRef = useRef();
	const animationRef = useRef();

	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		const ctx = canvas.getContext('2d');
		ctxRef.current = ctx;
		const canstellationEffect = new CanstellationEffect(
			ctx,
			canvas.width,
			canvas.height
		);
		animationRef.current = canstellationEffect;
		canstellationEffect.animate(0);
	}, []);

	const handleClick = ({ nativeEvent }) => {
		const { offsetX, offsetY } = nativeEvent;
		for (let i = 0; i < 2; i++) {
			animationRef.current.update({ x: offsetX, y: offsetY });
		}
	};

	const handleMouse = ({ nativeEvent }) => {
		const { offsetX, offsetY } = nativeEvent;
		for (let i = 0; i < 2; i++) {
			animationRef.current.update({ x: offsetX, y: offsetY });
		}
	};
	return (
		<canvas
			id="canvas"
			ref={canvasRef}
			onClick={handleClick}
			onMouseMove={handleMouse}
		></canvas>
	);
}

export default Canvas;
