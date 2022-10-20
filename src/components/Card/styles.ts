import styled, { css } from 'styled-components';
import { CardProps } from '.';

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.colors['bg-card']};
  box-shadow: 0 0.5rem 1rem rgba(51, 48, 48, 0.25);
  backdrop-filter: blur(5.25733px);
  padding: ${({ theme }) => theme.spaces.md};
  border-radius: 1.6rem;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};

  svg {
    ${({ theme, border, color }) => {
      if (!border) {
        return css`
          color: ${theme.colors[color]};
        `;
      } else
        return css`
          color: ${theme.colors.gray};
          & > *[opacity='0.2'] {
            opacity: 1;
            color: ${theme.colors[color]};
          }
        `;
    }}
  }

  h3 {
    color: ${({ theme }) => theme.colors['text-card']};
    font-weight: ${({ theme }) => theme.weights.bd};
    line-height: 140%;
    font-size: ${({ theme }) => theme.sizes.xl};
    letter-spacing: 0.005em;
  }

  p {
    line-height: 150%;
    text-align: center;
    color: ${({ theme }) => theme.colors['text-primary']};
    font-weight: ${({ theme }) => theme.weights.md};
    font-size: ${({ theme }) => theme.sizes.md};
  }
`;
