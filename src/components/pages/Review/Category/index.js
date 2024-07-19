import { useEffect, useState } from 'react';

import useApi from 'hooks/useApi';

import * as S from './index.styles';

function Category(props) {
	const { selectedCategory, setSelectedCategory } = props;

	const [categories, setCategories] = useState([]);

	const { result } = useApi({
		path: '/client/global-constants?typeValue=REVIEW_TYPE',
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setCategories(result.data.globalConstantList);
		}
	}, [result.data]);

	const handleClickCategory = name => {
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
