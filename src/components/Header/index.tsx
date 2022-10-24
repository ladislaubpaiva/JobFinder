import * as S from './styles';

import Logo from '../../assets/logo.png';
import { Button } from '../Button';

export const Header = () => (
  <S.Container>
    <a href="#">
      <img src={Logo} alt="Jobs Logo" />
    </a>
    <S.Navbar>
      <ul>
        <li>
          <Button className="active">Home</Button>
        </li>
        <li>
          <Button>Employer</Button>
        </li>
        <li>
          <Button>Candidate</Button>
        </li>
      </ul>
    </S.Navbar>
    <S.Buttons>
      <Button>Login</Button>
      <Button primary px={'2xl'} py={'md'}>
        Sign Up
      </Button>
    </S.Buttons>
  </S.Container>
);
