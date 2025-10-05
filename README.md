# Metavault Options UI – React dApp for On‑Chain Options and Vaults

Metavault Options UI is a React and TypeScript decentralized application that demonstrates an options vault interface with EVM and Solana wallet connectivity. It showcases option discovery, vault overviews, and deposit/withdraw flows, built with a modern component system, Tailwind CSS, and Storybook.

Use this repository as a reference UI for integrating wallets (MetaMask, WalletConnect, Coinbase Wallet, Solana wallet adapter), routing, code-splitting, and a clean component architecture for Web3 options products.

## Highlights and Features

- Options discovery page with token symbols, APY, TVL, deposits, epoch and version metadata
- Option detail page with general info plus deposit/withdraw panel
- EVM wallet support via `web3-react` (MetaMask, WalletConnect, Coinbase Wallet, Network)
- Solana wallet support via `@solana/wallet-adapter`
- Component-driven development with Storybook and Tailwind CSS
- Lazy-loaded route-based code splitting for faster initial loads

## Tech Stack

- create-react-app (v5.0.0)
- TypeScript (v^4.6.3)
- `@solana/wallet-adapter`
- `@web3-react/*` (beta)
- `ethers.js`
- ESLint (`eslint-config-google`), `husky`, `lint-staged`, `@commitlint`
- `tailwindcss`, `@headlessui/react`, `@tailwindcss/forms`
- `storybook`, `reach-ui`, `react-table`, `react-use`

## Project Structure (selected)

- `src/App.tsx`: sets up routes and lazy loading
- `src/pages/Options`: options discovery grid and overview cards
- `src/pages/Option`: option details and deposit/withdraw panel
- `src/contexts/evm-wallet-context.tsx`: EVM wallet provider with multiple connectors
- `src/parts` and `src/components`: reusable UI, panels, inputs, modals, and badges

## Getting Started

```bash
yarn install

# development
yarn start

# production build
yarn build
```

Ensure Node.js and Yarn are installed. The app is built with CRA v5 and TypeScript.

## Routing

Routes are defined in `src/App.tsx` using React Router 6 and are lazy-loaded:

- `/options`: options discovery
- `/option/:optionType/:token`: option detail
- `/web3/evm-connection`: EVM wallet demos
- `/web3/solana-connection`: Solana wallet demos

## Wallet Connectivity

- EVM wallets via `web3-react`: MetaMask, WalletConnect, Coinbase Wallet, and Network connectors are pre-wired in `EVMWalletProvider`.
- Solana wallets via `@solana/wallet-adapter` with example flows and providers included in `src/contexts` and example pages.

## Development Notes

- Linting: ESLint (Google config) with commit hooks via Husky and lint-staged.
- Styling: Tailwind CSS and Headless UI for accessible primitives and form styles.
- Components: Storybook stories for visual testing in `src/stories` and component folders.
- Tables: `react-table` is used; consider upgrading to v8 with full TypeScript types.

## Known Tasks / TODO

- Some type issues are temporarily suppressed with `@ts-expect-error`; replace with proper types.
- Investigate Solana Web3 Program constructor parameter expectations.
- Persist generated keypairs if cross-client state is desired (see https://gist.github.com/dabit3/7cbd18b8bc4b495c4831f8674902eb42).
- React 18 upgrade: switch from `ReactDOM.render` to `createRoot` (see warning in console).
- Upgrade `react-table` to v8 and fix types in `src/components/Select`.

## References and Learning

- `@solana/wallet-adapter` and starter example
- Full-stack Solana guide (React, Anchor, Rust, Phantom)
- `web3-react` example-next reference

## SEO Keywords

Metavault options UI, on-chain options vault, DeFi options dApp, React Web3 options, EVM wallet connect MetaMask WalletConnect Coinbase, Solana wallet adapter React, TypeScript DeFi UI, Tailwind CSS Web3 frontend, options APY TVL deposits epoch, decentralized options interface, ethers.js web3-react example, Storybook DeFi components.

## License

This repository is provided as an example UI; apply an appropriate license if publishing publicly.