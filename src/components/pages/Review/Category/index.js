import * as S from './index.styles';

function Category(props) {
	const {
		categories,
		selectedCategory,
		setSelectedCategory,
		updateQueryParams,
	} = props;

	const handleClickCategory = name => {
		updateQueryParams({ page: 1, category: name });
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

			{categories?.map((category, i) => (
				<S.Category
					key={i}
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
