import styled from 'styled-components';
import { Limits } from '../../styles/global';

export const Container = styled.footer`
  padding-top: ${({ theme }) => theme.spaces['6xl']};
  background-color: ${({ theme }) => theme.colors.alt};
  padding-bottom: ${({ theme }) => theme.spaces['2xl']};
`;

export const Content = styled.div`
  ${Limits}
  display: flex;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.spaces['6xl']};
`;

export const Brand = styled.div`
  a {
    height: 4.8rem;
    margin-bottom: ${({ theme }) => theme.spaces.lg};
    img {
      width: 100%;
    }
  }

  p {
    max-width: 30rem;
    line-height: 150%;
    font-size: ${({ theme }) => theme.sizes.md};
    font-weight: ${({ theme }) => theme.weights.lg};
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 4rem;

  h3 {
    line-height: 140%;
    font-weight: ${({ theme }) => theme.weights.bd};
    font-size: ${({ theme }) => theme.sizes.lg};
    margin-bottom: ${({ theme }) => theme.spaces['xl']};
  }

  a {
    line-height: 150%;
    font-size: ${({ theme }) => theme.sizes.md};
    margin-bottom: ${({ theme }) => theme.spaces.xs};
  }
`;

export const Copy = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.md};
`;
