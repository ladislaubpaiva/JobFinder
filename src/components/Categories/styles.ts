import styled from 'styled-components';
import { Limits } from '../../styles/global';

export const Categories = styled.div`
  ${Limits}
  display: grid;
  gap: ${({ theme }) => theme.spaces.lg};
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
  margin-bottom: ${({ theme }) => theme.spaces['2xl']};
`;
