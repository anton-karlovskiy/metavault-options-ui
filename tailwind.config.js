
const {
  METAVAULT_ROYAL_BLUE,
  METAVAULT_RIPTIDE,
  METAVAULT_STORM_DUST,
  METAVAULT_MINT_GREEN,
  METAVAULT_VIVID_TANGERINE
} = require('./src/utils/constants/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        metavaultRoyalBlue: {
          50: METAVAULT_ROYAL_BLUE[50],
          100: METAVAULT_ROYAL_BLUE[100],
          200: METAVAULT_ROYAL_BLUE[200],
          300: METAVAULT_ROYAL_BLUE[300],
          400: METAVAULT_ROYAL_BLUE[400],
          DEFAULT: METAVAULT_ROYAL_BLUE[500],
          600: METAVAULT_ROYAL_BLUE[600],
          700: METAVAULT_ROYAL_BLUE[700],
          800: METAVAULT_ROYAL_BLUE[800],
          900: METAVAULT_ROYAL_BLUE[900]
        },
        metavaultRiptide: {
          50: METAVAULT_RIPTIDE[50],
          100: METAVAULT_RIPTIDE[100],
          200: METAVAULT_RIPTIDE[200],
          300: METAVAULT_RIPTIDE[300],
          400: METAVAULT_RIPTIDE[400],
          DEFAULT: METAVAULT_RIPTIDE[500],
          600: METAVAULT_RIPTIDE[600],
          700: METAVAULT_RIPTIDE[700],
          800: METAVAULT_RIPTIDE[800],
          900: METAVAULT_RIPTIDE[900]
        },
        metavaultStormDust: {
          50: METAVAULT_STORM_DUST[50],
          100: METAVAULT_STORM_DUST[100],
          200: METAVAULT_STORM_DUST[200],
          300: METAVAULT_STORM_DUST[300],
          400: METAVAULT_STORM_DUST[400],
          DEFAULT: METAVAULT_STORM_DUST[500],
          600: METAVAULT_STORM_DUST[600],
          700: METAVAULT_STORM_DUST[700],
          800: METAVAULT_STORM_DUST[800],
          900: METAVAULT_STORM_DUST[900]
        },
        metavaultMintGreen: {
          50: METAVAULT_MINT_GREEN[50],
          100: METAVAULT_MINT_GREEN[100],
          200: METAVAULT_MINT_GREEN[200],
          300: METAVAULT_MINT_GREEN[300],
          400: METAVAULT_MINT_GREEN[400],
          DEFAULT: METAVAULT_MINT_GREEN[500],
          600: METAVAULT_MINT_GREEN[600],
          700: METAVAULT_MINT_GREEN[700],
          800: METAVAULT_MINT_GREEN[800],
          900: METAVAULT_MINT_GREEN[900]
        },
        metavaultVividTangerine: {
          50: METAVAULT_VIVID_TANGERINE[50],
          100: METAVAULT_VIVID_TANGERINE[100],
          200: METAVAULT_VIVID_TANGERINE[200],
          300: METAVAULT_VIVID_TANGERINE[300],
          400: METAVAULT_VIVID_TANGERINE[400],
          DEFAULT: METAVAULT_VIVID_TANGERINE[500],
          600: METAVAULT_VIVID_TANGERINE[600],
          700: METAVAULT_VIVID_TANGERINE[700],
          800: METAVAULT_VIVID_TANGERINE[800],
          900: METAVAULT_VIVID_TANGERINE[900]
        }
      },
      textColor: {
        // MEMO: inspired by https://mui.com/material-ui/customization/dark-mode/
        primaryInLightMode: 'rgba(0, 0, 0, 0.87)',
        secondaryInLightMode: 'rgba(0, 0, 0, 0.6)',
        primaryInDarkMode: '#fff',
        secondaryInDarkMode: 'rgba(255, 255, 255, 0.7)'
      },
      backgroundColor: {
        // MEMO: inspired by https://v4.mui.com/customization/palette/
        defaultInLightMode: '#fafafa',
        defaultInDarkMode: '#303030',
        paperInLightMode: '#fff',
        paperInDarkMode: '#424242'
      },
      // MEMO: inspired by https://material-ui.com/customization/default-theme/
      zIndex: {
        metavaultMobileStepper: 1000,
        metavaultSpeedDial: 1050,
        metavaultAppBar: 1100,
        metavaultDrawer: 1200,
        metavaultModal: 1300,
        metavaultSnackbar: 1400,
        metavaultTooltip: 1500
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
