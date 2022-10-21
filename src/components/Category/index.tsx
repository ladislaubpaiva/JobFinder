import React from 'react';
import * as S from './styles';

export type CategoryProps = {
  Icon: React.ReactNode;
  title: string;
  jobs: number;
  primary?: boolean;
};

export const Category = ({
  Icon,
  title,
  jobs,
  primary = false,
}: CategoryProps) => {
  return (
    <S.Container primary={primary}>
      <S.Icon>{Icon}</S.Icon>
      <S.Info>
        <h3>{title}</h3>
        <p>{jobs} Jobs Available</p>
      </S.Info>
    </S.Container>
  );
};
