const MESSAGE = {
	JOIN: {
		EMAIL: '이메일 미입력 시 가입이 불가능합니다.',
		EMAIL_REGEX: '이메일 형식에 맞게 입력해 주세요.',
		DUP_EMAIL: '중복된 이메일입니다. 다른 이메일을 입력해 주세요.',
		USERNAME: '아이디 미입력 시 가입이 불가능합니다.',
		USERNAME_REGEX: '영문 및 숫자로 4자 이상 20자 미만으로 입력해 주세요. ',
		DUP_USERNAME: '중복된 아이디입니다. 다른 아이디를 입력해 주세요.',
		PW: '비밀번호 미입력 시 가입이 불가능합니다.',
		PW_REGEX: '특수문자를 포함하여 8자 이상 20자 미만으로 입력해 주세요.',
		PW_CHECK: '비밀번호 확인 미입력 시 가입이 불가능합니다.',
		SAME_PW: '입력한 비밀번호와 동일하지 않습니다.',
		COMPANY: '업체명 미입력 시 가입이 불가능합니다.',
		DUP_COMPANY: '중복된 번호입니다. 다른 번호를 입력해 주세요.',
		NUMBER: '전화번호 미입력 시 가입이 불가능합니다.',
		ADDRESS: '주소 미입력 시 가입이 불가능합니다.',
		CO_NUMBER: '사업자 등록 번호 미입력 시 가입이 불가능합니다.',
		TERMS: '약관 미동의 시 가입이 불가능합니다.',
	},

	LOGIN: {
		ID: '아이디를 입력해 주세요.',
		PW: '비밀번호를 입력해 주세요.',
		FAILURE:
			'아이디 또는 비밀번호를 잘못 입력했습니다./입력한 내용을 다시 확인해 주세요.',
	},

	FIND: {
		ID: '이메일 또는 아이디를 입력해 주세요.',
		COMPANY: '업체명을 입력해 주세요.',
		NUMBER: '전화번호를 입력해 주세요.',
		CO_NUMBER: '사업자 등록 번호를 입력해 주세요.',
	},

	PASSWORD: {
		FAIL: '현재 비밀번호가 일치하지 않습니다.',
		NEW: '새로운 비밀번호를 입력해 주세요.',
		NEW_CHECK: '새로운 비밀번호 확인을 입력해 주세요.',
		CHECK: '새로운 비밀번호가 일치하지 않습니다.',
		FIN: '비밀번호 변경이 완료되었습니다.',
	},

	REVIEW: {
		CATEGORY: '카테고리를 선택해 주세요.',
		TITLE: '제목을 입력해 주세요.',
		REQ: '요청 사항을 입력해 주세요.',
		THUMBNAIL: '썸네일을 지정해 주세요.',
	},

	OTHER_TABS: {
		START: '체험 시작 날짜를 선택해 주세요.',
		END: '체험 종료 날짜를 선택해 주세요.',
		SERVICE: '제공 서비스를 입력해 주세요.',
		REQ: '요청 사항을 입력해 주세요.',
	},
};

export default MESSAGE;
