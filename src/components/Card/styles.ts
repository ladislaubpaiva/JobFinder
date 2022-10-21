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
    line-height: 140%;
    color: ${({ theme }) => theme.colors['text-card']};
    font-weight: ${({ theme }) => theme.weights.bd};
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

  ${({ theme, large, custom }) => {
    const H3: any = css`
      h3 {
        font-size: ${theme.sizes.lg};
        color: ${theme.colors['text-primary']};
      }
    `;

    if (large)
      return css`
        flex-direction: row;

        ${H3}

        p {
          text-align: left;
          font-size: ${theme.sizes.sm};
          color: ${theme.colors['text-card']};
        }
      `;

    if (custom)
      return css`
        padding-left: ${({ theme }) => theme.spaces.xl};
        padding-right: ${({ theme }) => theme.spaces.xl};

        img {
          position: relative;
          z-index: -1;
          width: 8rem;
          height: 8rem;
        }

        ${H3}

        text-align: center;

        p {
          text-align: left;
          font-size: ${theme.sizes.sm};
          color: ${theme.colors['text-card']};
          margin-bottom: ${({ theme }) => theme.spaces.lg};
        }
      `;
  }}
`;
