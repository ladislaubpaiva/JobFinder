import { createGlobalStyle, css } from 'styled-components';
import reset from './reset';

export default createGlobalStyle`
${reset}

html{
  scroll-behavior: smooth;
}

body{
  font-size: ${({ theme }) => theme.sizes.md};
  background-color: ${({ theme }) => theme.colors.bg};
  font-family: ${({ theme }) => theme.fonts.primary};
  max-width: 100vw;
  overflow-x: hidden;
}

.sr-only{
  position: absolute!important;
  height: 1px!important;
  width: 1px!important;
  padding: 0!important;
  margin: -1px!important;
  overflow: hidden!important;
  clip-path: rect(0, 0, 0, 0)!important;
  white-space: nowrap!important;
  border-width: 0!important;
}
`;

export const Limits = css`
  max-width: 1364px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;
