import styled, { css } from 'styled-components';

export type BtnProps = {
  primary?: boolean;
  py?: string;
  px?: string;
};

export const Button = styled.a<BtnProps>`
  display: inline-block;
  color: ${({ theme }) => theme.colors['text-primary']};
  font-weight: ${({ theme }) => theme.weights.md};
  font-size: ${({ theme }) => theme.sizes.lg};
  transition: all 0.3s;
  &:hover,
  &.active {
    color: ${({ theme, primary }) => (!primary ? theme.colors.orange : '')};
  }

  ${({ theme, primary }) => {
    if (primary)
      return css`
        font-weight: ${({ theme }) => theme.weights.bd};
        border-radius: 3rem;
        color: ${({ theme }) => theme.colors.alt};
        background-color: ${theme.colors.orange};
        &:hover {
          filter: brightness(0.9);
        }
      `;
  }}
  ${({ py, px, theme: { spaces } }) => {
    if (py !== undefined && px !== undefined) {
      return css`
        padding: ${spaces[`${py}`]} ${spaces[`${px}`]};
      `;
    }
  }}
`;
