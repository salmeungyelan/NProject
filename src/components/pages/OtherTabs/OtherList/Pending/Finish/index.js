import * as S from './index.styles';

import Input from 'components/@common/Input';
import Textarea from 'components/@common/Textarea';

const img = [1, 2, 3, 4, 5];

function Finish() {
	// const { display } = props;

	return (
		<>
			<S.TextBox>
				<S.Status>링크</S.Status>
				<Input
					variant="default"
					size="height"
					value="https://hwangeum.olive.naver.com"
					disabled
				/>
			</S.TextBox>

			<S.TextBox>
				<S.Status>첨부 파일</S.Status>
				<S.ReadImg>
					{img.map((el, idx) => (
						<S.Img key={idx}>
							<img src="/assets/images/example.png" />
							<S.ImgTitle>
								<p>image_{el}.jpg</p>
								<img src="/assets/icons/search.svg" />
							</S.ImgTitle>
						</S.Img>
					))}
				</S.ReadImg>
			</S.TextBox>

			<S.TextBox>
				<S.Status>안내</S.Status>
				<Textarea
					variant="default"
					size="default"
					value="dskjaflsdjfkldsjaflasdjflsdajf;lksajf;lksdjflds;kafjsadlkfjds;lkafjdslak;fjsdla;fjsa;dlkfsadl;kfjasldfjsad;kfjasl;kfjads;fj"
					disabled
				/>
			</S.TextBox>
		</>
	);
}

export default Finish;
