import styled from 'styled-components';

import { Limits } from '../../styles/global';
import * as S from '../SectionHeader/styles';

export const Container = styled.section`
  columns: 2;
  margin-top: ${({ theme }) => theme.spaces['6xl']};
  padding-bottom: ${({ theme }) => theme.spaces['6xl']};
  ${Limits}
`;

export const Content = styled.div`
  ${S.Container} {
    h2 {
      margin-bottom: ${({ theme }) => theme.spaces.lg};
    }
  }

  p {
    line-height: 140%;
    font-size: ${({ theme }) => theme.sizes.lg};
    margin-bottom: ${({ theme }) => theme.spaces['6xl']};
  }
`;

export const Header = styled.div`
  h1 {
    line-height: 120%;
    max-width: 67rem;
    font-weight: ${({ theme }) => theme.weights.bd};
    font-size: ${({ theme }) => theme.sizes['6xl']};
    span {
      color: ${({ theme }) => theme.colors.orange};
    }

    margin-bottom: ${({ theme }) => theme.sizes['2xl']};
  }

  p {
    line-height: 140%;
    max-width: 56rem;
    font-size: ${({ theme }) => theme.sizes.lg};
    font-weight: ${({ theme }) => theme.weights.lg};
    color: ${({ theme }) => theme.colors['text-card']};
  }
`;

export const FormContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spaces.lg};
`;

export const SideContent = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;
