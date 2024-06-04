import { Link } from 'react-router-dom';

import useLayout from 'hooks/useLayout';
import useModal from 'hooks/useModal';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import Input from 'components/@common/Input';
import Button from 'components/@common/Button';
import Line from 'components/@common/Line';
import TermsModal from 'components/pages/Register/TermsModal';
import MESSAGE from 'constants/message';

function Register() {
	useLayout();

	const { openModal } = useModal();
	const handleOpenModal = () => {
		openModal({
			title: '넷플레이스 - 메타 서비스 이용약관',
			content: (
				<pre>
					대통령·국무총리·국무위원·행정각부의 장·헌법재판소
					재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타 법률이 정한
					공무원이 그 직무집행에 있어서 헌법이나 법률을 위배한 때에는 국회는
					탄핵의 소추를 의결할 수 있다. 대통령은 제1항과 제2항의 처분 또는
					명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.
					평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
					민주평화통일자문회의를 둘 수 있다. 국무총리·국무위원 또는 정부위원은
					국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고
					질문에 응답할 수 있다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그
					임기는 4년으로 하며, 1차에 한하여 중임할 수 있다. 법률은 특별한 규정이
					없는 한 공포한 날로부터 20일을 경과함으로써 효력을 발생한다. 국가는
					전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다. 국민의 모든
					자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한
					경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도 자유와
					권리의 본질적인 내용을 침해할 수 없다. 국가는 농지에 관하여 경자유전의
					원칙이 달성될 수 있도록 노력하여야 하며, 농지의 소작제도는 금지된다.
					헌법재판소 재판관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여
					연임할 수 있다. 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에
					의한 재판을 받을 권리를 가진다. 국회는 국민의
					보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다.
					대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는
					바에 의하여 연임할 수 있다. 대통령은 국회에 출석하여 발언하거나
					서한으로 의견을 표시할 수 있다. 군인은 현역을 면한 후가 아니면
					국무총리로 임명될 수 없다. 환경권의 내용과 행사에 관하여는 법률로
					정한다. 이 헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은 제1항
					단서의 규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다. 국회의원은
					국가이익을 우선하여 양심에 따라 직무를 행한다. 새로운 회계연도가
					개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이
					의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수
					있다. 누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을 권리가
					있음을 고지받지 아니하고는 체포 또는 구속을 당하지 아니한다. 체포 또는
					구속을 당한 자의 가족등 법률이 정하는 자에게는 그 이유와 일시·장소가
					지체없이 통지되어야 한다. 국가원로자문회의의 조직·직무범위 기타 필요한
					사항은 법률로 정한다. 근로조건의 기준은 인간의 존엄성을 보장하도록
					법률로 정한다. 법관은 탄핵 또는 금고 이상의 형의 선고에 의하지
					아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉
					기타 불리한 처분을 받지 아니한다. 국가는 균형있는 국민경제의 성장 및
					안정과 적정한 소득의 분배를 유지하고, 시장의 지배와 경제력의 남용을
					방지하며, 경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에 관한
					규제와 조정을 할 수 있다. 여자의 근로는 특별한 보호를 받으며,
					고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다. 대통령은
					전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의
					필요에 응하거나 공공의 안녕질서를 유지할 필요가 있을 때에는 법률이
					정하는 바에 의하여 계엄을 선포할 수 있다. 모든 국민은 종교의 자유를
					가진다. 헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은 확정되며,
					대통령은 즉시 이를 공포하여야 한다. 공무원의 신분과 정치적 중립성은
					법률이 정하는 바에 의하여 보장된다. 대통령은 취임에 즈음하여 다음의
					선서를 한다. 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가
					보장된다. 의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야
					한다. 국회는 선전포고, 국군의 외국에의 파견 또는 외국군대의 대한민국
					영역안에서의 주류에 대한 동의권을 가진다. 대통령은 헌법과 법률이
					정하는 바에 의하여 국군을 통수한다. 국회는 국가의 예산안을
					심의·확정한다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며,
					그 자율적 활동과 발전을 보장한다. 국가는 지역간의 균형있는 발전을
					위하여 지역경제를 육성할 의무를 진다. 군사재판을 관할하기 위하여
					특별법원으로서 군사법원을 둘 수 있다. 정당의 목적이나 활동이 민주적
					기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고,
					정당은 헌법재판소의 심판에 의하여 해산된다. 사면·감형 및 복권에 관한
					사항은 법률로 정한다. 대통령은 국무회의의 의장이 되고, 국무총리는
					부의장이 된다. 사회적 특수계급의 제도는 인정되지 아니하며, 어떠한
					형태로도 이를 창설할 수 없다.
				</pre>
			),
			callback: () => console.log('modal closed'),
		});
	};

	return (
		<S.Body>
			<S.LogoBox>
				<Link to={'/'}>
					<Logo size={'default'} />
				</Link>
			</S.LogoBox>

			<S.FormBox action="">
				<S.InputBox>
					<S.H1>이메일 입력</S.H1>
					<Input
						size={'default'}
						variant={'default'}
						type="text"
						autoComplete="off"
						placeholder="이메일을 입력해 주세요."
						required
					/>
					<p></p>
				</S.InputBox>

				<S.InputBox>
					<S.H1>아이디 입력</S.H1>
					<Input
						size={'default'}
						variant={'default'}
						type="text"
						autoComplete="off"
						placeholder="아이디는 영어와 숫자로만 입력해 주세요."
						required
					/>
					<p></p>
				</S.InputBox>

				<S.InputBox>
					<S.H1>비밀번호 입력</S.H1>
					<Input
						size={'default'}
						variant={'default'}
						type="password"
						autoComplete="off"
						placeholder="비밀번호를 입력해 주세요."
						required
					/>
					<S.EX>
						<img src="/assets/icons/check.svg" />
						<span>8자 이상 32자 이하 입력 (공백 제외)</span>
					</S.EX>
					<p>{MESSAGE.JOIN.PW}</p>
				</S.InputBox>

				<S.InputBox>
					<S.H1>비밀번호 확인</S.H1>
					<Input
						size={'default'}
						variant={'default'}
						type="password"
						autoComplete="off"
						placeholder="비밀번호를 한 번 더 입력해 주세요."
						required
					/>
					<p></p>
				</S.InputBox>

				<S.InputBox>
					<S.H1>업체명</S.H1>
					<Input
						size={'default'}
						variant={'default'}
						type="text"
						autoComplete="off"
						placeholder="업체명을 입력해 주세요."
						required
					/>
					<p></p>
				</S.InputBox>

				<S.InputBox>
					<S.H1>전화번호</S.H1>
					<Input
						size={'default'}
						variant={'default'}
						type="text"
						autoComplete="off"
						placeholder="전화번호를 입력해 주세요."
						required
					/>
					<p></p>
				</S.InputBox>

				<S.Address>
					<S.H1>주소</S.H1>
					<div>
						<Input
							size={'default'}
							variant={'default'}
							type="text"
							placeholder="우편번호"
							required
						/>
						<Button variant={'orange'} size={'default'} shape={'default'}>
							주소 찾기
						</Button>
					</div>
					<Input
						size={'default'}
						variant={'default'}
						type="text"
						placeholder="주소"
						required
					/>
					<Input
						size={'default'}
						variant={'default'}
						type="text"
						placeholder="상세 주소"
						required
					/>
					<p></p>
				</S.Address>

				<S.InputBox>
					<S.H1>사업자 등록 번호</S.H1>
					<Input
						size={'default'}
						variant={'default'}
						type="text"
						autoComplete="off"
						placeholder="사업자 등록 번호를 입력해 주세요."
						required
					/>
					<p></p>
				</S.InputBox>

				<S.InputBox>
					<S.H1>스마트 플레이스 링크</S.H1>
					<Input
						size={'default'}
						variant={'default'}
						type="text"
						autoComplete="off"
						placeholder="링크를 입력해 주세요."
						required
					/>
					<p></p>
				</S.InputBox>

				<S.CheckBox>
					<S.H1>약관동의</S.H1>
					<S.Check>
						<S.CheckAll>
							<input type="checkbox" name="" id="check" />
							<label htmlFor="check" />
							<h1>전체동의</h1>
						</S.CheckAll>
						<Line size={'width'} variant={'lightGray'} />
						<S.CheckItem>
							<input type="checkbox" name="" id="check_1" />
							<label htmlFor="check_1" />
							<p onClick={handleOpenModal}>
								개인정보 제공 및 활용에 동의합니다.
							</p>
							<span className="text_color">(필수)</span>
						</S.CheckItem>
						<S.CheckItem>
							<input type="checkbox" name="" id="check_2" />
							<label htmlFor="check_2" />
							<p onClick={handleOpenModal}>서비스 이용 약관에 동의합니다.</p>
							<span className="text_color">(필수)</span>
						</S.CheckItem>
					</S.Check>
				</S.CheckBox>

				<TermsModal />

				<S.ButtonBox>
					<Button
						size={'default'}
						variant={'default'}
						shape={'default'}
						type="submit"
					>
						회원가입
					</Button>
				</S.ButtonBox>
			</S.FormBox>
		</S.Body>
	);
}

export default Register;
