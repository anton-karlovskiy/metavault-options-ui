
import { themes } from '@storybook/theming';
import clsx from 'clsx';

import { CLASS_NAMES } from '../src/utils/constants/styles';
import '../src/index.css';

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    stylePreview: true,
    current: CLASS_NAMES.DARK,
    // Override the default dark theme
    dark: { ...themes.dark },
    // Override the default light theme
    light: { ...themes.normal },
    darkClass: CLASS_NAMES.DARK,
    lightClass: CLASS_NAMES.LIGHT,
    classTarget: 'html'
  },
  // MEMO: https://github.com/hipstersmoothie/storybook-dark-mode#darklight-class
  // MEMO: https://github.com/hipstersmoothie/storybook-dark-mode#preview-class-target
};

const decorators = [
  Story => (
    <div
      // MEMO: check `src\App.tsx`
      className={clsx(
        'dark:bg-defaultInDarkMode',
        'dark:text-primaryInDarkMode',
        'h-screen',
        'p-4'
      )}>
      <Story />
    </div>
  )
];

export {
  parameters,
  decorators
};
