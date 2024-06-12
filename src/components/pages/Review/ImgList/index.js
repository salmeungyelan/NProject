import * as S from './index.styles';

const img = [
	{
		id: 1,
		thumbnail: true,
	},
	{
		id: 2,
		thumbnail: false,
	},
	{
		id: 3,
		thumbnail: false,
	},
	{
		id: 4,
		thumbnail: false,
	},
	{
		id: 5,
		thumbnail: false,
	},
	{
		id: 6,
		thumbnail: false,
	},
	{
		id: 7,
		thumbnail: false,
	},
	{
		id: 8,
		thumbnail: false,
	},
	{
		id: 9,
		thumbnail: false,
	},
	{
		id: 10,
		thumbnail: false,
	},
	{
		id: 11,
		thumbnail: false,
	},
	{
		id: 12,
		thumbnail: false,
	},
	{
		id: 13,
		thumbnail: false,
	},
	{
		id: 14,
		thumbnail: false,
	},
	{
		id: 15,
		thumbnail: false,
	},
];

function ImgList() {
	return (
		<S.ImgList>
			{img.map((el, idx) => (
				<S.Img key={idx} $thumbnail={el.thumbnail}>
					{el.thumbnail ? (
						<S.Thumbnail>
							<img src="/assets/icons/thumbnail-check.svg" />
							<span>썸네일</span>
						</S.Thumbnail>
					) : (
						''
					)}

					<img src="/assets/images/example.png" />

					<S.ImgTitle>
						<p>image_{el.id}.jpg</p>
						<img src="/assets/icons/search.svg" />
					</S.ImgTitle>
				</S.Img>
			))}
		</S.ImgList>
	);
}

export default ImgList;
