import * as S from './index.styles';

function Notice({ notice }) {
	return (
		<S.Notice>
			{notice ? (
				<>
					<img src="/assets/icons/register-x.svg" alt="" />
					<p>올바르지 않은 계정 정보입니다.</p>
				</>
			) : (
				<></>
			)}
		</S.Notice>
	);
}

export default Notice;
