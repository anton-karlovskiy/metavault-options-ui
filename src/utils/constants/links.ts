
const URL_PARAMETERS = Object.freeze({
  OPTION_TYPE: 'optionType',
  OPTION_TOKEN_SYMBOL: 'optionTokenSymbol'
});

const PAGES = Object.freeze({
  HOME: '/',
  OPTIONS: '/options',
  OPTION: `/option/:${URL_PARAMETERS.OPTION_TYPE}/:${URL_PARAMETERS.OPTION_TOKEN_SYMBOL}`,
  WEB3_EVM_CONNECTION: '/web3-evm-connection',
  WEB3_SOLANA_CONNECTION: '/web3-solana-connection'
});

export {
  PAGES,
  URL_PARAMETERS
};
