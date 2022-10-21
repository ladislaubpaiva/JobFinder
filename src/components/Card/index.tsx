import React from 'react';
import * as S from './styles';

export type CardProps = {
  Icon?: React.ReactNode;
  title?: string;
  border?: boolean;
  large?: boolean;
  custom?: boolean;
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
}: CardProps) => {
  if (props.large) {
    return (
      <S.Card left={left} large {...props}>
        {Icon}
        <div>
          {title && <h3>{title}</h3>}
          <p>{children}</p>
        </div>
      </S.Card>
    );
  }

  if (props.custom) {
    return (
      <S.Card left={left} {...props}>
        {Icon}
        <div>
          {title && <h3>{title}</h3>}
          {children}
        </div>
      </S.Card>
    );
  }

  return (
    <S.Card left={left} {...props}>
      {Icon}
      {title && <h3>{title}</h3>}
      <p>{children}</p>
    </S.Card>
  );
};
