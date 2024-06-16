import * as S from './index.styles';

import Button from 'components/@common/Button';

function Pending(props) {
	const { display, progress } = props;

	return (
		<S.Body $display={display}>
			<S.StatusBox>
				<S.Status>진행 상태</S.Status>
				<S.ImgBox>
					<S.ImgStatus>
						<img
							src={`/assets/icons/${
								progress === 'wait' ? 'first-color' : 'first'
							}.svg`}
						/>
						<span>신청 완료</span>
					</S.ImgStatus>

					<S.ImgStatus>
						<img src="/assets/icons/second.svg" />
						<span>접수 완료</span>
					</S.ImgStatus>

					<S.ImgStatus>
						<img src="/assets/icons/third.svg" />
						<span>결제 완료</span>
					</S.ImgStatus>

					<S.ImgStatus>
						<img
							src={`/assets/icons/${
								progress === 'ing' ? 'fourth-color' : 'fourth'
							}.svg`}
						/>
						<span>제작 중</span>
					</S.ImgStatus>

					<S.ImgStatus>
						<img src="/assets/icons/fifth.svg" />
						<span>완료</span>
					</S.ImgStatus>
					<S.ImgLine />
				</S.ImgBox>

				<S.TableBox>
					<tr>
						<S.Th>일시</S.Th>
						<S.Th>진행 상태</S.Th>
					</tr>
					<tr>
						<S.Td>YYYY-MM-DD HH:MM:SS</S.Td>
						<S.Td>
							<strong>결제</strong>가 <strong>완료</strong>되었습니다.
						</S.Td>
					</tr>
					<tr>
						<S.Td>YYYY-MM-DD HH:MM:SS</S.Td>
						<S.Td>
							<strong>접수</strong>가 <strong>완료</strong>되었습니다.
						</S.Td>
					</tr>
					<tr>
						<S.Td>YYYY-MM-DD HH:MM:SS</S.Td>
						<S.Td>
							<strong>신청</strong>이 <strong>완료</strong>되었습니다.
						</S.Td>
					</tr>
				</S.TableBox>
			</S.StatusBox>

			<div>
				<Button size="height" variant="white">
					신청 내역 확인
				</Button>
			</div>
		</S.Body>
	);
}

export default Pending;
