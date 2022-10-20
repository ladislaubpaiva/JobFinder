import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };

    sizes: {
      xs: '1.2rem';
      sm: '1.4rem';
      md: '1.6rem';
      lg: '2rem';
      xl: '2.4rem';
      '2xl': '3.2rem';
      '3xl': '3.6rem';
      '4xl': '4.4rem';
      '5xl': '5.6rem';
      '6xl': '8rem';
    };

    weights: {
      lg: number;
      rg: number;
      md: number;
      bd: number;
    };

    spaces: {
      [xs: string]: '0.8rem';
      sm: '1.2rem';
      md: '1.6rem';
      lg: '2.4rem';
      xl: '3.2rem';
      '2xl': '4rem';
      '3xl': '4.8rem';
      '4xl': '5.6rem';
      '5xl': '6.4rem';
      '6xl': '7.2rem';
    };

    colors: {
      [bg: string]: string;
      alt: string;
      red: string;
      line: string;
      gray: string;
      blue: string;
      green: string;
      orange: string;
      'bg-card': string;
      'text-card': string;
      'text-primary': string;
      'text-secondary': string;
      'text-emphasis': string;
    };
  }
}
