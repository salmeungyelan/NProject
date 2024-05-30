function Loading() {
	return (
		<div
			style={{
				width: '100vw',
				position: 'fixed',
				height: '100vh',
				top: '0',
				bottom: '0',
				left: '0',
				right: '0',
				backgroundColor: 'rgba(255, 255, 255, 0.75)',
				zIndex: '9999',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					padding: '20px',
				}}
			>
				<div>
					<img
						style={{ width: '200px' }}
						src="/assets/images/loading.gif"
						alt="로딩 아이콘"
					/>
				</div>
			</div>
		</div>
	);
}

export default Loading;
