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
import { LoadingProvider } from 'contexts/LoadingContext';

function App() {
	return (
		<ErrorBoundary FallbackComponent={<ErrorFallback />}>
			<Suspense fallback={<Loading />}>
				<HelmetProvider>
					<LoadingProvider>
						<RecoilRoot>
							<ThemeProvider theme={theme}>
								<GlobalStyles />
								<RouterProvider router={router} />
							</ThemeProvider>
						</RecoilRoot>
					</LoadingProvider>
				</HelmetProvider>
			</Suspense>
		</ErrorBoundary>
	);
}

export default App;
