import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.sm};
  svg {
    color: ${({ theme }) => theme.colors.orange};
  }

  input {
    outline: 0;
    height: 100%;
    max-width: 18rem;
    background-color: transparent;
    &::placeholder,
    & {
      font-size: ${({ theme }) => theme.sizes.lg};
      color: ${({ theme }) => theme.colors['text-card']};
    }
  }
`;
