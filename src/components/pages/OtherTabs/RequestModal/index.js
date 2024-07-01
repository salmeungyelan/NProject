import useModal from 'hooks/useModal';

import * as S from './index.styles';

import Input from 'components/@common/Input';
import Textarea from 'components/@common/Textarea';
import Button from 'components/@common/Button';
import InputBox from 'components/@common/InputBox';
import { useLocation } from 'react-router-dom';

function RequestModal({ onPrev, title }) {
	// 뷰탭&인스타는 체험 기간 / 제공 서비스 제외
	// 홈페이지 제작은 요청사항만

	const { pathname } = useLocation();
	const path = pathname.split('/')[1];

	const { closeModal } = useModal();

	return (
		<S.Background>
			<S.Container>
				<S.Header>
					<S.Title>{title} 신청</S.Title>
					<S.CloseBtn onClick={closeModal} />
				</S.Header>

				<S.Step>
					<img src="/assets/icons/form-fin.svg" />

					<div>
						<span>업체 정보</span>
						<p>체험단 신청</p>
					</div>
				</S.Step>

				<S.Body>
					{path === 'review_team' && (
						<>
							<S.InputBox>
								<S.H1>체험 기간</S.H1>
								<Input size={'height'} variant={'default'} type="text" />
								<p></p>
							</S.InputBox>

							<InputBox
								title="제공 서비스"
								placeholder="제공 가능한 서비스를 입력해 주세요."
								message
							/>
						</>
					)}

					{path !== 'web_creation' && (
						<>
							<S.InputBox>
								<S.H1>메인 키워드</S.H1>
								<S.WordBox>
									<S.Word>
										필수 입력 메인 키워드
										{/* <img src="/assets/icons/modal-x.svg" /> */}
									</S.Word>
								</S.WordBox>
								<p></p>
							</S.InputBox>

							<S.InputBox>
								<S.H1>서브 키워드</S.H1>
								<S.WordBox>
									<S.Word>
										키워드
										{/* <img src="/assets/icons/modal-x.svg" /> */}
									</S.Word>
									<S.Word>
										키워드
										{/* <img src="/assets/icons/modal-x.svg" /> */}
									</S.Word>
									<S.Word>
										키워드
										{/* <img src="/assets/icons/modal-x.svg" /> */}
									</S.Word>
								</S.WordBox>
								<p></p>
							</S.InputBox>

							<S.InputBox>
								<S.H1>해시태그</S.H1>
								<S.HashTag>
									<S.Word>
										#해시태그
										{/* <img src="/assets/icons/modal-x.svg" /> */}
									</S.Word>
									<S.Word>
										#황금올리브유필라테스
										{/* <img src="/assets/icons/modal-x.svg" /> */}
									</S.Word>
									<S.Word>
										#hwangeumOliveYouPT
										{/* <img src="/assets/icons/modal-x.svg" /> */}
									</S.Word>
								</S.HashTag>
								<p></p>
							</S.InputBox>
						</>
					)}

					<S.InputBox>
						<S.H1>요청 사항</S.H1>
						<Textarea
							size={path === 'web_creation' ? 'web' : 'modal'}
							variant={'default'}
							placeholder="내용을 입력해 주세요."
						/>
						<p></p>
					</S.InputBox>
				</S.Body>

				<S.ButtonBox>
					<div>
						<Button variant={'white'} size={'height'} onClick={onPrev}>
							이전
						</Button>
						<Button variant={'white'} size={'height'}>
							임시저장
						</Button>
					</div>
					<Button variant={'default'} size={'height'}>
						신청
					</Button>
				</S.ButtonBox>
			</S.Container>
		</S.Background>
	);
}

export default RequestModal;
