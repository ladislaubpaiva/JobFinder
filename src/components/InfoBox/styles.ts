import styled from 'styled-components';
import { Limits } from '../../styles/global';

export const Container = styled.div`
  display: grid;
  max-width: 55rem;
  gap: ${({ theme }) => theme.spaces['2xl']};
  padding: ${({ theme }) => theme.spaces.xl};
  background-color: ${({ theme }) => theme.colors.alt};
  border-radius: ${({ theme }) => theme.sizes['2xl']};
`;

export const Article = styled.article`
  h3 {
    font-size: ${({ theme }) => theme.sizes.lg};
    color: ${({ theme }) => theme.colors.orange};
    font-weight: ${({ theme }) => theme.weights.bd};
    margin-bottom: ${({ theme }) => theme.spaces.xs};
  }

  p {
    font-weight: ${({ theme }) => theme.weights.lg};
  }
`;
