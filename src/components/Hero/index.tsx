import { useState } from 'react';
import { Briefcase, Lightning, MagnifyingGlass, MapPin } from 'phosphor-react';
import HeroImg from '../../assets/hero.png';

import { Button } from '../Button';
import { Input } from '../Input';
import { Card } from '../Card';

import * as S from './styles';

export const Hero = () => {
  const jobs = ['Web Designer', 'UI/UX Designer', 'Frontend'];

  const [jobTitle, setJobTitle] = useState('');

  const handleJobButton = (job: string) => {
    setJobTitle(job);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <h1>
            Find the job of your <span>Dreams</span>
          </h1>
          <p>
            Find You New Job Today! New Job Postings Everyday just for you,
            browse the job you want and apply wherever you want
          </p>
        </S.Header>
        <S.FormContainer>
          <h2>Trending Jobs keyword : </h2>
          <S.JobButtons>
            {jobs.map((job, index) => (
              <S.JobButton key={index} onClick={() => handleJobButton(job)}>
                {job}
              </S.JobButton>
            ))}
          </S.JobButtons>
          <S.JobInput>
            <Input
              value={jobTitle}
              onChange={e => setJobTitle(e.target.value)}
              label="Enter Job title: "
              placeholder="Job title or keyword"
              Icon={<MagnifyingGlass size={24} weight="bold" />}
            />
            <S.Divisor />
            <Input
              label="Enter your Location: "
              placeholder="Location"
              Icon={<MapPin size={24} weight="bold" />}
            />
            <Button primary py={'xs'} px={'lg'}>
              Search
            </Button>
          </S.JobInput>
        </S.FormContainer>
      </S.Content>
      <S.SideContent>
        <img src={HeroImg} alt="Woman with a notebook" />
        <Card
          Icon={<Briefcase size={46} weight="fill" />}
          color="blue"
          title="10.5K"
          top="16%"
          right="20%"
        >
          Job Vacancy
        </Card>
        <Card
          Icon={<Lightning size={46} weight="duotone" />}
          border={true}
          color="orange"
          top="65%"
          right="unset"
          left="6%"
        >
          It only takes <br />a few seconds
        </Card>
      </S.SideContent>
    </S.Container>
  );
};
