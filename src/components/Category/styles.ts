import styled, { css } from 'styled-components';

export const Container = styled.article<{ primary: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spaces.xl};
  border-radius: 3rem;
  box-shadow: 0 0.5rem 2.1rem #ffefe0;
  background-color: ${({ theme }) => theme.colors['bg-card']};
  padding: ${({ theme }) => `${theme.spaces.xl} ${theme.spaces.md}`};
  cursor: pointer;
  transition: 0.3s;

  ${({ primary, theme }) => {
    if (primary) {
      return css`
        background-color: ${theme.colors.orange};
        ${Icon} svg {
          color: ${theme.colors.gray};
        }
        ${Info} {
          h3 {
            color: ${theme.colors.alt};
          }
          p {
            color: ${theme.colors.gray};
          }
        }
      `;
    }
  }}

  &:hover {
    box-shadow: 0 0.7rem 2.1rem ${({ theme }) => theme.colors.line};
  }
`;
export const Icon = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
export const Info = styled.div`
  display: grid;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.md};
  h3 {
    font-weight: ${({ theme }) => theme.weights.bd};
    font-size: ${({ theme }) => theme.sizes.lg};
  }

  p {
    color: ${({ theme }) => theme.colors['text-card']};
    font-size: ${({ theme }) => theme.sizes.xs};
  }
`;
