import styled from 'styled-components';
import { Limits } from '../../styles/global';

export const Container = styled.section`
  padding-top: ${({ theme }) => theme.spaces['5xl']};
  padding-bottom: ${({ theme }) => theme.spaces['6xl']};
  background-color: ${({ theme }) => theme.colors.alt};
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: ${({ theme }) => theme.weights.rg};
  font-size: ${({ theme }) => theme.sizes.xl};
  padding-bottom: ${({ theme }) => theme.spaces['6xl']};
  span {
    font-weight: ${({ theme }) => theme.weights.bd};
    color: ${({ theme }) => theme.colors.orange};
  }
`;
export const Brands = styled.div`
  ${Limits}
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.alt};
  padding-bottom: ${({ theme }) => theme.spaces['2xl']};

  img {
    height: 4rem;
  }
`;
