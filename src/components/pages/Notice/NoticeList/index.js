import { Link } from 'react-router-dom';

import * as S from './index.styles';

const notice = [
	{
		id: 2,
		title: '이용 안내 2',
		description:
			'이것은 이용 안내 2에 대한 상세 설명입니다. 이 안내서에는 사용 가능한 다양한 기능을 사용하는 방법에 대한 포괄적인 정보가 제공됩니다. 사용자는 기능을 완전히 이해하기 위해 각 단계를 신중하게 따라야 합니다.',
		date: '2024년 2월 15일',
		important: 1,
	},
	{
		id: 4,
		title: '이용 안내 4',
		description:
			'이것은 이용 안내 4에 대한 상세 설명입니다. 이 안내서는 시스템의 고급 기능을 다루며, 이러한 기능을 최대한 활용할 수 있는 단계별 지침을 제공합니다. 기본 설정을 완료한 후 진행하십시오.',
		date: '2024년 4월 25일',
		important: 1,
	},
	{
		id: 5,
		title: '이용 안내 5',
		description:
			'이것은 이용 안내 5에 대한 상세 설명입니다. 이 안내서는 시스템을 원활하게 유지하기 위한 유지보수 및 정기 점검에 중점을 둡니다. 사용자는 이 섹션에서 상세한 일정과 절차를 찾을 수 있습니다.',
		date: '2024년 5월 30일',
		important: 1,
	},
	{
		id: 1,
		title: '이용 안내 1',
		description:
			'이것은 이용 안내 1에 대한 상세 설명입니다. 사용자가 원하는 결과를 얻기 위해 따라야 할 다양한 지침과 단계가 포함되어 있습니다. 모든 포인트를 주의 깊게 읽어보세요.',
		date: '2024년 1월 12일',
		important: 0,
	},
	{
		id: 3,
		title: '이용 안내 3',
		description:
			'이것은 이용 안내 3에 대한 상세 설명입니다. 이 안내서는 사용자가 직면할 수 있는 일반적인 문제의 문제 해결 과정을 설명합니다. 각 섹션은 특정 문제와 그 해결책을 체계적으로 다룹니다.',
		date: '2024년 3월 20일',
		important: 0,
	},
	{
		id: 6,
		title: '이용 안내 6',
		description:
			'이것은 이용 안내 6에 대한 상세 설명입니다. 이 안내서는 데이터 관리 및 보안에 대한 모범 사례를 설명합니다. 데이터의 효과적인 저장, 백업 및 보호 방법에 대한 권장 사항을 제공합니다.',
		date: '2024년 6월 5일',
		important: 0,
	},
	{
		title: '이용 안내 7',
		description:
			'이것은 이용 안내 7에 대한 상세 설명입니다. 이 안내서에는 사용자의 후기와 시스템의 성공적인 구현을 보여주는 사례 연구가 포함되어 있습니다. 사용자는 실제 사례를 통해 실질적인 응용 방법을 배울 수 있습니다.',
		date: '2024년 7월 10일',
		important: 0,
	},
];

function NoticeList() {
	return (
		<S.Body>
			{notice.map(el => (
				<S.Box key={el.id}>
					<Link to={'/notice/detail'}>
						<S.ImportantBox>
							{el.important ? (
								<>
									<img src="/assets/icons/pin.svg" alt="pin" />
									<S.Important>중요</S.Important>
									<S.Title>{el.title}</S.Title>
								</>
							) : (
								<S.Title>{el.title}</S.Title>
							)}
						</S.ImportantBox>

						<S.Content>
							<S.Description>{el.description}</S.Description>
							<S.Date>{el.date}</S.Date>
						</S.Content>
					</Link>
				</S.Box>
			))}
		</S.Body>
	);
}

export default NoticeList;
