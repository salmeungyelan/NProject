import React, { createContext, useState, useContext } from 'react';
import Loading from 'components/@common/Loading/Loading';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [hasErrorMessage, setHasErrorMessage] = useState('');

	return (
		<GlobalContext.Provider
			value={{ isLoading, setIsLoading, hasErrorMessage, setHasErrorMessage }}
		>
			{isLoading && <Loading />}
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalState = () => useContext(GlobalContext);
