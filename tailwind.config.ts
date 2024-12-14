/** @type {import('tailwindcss').Config} */
import daisyuiLib from 'daisyui';
import daisyuiTheme from 'daisyui/src/theming/themes';

export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
export const darkMode = ['class', '[data-theme="dark"]'];
export const theme = {
  extend: {
    colors: {
      gray: {
        antracita: '#2C2F33', // Fondo principal
        carbon: '#1F2937', // Fondo oscuro secundario
        humo: '#474B4F', // Tonos suaves intermedios
      },
      yellow: {
        suave: '#F1C40F', // Botones primarios y elementos destacados
        brillante: '#FFC107', // Tono más brillante para hover o destacados
      },
      blue: {
        vibrante: '#3B82F6', // Detalles llamativos, íconos o links
        acero: '#1E3A8A', // Azul oscuro complementario
      },
      white: '#FFFFFF', // Texto principal sobre fondos oscuros
      black: '#000000', // Uso específico en contrastes
      red: {
        alerta: '#EF4444', // Botones o mensajes de error
      },
      green: {
        confirmacion: '#22C55E', // Botones o mensajes de éxito
      },
    },

    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    screens: {
      xxs: '442px',
    },
  },
};
export const daisyui = {
  themes: [
    {
      light: {
        ...daisyuiTheme.light,
        primary: '#3f75a8',
        secondary: '#723fa8',
        accent: '#3fa8a6',
        neutral: '#727272',
        info: '#6366f1',
        success: '#16a249',
        warning: '#fbbf24',
        error: '#dc2828',
        '.bg-skeleton': {
          'background-color': '#bcbdbe',
        },
      },
      dark: {
        ...daisyuiTheme.dark,
        primary: '#3f75a8',
        secondary: '#723fa8',
        accent: '#3fa8a6',
        neutral: '#4b4b4b',
        info: '#6366f1',
        success: '#16a249',
        warning: '#fbbf24',
        error: '#dc2828',
        '.bg-skeleton': {
          'background-color': '#2d3641',
        },
      },
    },
  ],
};
export const plugins = [daisyuiLib];
