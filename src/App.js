import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

import router from 'routes/routing';
import Loading from 'components/@common/Loading/Loading';
import ErrorFallback from 'components/@common/Error';
import { GlobalProvider } from 'contexts/GlobalContext';
import ErrorModal from 'components/@common/Error/Modal';

function App() {
	return (
		<ErrorBoundary FallbackComponent={<ErrorFallback />}>
			<Suspense fallback={<Loading />}>
				<HelmetProvider>
					<GlobalProvider>
						<RecoilRoot>
							<ThemeProvider theme={theme}>
								<GlobalStyles />
								<RouterProvider router={router} />
								<ErrorModal />
							</ThemeProvider>
						</RecoilRoot>
					</GlobalProvider>
				</HelmetProvider>
			</Suspense>
		</ErrorBoundary>
	);
}

export default App;
