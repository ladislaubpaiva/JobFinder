import styled from 'styled-components';
import { Limits } from '../../styles/global';

export const Container = styled.header`
  ${Limits}
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spaces['3xl']};

  a:has(img) {
    height: 4.8rem;
    img {
      width: 100%;
    }
  }
`;

export const Navbar = styled.nav`
  ul {
    display: flex;
    gap: ${({ theme }) => theme.spaces['2xl']};
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xl};
`;
