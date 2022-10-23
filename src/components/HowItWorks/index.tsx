import React from 'react';
import { CheckCircle, UploadSimple } from 'phosphor-react';

import * as S from './styles';

import PersonImg from '../../assets/howitworks.png';

import { Card } from '../Card';
import { SectionHeader } from '../SectionHeader';
import { InfoBox } from '../InfoBox';

export const HowItWorks = () => {
  return (
    <S.Container>
      <S.Content>
        <SectionHeader left>
          <p>How It Works</p>
          <h2 className="no-mb">
            Easy Step To Find and
            <br />
            Apply Your Dream Job
          </h2>
        </SectionHeader>
        <p className="lg">
          We will help you to find your dream job easily, let us help you manage
          everything you need
        </p>
        <InfoBox />
      </S.Content>
      <S.SideContent>
        <img src={PersonImg} alt="Woman with a notebook" />
        <Card
          Icon={<UploadSimple size={48} weight="bold" />}
          color="orange"
          title="Upload your CV"
          large={true}
          top="40%"
          right="unset"
          left="4%"
        ></Card>
        <Card
          Icon={<CheckCircle size={52} weight="fill" />}
          color="green"
          title="You Are Hired"
          large={true}
          top="53%"
          right="unset"
          left="10%"
        >
          Congrats you got the job
          <br />
          as Ui / UX Designer at CODE.ID
        </Card>
      </S.SideContent>
    </S.Container>
  );
};
