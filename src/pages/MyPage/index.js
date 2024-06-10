import * as S from './index.styles';

import Title from 'components/@common/Title';
import Input from 'components/@common/Input';
import Button from 'components/@common/Button';

function MyPage() {
	return (
		<S.Body>
			<Title title={'MY PAGE'}>회원 정보를 수정할 수 있습니다.</Title>

			<div>
				<S.Information>
					<S.InfoBox>
						<S.Title>이메일</S.Title>
						<Input
							size={'height'}
							variant={'default'}
							value={'olive@hawngum.com'}
							disabled
						/>
					</S.InfoBox>

					<S.InfoBox>
						<S.Title>아이디</S.Title>
						<Input
							size={'height'}
							variant={'default'}
							value={'olive'}
							disabled
						/>
					</S.InfoBox>

					<S.InfoBox>
						<S.Title>비밀번호</S.Title>
						<Input
							size={'height'}
							variant={'default'}
							value={'olive'}
							type="password"
							readOnly
						/>
						<Button size={'height'} variant={'default'}>
							비밀번호 변경하기
						</Button>
					</S.InfoBox>

					<S.InfoBox>
						<S.Title>업체명</S.Title>
						<Input
							size={'height'}
							variant={'default'}
							value={'황금올리브'}
							disabled
						/>
					</S.InfoBox>

					<S.InfoBox>
						<S.Title>전화번호</S.Title>
						<Input
							size={'height'}
							variant={'default'}
							value={'010-1234-1234'}
							disabled
						/>
					</S.InfoBox>

					<S.InfoBox>
						<S.Title>주소</S.Title>
						<Input
							size={'height'}
							variant={'default'}
							value={'12345'}
							disabled
						/>
						<Input
							size={'height'}
							variant={'default'}
							value={'서울특별시 가산디지털단지'}
							disabled
						/>
						<Input
							size={'height'}
							variant={'default'}
							value={'넷플레이스 메타'}
							disabled
						/>
					</S.InfoBox>

					<S.InfoBox>
						<S.Title>사업자 등록 번호</S.Title>
						<Input
							size={'height'}
							variant={'default'}
							value={'123-12-12345'}
							disabled
						/>
					</S.InfoBox>

					<S.InfoBox>
						<S.Title>스마트 플레이스 링크</S.Title>
						<Input
							size={'height'}
							variant={'default'}
							value={'https://naver.com'}
							disabled
						/>
					</S.InfoBox>
				</S.Information>

				<S.Notice>
					비밀번호를 제외한 나머지 정보 변경은 관리자에게 문의해 주세요.
				</S.Notice>
			</div>
		</S.Body>
	);
}

export default MyPage;
