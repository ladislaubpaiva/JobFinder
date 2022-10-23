import styled from 'styled-components';

export const Container = styled.header<{ left: boolean }>`
  text-align: ${({ left }) => (left ? 'left' : 'center')};
  padding-top: ${({ theme }) => theme.spaces['6xl']};
  p {
    margin-top: ${({ theme }) => theme.spaces.xl};
    color: ${({ theme }) => theme.colors.orange};
    font-size: ${({ theme }) => theme.sizes.xl};
    font-weight: ${({ theme }) => theme.weights.rg};
    margin-bottom: ${({ theme }) => theme.spaces.xs};
  }

  h2 {
    line-height: 120%;
    font-size: ${({ theme }) => theme.sizes['4xl']};
    font-weight: ${({ theme }) => theme.weights.bd};
    :not(.no-mb) {
      margin-bottom: ${({ theme }) => theme.spaces['6xl']};
    }
  }
`;
