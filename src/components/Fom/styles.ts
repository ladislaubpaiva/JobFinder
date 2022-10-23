import styled from 'styled-components';
import { Limits } from '../../styles/global';
import { Container as Input } from '../Input/styles';

export const Container = styled.section`
  ${Limits}
  gap: 10rem;
  display: grid;
  height: 44rem;
  place-items: center end;
  grid-template-columns: 1fr 1.6fr;
  background-image: url('/form-bg.png');
  border-radius: ${({ theme }) => theme.sizes['6xl']};
  padding-left: ${({ theme }) => theme.spaces['6xl']};
  padding-right: ${({ theme }) => theme.spaces['6xl']};
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.weights.bd};
  font-size: ${({ theme }) => theme.sizes['4xl']};
  line-height: 120%;
  color: ${({ theme }) => theme.colors.gray};
`;

export const EmailInput = styled.div`
  display: flex;
  max-width: 58rem;
  border-radius: 5.6rem;
  background-color: ${({ theme }) => theme.colors.alt};
  padding: ${({ theme }) => `${theme.spaces.md} ${theme.spaces.lg}`};
  gap: ${({ theme }) => theme.spaces.lg};

  ${Input} {
    flex: 1;
    input {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const Divisor = styled.div`
  height: 3.6rem;
  width: 0.3rem;
  background-color: ${({ theme }) => theme.colors.line};
`;
