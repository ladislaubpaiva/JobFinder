import styled from 'styled-components';
import { Button } from '../Button';
import { Buttons } from '../Header/styles';

export const Container = styled.section`
  columns: 2;
  margin-top: ${({ theme }) => theme.spaces['6xl']};
  padding-top: ${({ theme }) => theme.spaces['2xl']}; ;
`;

export const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes['5xl']};
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
  right: -15%;
  top: -23rem;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const JobButtons = styled(Buttons)`
  gap: ${({ theme }) => theme.spaces.lg};
`;

export const JobButton = styled(Button)`
  color: ${({ theme }) => theme.colors.orange};
  &:hover {
    filter: brightness(0.8);
  }
`;

export const JobInput = styled.div`
  display: flex;
  max-width: 100%;
  border-radius: 5.6rem;
  background-color: ${({ theme }) => theme.colors.alt};
  padding: ${({ theme }) => `${theme.spaces.md} ${theme.spaces.lg}`};
  gap: ${({ theme }) => theme.spaces.lg};
`;

export const Divisor = styled.div`
  height: 3.6rem;
  width: 0.3rem;
  background-color: ${({ theme }) => theme.colors.line};
`;
