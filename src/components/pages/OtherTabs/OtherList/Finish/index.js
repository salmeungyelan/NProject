import * as S from './index.styles';

import Input from 'components/@common/Input';
import Button from 'components/@common/Button';
import Textarea from 'components/@common/Textarea';

const img = [1, 2, 3, 4, 5];

function Finish(props) {
	const { display } = props;

	return (
		<S.Body $display={display}>
			<S.StatusBox>
				<S.Status>진행 상태</S.Status>
				<S.ImgBox>
					<S.ImgStatus>
						<img src="/assets/icons/first.svg" />
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
						<img src="/assets/icons/fourth.svg" />
						<span>제작 중</span>
					</S.ImgStatus>

					<S.ImgStatus>
						<img src="/assets/icons/fifth-color.svg" />
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
							주문하신 <strong>상품</strong>이 <strong>완성</strong>되었습니다.
						</S.Td>
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

				<S.TextBox>
					<S.Status>링크</S.Status>
					<Input
						variant="default"
						size="height"
						value="https://hwangeum.olive.naver.com"
						disabled
					/>
				</S.TextBox>

				<S.TextBox>
					<S.Status>첨부 파일</S.Status>
					<S.ReadImg>
						{img.map((el, idx) => (
							<S.Img key={idx}>
								<img src="/assets/images/example.png" />
								<S.ImgTitle>
									<p>image_{el}.jpg</p>
									<img src="/assets/icons/search.svg" />
								</S.ImgTitle>
							</S.Img>
						))}
					</S.ReadImg>
				</S.TextBox>

				<S.TextBox>
					<S.Status>안내</S.Status>
					<Textarea
						variant="default"
						size="default"
						value="dskjaflsdjfkldsjaflasdjflsdajf;lksajf;lksdjflds;kafjsadlkfjds;lkafjdslak;fjsdla;fjsa;dlkfsadl;kfjasldfjsad;kfjasl;kfjads;fj"
						disabled
					/>
				</S.TextBox>
			</S.StatusBox>

			<div>
				<Button size="height" variant="white">
					신청 내역 확인
				</Button>
			</div>
		</S.Body>
	);
}

export default Finish;
