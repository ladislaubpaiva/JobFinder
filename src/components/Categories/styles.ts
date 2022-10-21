import styled from 'styled-components';
import { Limits } from '../../styles/global';

export const Header = styled.header`
  text-align: center;
  padding-top: ${({ theme }) => theme.spaces['6xl']};
  p {
    margin-top: ${({ theme }) => theme.spaces.xl};
    color: ${({ theme }) => theme.colors.orange};
    font-size: ${({ theme }) => theme.sizes.xl};
    font-weight: ${({ theme }) => theme.weights.rg};
  }

  h2 {
    line-height: 120%;
    font-size: ${({ theme }) => theme.sizes['3xl']};
    font-weight: ${({ theme }) => theme.weights.bd};
    margin-bottom: ${({ theme }) => theme.spaces['6xl']};
  }
`;

export const Categories = styled.div`
  ${Limits}
  display: grid;
  gap: ${({ theme }) => theme.spaces.lg};
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 30rem));
  margin-bottom: ${({ theme }) => theme.spaces['2xl']};
`;
