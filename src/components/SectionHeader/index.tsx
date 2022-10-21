import React from 'react';

import * as S from './styles';

export const SectionHeader = ({
  left = false,
  children,
}: {
  left?: boolean;
  children: React.ReactNode;
}) => {
  return <S.Container left={left}>{children}</S.Container>;
};
