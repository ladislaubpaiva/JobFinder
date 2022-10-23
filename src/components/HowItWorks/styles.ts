import styled from 'styled-components';

import { Limits } from '../../styles/global';

export const Container = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1.2fr;
  padding-bottom: ${({ theme }) => theme.spaces['6xl']};

  ${Limits}
  h2 {
    margin-bottom: ${({ theme }) => theme.spaces.lg};
  }
`;

export const Content = styled.div`
  p {
    line-height: 140%;
    font-size: ${({ theme }) => theme.sizes.lg};
    &.lg {
      max-width: 55rem;
      font-weight: ${({ theme }) => theme.weights.lg};
      margin-bottom: ${({ theme }) => theme.spaces.xl};
    }
  }
`;

export const SideContent = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;
