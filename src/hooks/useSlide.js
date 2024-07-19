import { useEffect, useState } from 'react';

const useSlide = (mediaRef, containerRef, files) => {
	const [slide, setSlide] = useState(0);
	const [visibleItemsCount, setVisibleItemsCount] = useState(0);

	useEffect(() => {
		if (containerRef.current) {
			const containerWidth = containerRef.current.offsetWidth;
			const itemWidth = mediaRef.current[0]?.offsetWidth || 0;
			const count = Math.floor(containerWidth / itemWidth);
			setVisibleItemsCount(count);
			setSlide(0); // 첫 시작 시 슬라이드를 처음으로 설정
		}
	}, [files]);

	const handlePrevClick = () => {
		const boundaryLeft = containerRef.current.getBoundingClientRect().left;

		const target = [...mediaRef.current].map(
			v => v.getBoundingClientRect().left,
		);
		const num = target.reverse().findIndex(left => left < boundaryLeft); // 왼쪽으로 가야 하므로 역순으로 탐색합니다.

		if (num !== -1) {
			containerRef.current.scrollTo({
				left: containerRef.current.scrollLeft - (boundaryLeft - target[num]), // 왼쪽으로 이동
				behavior: 'smooth',
			});

			setSlide(prev => Math.max(0, prev - 1)); // 슬라이드 상태 업데이트
		}
	};

	const handleNextClick = () => {
		const boundaryRight = containerRef.current.getBoundingClientRect().right;

		const target = [...mediaRef.current].map(
			v => v.getBoundingClientRect().right,
		);
		const num = target.findIndex(right => right >= boundaryRight);

		if (target[num] === boundaryRight) {
			containerRef.current.scrollTo({
				left: containerRef.current.scrollLeft + target[num + 1] - target[num],
				behavior: 'smooth',
			});
		} else
			containerRef.current.scrollTo({
				left: target[num] - boundaryRight,
				behavior: 'smooth',
			});

		setSlide(prev => Math.min(prev + 1)); // 슬라이드 상태 업데이트
	};

	return { handlePrevClick, handleNextClick, slide, visibleItemsCount };
};

export default useSlide;
