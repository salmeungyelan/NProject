import * as S from './index.styles';

import Button from 'components/@common/Button';

function TempSave(props) {
	const { display } = props;

	return (
		<S.Body $display={display}>
			<div>
				<S.Status>진행 상태</S.Status>
				<S.Ex>
					신청이 완료되지 않았습니다.
					<br />
					신청폼을 다 작성한 후, 다시 신청해 주세요.
				</S.Ex>
			</div>

			<div>
				<Button size="height" variant="white">
					임시저장 수정
				</Button>
			</div>
		</S.Body>
	);
}

export default TempSave;
