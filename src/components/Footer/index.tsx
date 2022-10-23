import * as S from './styles';

import Logo from '../../assets/logo.png';
import { Button } from '../Button';

const year = new Date().getFullYear();

export const Footer = () => (
  <S.Container>
    <S.Content>
      <S.Brand>
        <Button>
          <img src={Logo} alt="Joobs Footer Logo" />
        </Button>
        <p>
          Joobs is the largest talent platform in Southeast Asia and Taiwan for
          career development and recruitment.
        </p>
      </S.Brand>
      <S.Links>
        <article>
          <h3>Employer</h3>
          <ul>
            <li>
              <Button>About Us</Button>
            </li>
            <li>
              <Button>Careers</Button>
            </li>
            <li>
              <Button>Blog</Button>
            </li>
          </ul>
        </article>
        <article>
          <h3>Find Vacancy Based On</h3>
          <ul>
            <li>
              <Button>Help Center</Button>
            </li>
            <li>
              <Button>Job Location</Button>
            </li>
            <li>
              <Button>Company Name</Button>
            </li>
          </ul>
        </article>
        <article>
          <h3>Address</h3>
          <ul>
            <li>
              <Button>hello@jobbb.com</Button>
            </li>
            <li>
              <address>
                <Button>
                  JL. Setiabudhi No. 193 Sukasari, Bandung
                  <br />
                  West Java, Indonesia
                </Button>
              </address>
            </li>
          </ul>
        </article>
      </S.Links>
    </S.Content>
    <S.Copy>&copy; {year} Joobs - All rights reserved.</S.Copy>
  </S.Container>
);
