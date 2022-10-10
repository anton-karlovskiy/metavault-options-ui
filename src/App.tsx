
import * as React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import Layout from 'parts/Layout';
import FullLoadingSpinner from 'components/FullLoadingSpinner';
import { PAGES } from 'utils/constants/links';
import { CLASS_NAMES } from 'utils/constants/styles';

const Options = React.lazy(() =>
  import(/* webpackChunkName: 'options' */ 'pages/Options')
);
const Option = React.lazy(() =>
  import(/* webpackChunkName: 'option' */ 'pages/Option')
);
const Web3EVMConnection = React.lazy(() =>
  import(/* webpackChunkName: 'web3-evm-connection' */ 'pages/Web3EVMConnection')
);
const Web3SolanaConnection = React.lazy(() =>
  import(/* webpackChunkName: 'web3-solana-connection' */ 'pages/Web3SolanaConnection')
);
const NotFound = React.lazy(() =>
  import(/* webpackChunkName: 'no-found' */ 'pages/NotFound')
);

const App = () => {
  React.useEffect(() => {
    // MEMO: inspired by https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
    document.documentElement.classList.add(CLASS_NAMES.DARK);
    document.documentElement.classList.remove(CLASS_NAMES.LIGHT);
  }, []);

  return (
    <Layout>
      <React.Suspense fallback={<FullLoadingSpinner />}>
        <Routes>
          <Route
            path={PAGES.OPTIONS}
            element={<Options />} />
          <Route
            path={PAGES.OPTION}
            element={<Option />} />
          <Route
            path={PAGES.WEB3_EVM_CONNECTION}
            element={<Web3EVMConnection />} />
          <Route
            path={PAGES.WEB3_SOLANA_CONNECTION}
            element={<Web3SolanaConnection />} />
          <Route
            path='*'
            element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </Layout>
  );
};

export default App;
