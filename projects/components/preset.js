/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '5xs': '8px',
        '4xs': '9px',
        '3xs': '10px',
        '2xs': '11px',
        'tiny': '13px',
        'md': '15px'
      },
      fontFamily: {
        'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans],
        'serif': ['Open Sans', ...defaultTheme.fontFamily.serif],
        'icon': [
          'Material Symbols Outlined',
          {
            fontsize: '24px',
            fontVariationSettings: `"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24`
          },
        ],
        'icon-filled': [
          'Material Symbols Outlined',
          {
            fontsize: '24px',
            fontVariationSettings: `"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24`
          },
        ],
      },
      colors: {
        background: 'var(--emr-background)',
        'on-background': 'var(--emr-on-background)',
        inverse: 'var(--emr-inverse)',
        neutral: {
          DEFAULT: 'var(--emr-neutral)',
          0: 'var(--emr-neutral-0)',
          50: 'var(--emr-neutral-50)',
          100: 'var(--emr-neutral-100)',
          200: 'var(--emr-neutral-200)',
          300: 'var(--emr-neutral-300)',
          400: 'var(--emr-neutral-400)',
          450: 'var(--emr-neutral-450)',
          500: 'var(--emr-neutral-500)',
          600: 'var(--emr-neutral-600)',
          650: 'var(--emr-neutral-650)',
          700: 'var(--emr-neutral-700)',
          800: 'var(--emr-neutral-800)',
          900: 'var(--emr-neutral-900)',
          950: 'var(--emr-neutral-950)',
          1000: 'var(--emr-neutral-1000)',
        },
        'neutral-variant': {
          DEFAULT: 'var(--emr-neutral-variant)',
          0: 'var(--emr-neutral-variant-0)',
          50: 'var(--emr-neutral-variant-50)',
          100: 'var(--emr-neutral-variant-100)',
          200: 'var(--emr-neutral-variant-200)',
          300: 'var(--emr-neutral-variant-300)',
          400: 'var(--emr-neutral-variant-400)',
          450: 'var(--emr-neutral-variant-450)',
          500: 'var(--emr-neutral-variant-500)',
          600: 'var(--emr-neutral-variant-600)',
          650: 'var(--emr-neutral-variant-650)',
          700: 'var(--emr-neutral-variant-700)',
          800: 'var(--emr-neutral-variant-800)',
          900: 'var(--emr-neutral-variant-900)',
          950: 'var(--emr-neutral-variant-950)',
          1000: 'var(--emr-neutral-variant-1000)',
        },
        primary: {
          DEFAULT: 'var(--emr-primary)',
          0: 'var(--emr-primary-0)',
          50: 'var(--emr-primary-50)',
          100: 'var(--emr-primary-100)',
          200: 'var(--emr-primary-200)',
          300: 'var(--emr-primary-300)',
          400: 'var(--emr-primary-400)',
          450: 'var(--emr-primary-450)',
          500: 'var(--emr-primary-500)',
          600: 'var(--emr-primary-600)',
          650: 'var(--emr-primary-650)',
          700: 'var(--emr-primary-700)',
          800: 'var(--emr-primary-800)',
          900: 'var(--emr-primary-900)',
          950: 'var(--emr-primary-950)',
          1000: 'var(--emr-primary-1000)',
        },
        secondary: {
          DEFAULT: 'var(--emr-secondary)',
          0: 'var(--emr-secondary-0)',
          50: 'var(--emr-secondary-50)',
          100: 'var(--emr-secondary-100)',
          200: 'var(--emr-secondary-200)',
          300: 'var(--emr-secondary-300)',
          400: 'var(--emr-secondary-400)',
          450: 'var(--emr-secondary-450)',
          500: 'var(--emr-secondary-500)',
          600: 'var(--emr-secondary-600)',
          650: 'var(--emr-secondary-650)',
          700: 'var(--emr-secondary-700)',
          800: 'var(--emr-secondary-800)',
          900: 'var(--emr-secondary-900)',
          950: 'var(--emr-secondary-950)',
          1000: 'var(--emr-secondary-1000)',
        },
        tertiary: {
          DEFAULT: 'var(--emr-tertiary)',
          0: 'var(--emr-tertiary-0)',
          50: 'var(--emr-tertiary-50)',
          100: 'var(--emr-tertiary-100)',
          200: 'var(--emr-tertiary-200)',
          300: 'var(--emr-tertiary-300)',
          400: 'var(--emr-tertiary-400)',
          450: 'var(--emr-tertiary-450)',
          500: 'var(--emr-tertiary-500)',
          600: 'var(--emr-tertiary-600)',
          650: 'var(--emr-tertiary-650)',
          700: 'var(--emr-tertiary-700)',
          800: 'var(--emr-tertiary-800)',
          900: 'var(--emr-tertiary-900)',
          950: 'var(--emr-tertiary-950)',
          1000: 'var(--emr-tertiary-1000)',
        },
        error: {
          DEFAULT: 'var(--emr-error)',
          0: 'var(--emr-error-0)',
          50: 'var(--emr-error-50)',
          100: 'var(--emr-error-100)',
          200: 'var(--emr-error-200)',
          300: 'var(--emr-error-300)',
          400: 'var(--emr-error-400)',
          450: 'var(--emr-error-450)',
          500: 'var(--emr-error-500)',
          600: 'var(--emr-error-600)',
          650: 'var(--emr-error-650)',
          700: 'var(--emr-error-700)',
          800: 'var(--emr-error-800)',
          900: 'var(--emr-error-900)',
          950: 'var(--emr-error-950)',
          1000: 'var(--emr-error-1000)'
        },
        'on-primary': 'var(--emr-on-primary)',
        'primary-container': 'var(--emr-primary-container)',
        'on-primary-container': 'var(--emr-on-primary-container)',
        'primary-fixed': 'var(--emr-primary-fixed)',
        'primary-fixed-dim': 'var(--emr-primary-fixed-dim)',
        'on-primary-fixed': 'var(--emr-on-primary-fixed)',
        'on-primary-fixed-variant': 'var(--emr-on-primary-fixed-variant)',

        'on-secondary': 'var(--emr-on-secondary)',
        'secondary-container': 'var(--emr-secondary-container)',
        'on-secondary-container': 'var(--emr-on-secondary-container)',
        'secondary-fixed': 'var(--emr-secondary-fixed)',
        'secondary-fixed-dim': 'var(--emr-secondary-fixed-dim)',
        'on-secondary-fixed': 'var(--emr-on-secondary-fixed)',
        'on-secondary-fixed-variant': 'var(--emr-on-secondary-fixed-variant)',

        'on-tertiary': 'var(--emr-on-tertiary)',
        'tertiary-container': 'var(--emr-tertiary-container)',
        'on-tertiary-container': 'var(--emr-on-tertiary-container)',
        'tertiary-fixed': 'var(--emr-tertiary-fixed)',
        'tertiary-fixed-dim': 'var(--emr-tertiary-fixed-dim)',
        'on-tertiary-fixed': 'var(--emr-on-tertiary-fixed)',
        'on-tertiary-fixed-variant': 'var(--emr-on-tertiary-fixed-variant)',

        'on-error': 'var(--emr-on-error)',
        'error-container': 'var(--emr-error-container)',
        'on-error-container': 'var(--emr-on-error-container)',

        'surface': 'var(--emr-surface)',
        'surface-dim': 'var(--emr-surface-dim)',
        'surface-bright': 'var(--emr-surface-bright)',
        'surface-container-lowest': 'var(--emr-surface-container-lowest)',
        'surface-container-low': 'var(--emr-surface-container-low)',
        'surface-container': 'var(--emr-surface-container)',
        'surface-container-high': 'var(--emr-surface-container-high)',
        'surface-container-highest': 'var(--emr-surface-container-highest)',
        'on-surface': 'var(--emr-on-surface)',
        'on-surface-variant': 'var(--emr-on-surface-variant)',

        'outline': 'var(--emr-outline)',
        'outline-variant': 'var(--emr-outline-variant)',

        'inverse-surface': 'var(--emr-inverse-surface)',
        'inverse-on-surface': 'var(--emr-inverse-on-surface)',
        'inverse-primary': 'var(--emr-inverse-primary)',

        'scrim': 'var(--emr-scrim)',
        'shadow': 'var(--emr-shadow)',

        accent: 'var(--emr-accent)',
        warn: 'var(--emr-warn)',
        dark: '#303030'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries')
  ]
}