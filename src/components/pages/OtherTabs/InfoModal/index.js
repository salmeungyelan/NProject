import useModal from 'hooks/useModal';
import usePathname from 'hooks/usePathname';

import * as S from './index.styles';

import Button from 'components/@common/Button';
import InputBox from 'components/@common/InputBox';
import Address from 'components/@common/Address';

function InfoModal({ onNext, title }) {
	// 뷰탭 인스타 및 홈페이지 제작은 주소 제외
	const { path } = usePathname();

	const { closeModal } = useModal();

	return (
		<S.Background>
			<S.Container>
				<S.Header>
					<S.Title>{title} 신청</S.Title>
					<S.CloseBtn onClick={closeModal} />
				</S.Header>

				<S.Step>
					<img src="/assets/icons/form.svg" />

					<div>
						<span>업체 정보</span>
						<p>체험단 신청</p>
					</div>
				</S.Step>

				<S.Body $path={path}>
					<InputBox title="업체명" value="황금올리브유필라테스" message />
					<InputBox title="전화번호" value="010-1234-5678" message />
					{path === 'review_team' && (
						<Address
							number="12727"
							address="삼각지"
							detail="107호"
							button
							message
						/>
					)}
					<InputBox
						title="스마트 플레이스 링크"
						value="http://hwangeumOliveYou.com"
						message
					/>
				</S.Body>

				<S.ButtonBox>
					<Button variant={'white'} size={'height'}>
						임시저장
					</Button>
					<Button variant={'default'} size={'height'} onClick={onNext}>
						다음
					</Button>
				</S.ButtonBox>
			</S.Container>
		</S.Background>
	);
}

export default InfoModal;
