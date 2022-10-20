import React from 'react';

import * as S from './styles';

import Slack from '../../assets/slack.png';
import Microsoft from '../../assets/microsoft.png';
import Google from '../../assets/google.png';
import Airbnb from '../../assets/airbnb.png';

export const Companies = () => {
  return (
    <S.Container>
      <S.Title>
        Join Most Well Known <span>Companies</span> Around The World
      </S.Title>
      <S.Brands>
        <img src={Slack} alt="Slack Logo" />
        <img src={Microsoft} alt="Microsoft Logo" />
        <img src={Google} alt="Google Logo" />
        <img src={Airbnb} alt="Airbnb Logo" />
      </S.Brands>
    </S.Container>
  );
};
