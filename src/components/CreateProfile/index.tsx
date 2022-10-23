import React from 'react';
import { BellRinging } from 'phosphor-react';

import * as S from './styles';

import PersonImg from '../../assets/person.png';
import Avatar from '../../assets/avatar.png';

import { Button } from '../Button';
import { Card } from '../Card';
import { SectionHeader } from '../SectionHeader';

export const CreateProfile = () => {
  return (
    <S.Container>
      <S.SideContent>
        <img src={PersonImg} alt="Woman with a notebook" />
        <Card
          Icon={<img src={Avatar} alt="Avatar" />}
          color="blue"
          title="Wartiyem"
          custom={true}
          top="16%"
          right="20%"
        >
          <p>UI/UX Designer</p>
          <Button primary py="xs" px="md">
            Hire Me
          </Button>
        </Card>
        <Card
          Icon={<BellRinging size={52} weight="fill" />}
          color="red"
          title="New Interview"
          large={true}
          top="40%"
          right="unset"
          left="5%"
        >
          You has now interview
          <br /> next week
        </Card>
      </S.SideContent>
      <S.Content>
        <SectionHeader left>
          <p>Create Profile</p>
          <h2 className="no-mb">
            Build Your Personal
            <br /> Account Profile
          </h2>
        </SectionHeader>
        <p className="mb">
          Create an account for the job information you want, get daily
          notifications and you can easily apply directly to the company you
          want and create an account now for free
        </p>

        <Button primary py="lg" px="lg">
          Create Account
        </Button>
      </S.Content>
    </S.Container>
  );
};
