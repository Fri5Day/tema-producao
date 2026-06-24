import type { ThemeTypes } from '@/types/themeTypes/ThemeType'

export const LightTheme: ThemeTypes = {
  name: 'DefaultTheme',
  dark: false,
  variables: {
    // 'border-color': '#F2F2F2', // Ajustado para combinar com o cinza claro da identidade visual
    'carousel-control-size': 10,
    gradient:
      'linear-gradient(250.38deg, #e6f4ff 2.39%, #69b1ff 34.42%, #1677ff 60.95%, #0958d9 84.83%, #002c8c 104.37%)',
    gradient2: 'linear-gradient(to right, rgb(9, 89, 218), rgb(22, 119, 255))',
    'card-shadow': '0px 1px 4px rgba(0, 0, 0, 0.08)',
  },
  colors: {
    primary: '#1e3c72', // '#2c588d',//'#1e3c72', // '#060D34', // Azul Escuro
    secondary: 'rgb(228 231 238)', // Azul Claro
    info: '#13c2c2',
    success: '#52c41a',
    accent: '#FFAB91',
    warning: '#faad14',
    error: '#7A0017',
    lightprimary: '#E6F4FF', // Azul Claro Suave para fundos
    lightsecondary: '#F2F2F2', // Cinza Claro para fundos
    lightsuccess: '#EAFCD4',
    lighterror: '#FFE7D3',
    lightwarning: '#FFF6D0',
    darkText: '#212121',
    lightText: '#8c8c8c',
    darkprimary: '#060D34', // '#0958d9', // Azul mais escuro para textos e contrastes
    darksecondary: '#7a7878', // Cinza Escuro para textos de apoio
    borderLight: '#e6ebf1',
    inputBorder: '#a1a1a5',
    containerBg: '#fafafb',
    surface: '#eceff4', // Tema do fundo da aplicação inteira
    'on-surface-variant': '#FFFFFF',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#f5f5f5',
    primary200: '#A1D2FF', // Variante de azul claro
    secondary200: '#EEEEEE', // Variante de cinza claro
    blueTek: '#181852',
    redTek: '#92171B',
    grayTek: '#DEE1E8',
    greenWhatsApp: '#16B600',
  },
}
