import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useFilter from 'hooks/useFilter';
import useModal from 'hooks/useModal';
import { WEBSITE_OUTSOURCING_STATUS } from 'constants/status';
import usePagination from 'hooks/usePagination';
import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import OtherList from 'components/pages/OtherTabs/OtherList';
import ApplicationModal from 'components/pages/OtherTabs/ApplicationModal';
import Button from 'components/@common/Button';
import Pagination from 'components/@common/Pagination';

function WebsiteOutsourcing() {
	const { sort, setSort, handelSelectFilter } = useFilter();
	const { modalState, openModal, closeModal } = useModal();

	const [otherList, setOtherList] = useState([]);
	const [globalConstants, setGlobalConstants] = useState([]);
	const [shouldFetchList, setShouldFetchList] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();

	// 쿼리스트링에서 상태를 가져오는 함수
	const getQueryParams = () => {
		const params = new URLSearchParams(location.search);

		const statusParam = params.get('status')
			? params.get('status').split(',')
			: null;

		const additionalStatuses = statusParam
			? statusParam.map(param =>
					WEBSITE_OUTSOURCING_STATUS.find(status => status.sortBy === param),
			  )
			: [{ codeLabel: '전체', sortBy: '' }];

		return {
			// checkHistory: params.get('list') || false,
			currentPage: parseInt(params.get('page'), 10) || 1,
			sort: params.get('sort') || sort,
			status: additionalStatuses,
		};
	};

	const params = getQueryParams();

	const [checkHistory, setCheckHistory] = useState(false);
	const [selectedStatus, setSelectedStatus] = useState(params.status);

	const itemsPerPage = 8;
	const { currentPage, setCurrentPage, total, setTotal } = usePagination();

	const basePath = `/client/website-outsourcings?page=${currentPage}&size=${itemsPerPage}&sortBy=${sort}`;
	const status =
		selectedStatus[0].sortBy &&
		selectedStatus.map(stat => `&status=${stat.sortBy}`).join('');

	const { result, trigger } = useApi({
		path: basePath,
		shouldFetch: false,
	});

	useEffect(() => {
		setSelectedStatus(params.status);
		setSort(params.sort);
		setCurrentPage(params.currentPage);
		setShouldFetchList(prev => !prev);
	}, [location.search]);

	useEffect(() => {
		if (result.data) {
			setOtherList(result.data.websiteOutsourcings);
			setTotal(result.data.total);
			setGlobalConstants(result.data.websiteOutsourcingConstant);
		}
	}, [result.data]);

	useEffect(() => {
		trigger({ path: basePath + status, applyResult: true });
	}, [shouldFetchList]);

	const updateQueryParams = newParams => {
		const params = new URLSearchParams(location.search);

		Object.keys(newParams).forEach(key => {
			if (newParams[key] !== undefined && newParams[key] !== null) {
				if (newParams[key] === '') {
					params.delete(key); // 빈 문자열인 경우 쿼리스트링에서 삭제
				} else {
					params.set(key, newParams[key]);
				}
			} else {
				params.delete(key); // null 또는 undefined인 경우 쿼리스트링에서 삭제
			}
		});
		navigate(`?${params.toString()}`, { replace: true });
	};

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
		updateQueryParams({ page: pageNumber });
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
						filter={globalConstants.filter}
						status={globalConstants.status}
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
