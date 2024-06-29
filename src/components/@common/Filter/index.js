import usePathname from 'hooks/usePathname';

import * as S from './index.styles';

function Filter(props) {
	const { onClick, sort } = props;

	const path = usePathname();
	const filterName = path === 'notice' ? 'NOTICE' : 'GUIDE';

	return (
		<S.Body>
			<S.Sort
				data-value={`${filterName}_FILTER_01`}
				selected={sort === `${filterName}_FILTER_01`}
				onClick={onClick}
			>
				• 최신순
			</S.Sort>

			<S.Sort
				data-value={`${filterName}_FILTER_02`}
				selected={sort === `${filterName}_FILTER_02`}
				onClick={onClick}
			>
				• 오래된순
			</S.Sort>
		</S.Body>
	);
}

export default Filter;
