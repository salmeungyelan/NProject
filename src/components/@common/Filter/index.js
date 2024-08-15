import * as S from './index.styles';

function Filter(props) {
	const { filter, onClick, sort } = props;

	return (
		<S.Body>
			{filter?.map((flt, i) => (
				<S.Sort
					key={i}
					data-value={flt.codeValue}
					selected={sort === flt.codeValue}
					onClick={onClick}
				>
					<span>• </span>
					<p> {flt.codeLabel}</p>
				</S.Sort>
			))}
		</S.Body>
	);
}

export default Filter;
