import React from 'react';
import * as S from './styles';

export type CardProps = {
  Icon?: React.ReactNode;
  title?: string;
  border?: boolean;
  color: string;
  children?: React.ReactNode;
  top: string;
  right: string;
  left?: string;
};

export const Card = ({
  Icon,
  title,
  children,
  left = '',
  ...props
}: CardProps) => (
  <S.Card left={left} {...props}>
    {Icon}
    {title && <h3>{title}</h3>}
    <p>{children}</p>
  </S.Card>
);
