import { useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';

import useFilter from 'hooks/useFilter';
import useModal from 'hooks/useModal';
import usePagination from 'hooks/usePagination';
import useApi from 'hooks/useApi';
import { otherTabsState } from 'recoil/atom/otherTabs.atom';
import decodeJWT from 'utils/token';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import OtherList from 'components/pages/OtherTabs/OtherList';
import ApplicationModal from 'components/pages/OtherTabs/ApplicationModal';
import Button from 'components/@common/Button';
import Pagination from 'components/@common/Pagination';

function WebsiteOutsourcing() {
	const { sort, handelSelectFilter } = useFilter();
	const { modalState, openModal, closeModal } = useModal();

	const [otherList, setOtherList] = useState([]);
	const [checkHistory, setCheckHistory] = useState(false);

	const [selectedStatus, setSelectedStatus] = useState([
		{
			codeLabel: '전체',
			sortBy: '',
		},
	]);

	const itemsPerPage = 8;
	const { currentPage, setCurrentPage, total, setTotal } = usePagination();

	const paths = useMemo(() => {
		const basePath = `/client/website-outsourcings?page=${currentPage}&size=${itemsPerPage}&sortBy=${sort}`;
		const status =
			selectedStatus[0].sortBy &&
			selectedStatus.map(stat => `&status=${stat.sortBy}`).join('');

		return { basePath, status };
	}, [currentPage, sort, selectedStatus]);

	const { basePath, status } = paths;

	const { result, trigger } = useApi({
		path: basePath,
		shouldFetch: true,
	});

	const decodedPayload = decodeJWT('accessToken');
	const { sub } = decodedPayload;

	const [applyData, setApplyData] = useRecoilState(otherTabsState);

	const { result: userResult } = useApi({
		path: `/users/${sub}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (userResult.data) {
			setApplyData(userResult.data);
		}

		if (result.data) {
			setOtherList(result.data.websiteOutsourcings);
			setTotal(result.data.total);
		}
	}, [result.data, userResult.data]);

	useEffect(() => {
		trigger({ path: basePath + status, applyResult: true });
	}, [selectedStatus, sort, currentPage]);

	useEffect(() => {
		setCurrentPage(1);
	}, [selectedStatus]);

	// 제안서 & 리스트
	const handleSuggestBtn = () => {
		setCheckHistory(prev => !prev);
	};

	// 신청 모달 띄우기
	const handleOpenModal = () => {
		openModal();
	};

	// 페이지 변경
	const handlePageChange = async pageNumber => {
		setCurrentPage(pageNumber);
		await trigger({ applyResult: true });
	};

	return (
		<>
			{modalState && (
				<ApplicationModal
					onClose={closeModal}
					title="홈페이지 제작"
					listTrigger={trigger}
				/>
			)}

			<S.Body>
				<Title title="WEBSITE CREATION">
					홈페이지 제작을 신청할 수 있습니다.
				</Title>

				{/* 첫 렌더링 시 */}
				{!checkHistory && (
					<S.Content>
						<span>제안서</span>
					</S.Content>
				)}

				{checkHistory && (
					<OtherList
						title="홈페이지 제작"
						sort={sort}
						otherList={otherList}
						selectedStatus={selectedStatus}
						setSelectedStatus={setSelectedStatus}
						onSelect={handelSelectFilter}
						listTrigger={trigger}
					/>
				)}

				{/* 페이지네이션 */}
				{checkHistory &&
					(otherList?.length ? (
						<Pagination
							totalItems={total}
							itemsPerPage={itemsPerPage}
							currentPage={currentPage}
							onPageChange={handlePageChange}
						/>
					) : (
						<></>
					))}
			</S.Body>

			<S.ApplyBtnBox>
				<div>
					<Button size="height" variant="white" onClick={handleSuggestBtn}>
						{checkHistory ? '제안서 보기' : '이용 내역 확인'}
					</Button>
					<Button size="height" variant="default" onClick={handleOpenModal}>
						홈페이지 제작 신청하기
					</Button>
				</div>
			</S.ApplyBtnBox>
		</>
	);
}

export default WebsiteOutsourcing;