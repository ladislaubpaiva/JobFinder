import { createGlobalStyle } from 'styled-components';
import reset from './reset';

export default createGlobalStyle`
${reset}

#root{
  max-width: 1364px;
  margin: 0 auto;
  padding: 0 1rem;
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
