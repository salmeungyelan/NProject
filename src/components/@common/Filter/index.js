import { useEffect, useState } from 'react';

import useFilter from 'hooks/useFilter';
import useApi from 'hooks/useApi';

import * as S from './index.styles';

function Filter(props) {
	const { onClick, sort } = props;

	const { filterName } = useFilter();

	const { result } = useApi({
		path: `/client/global-constants?typeValue=${filterName}_FILTER`,
		shouldFetch: true,
	});

	const [filter, setFilter] = useState([]);

	useEffect(() => {
		if (result.data) {
			setFilter(result.data.globalConstantList);
		}
	}, [result.data]);

	return (
		<S.Body>
			{filter &&
				filter.map(flt => (
					<S.Sort
						key={flt.id}
						data-value={flt.codeValue}
						selected={sort === flt.codeValue}
						onClick={onClick}
					>
						• {flt.codeLabel}
					</S.Sort>
				))}
		</S.Body>
	);
}

export default Filter;
