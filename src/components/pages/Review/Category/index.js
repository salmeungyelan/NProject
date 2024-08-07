import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useApi from 'hooks/useApi';

import * as S from './index.styles';

function Category(props) {
	const { selectedCategory, setSelectedCategory } = props;

	const [categories, setCategories] = useState([]);

	const navigate = useNavigate();

	const { result } = useApi({
		path: '/client/global-constants?typeValue[]=REVIEW_TYPE',
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setCategories(result.data.globalConstantList);
		}
	}, [result.data]);

	const handleClickCategory = name => {
		const params = new URLSearchParams(location.search);
		params.set('category', name);
		navigate(`?${params.toString()}`, { replace: true });

		setSelectedCategory(name);
	};

	return (
		<S.Body>
			<S.Category
				$selected={selectedCategory === ''}
				onClick={() => handleClickCategory('')}
			>
				전체
			</S.Category>
			{categories &&
				categories.map(category => (
					<S.Category
						key={category.id}
						$selected={selectedCategory === category.codeValue}
						onClick={() => handleClickCategory(category.codeValue)}
					>
						{category.codeLabel}
					</S.Category>
				))}
		</S.Body>
	);
}

export default Category;
