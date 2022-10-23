import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

type PropsType = {
  label: string;
  Icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, Icon, ...props }: PropsType) => {
  return (
    <S.Container>
      <label className="sr-only">{label}</label>
      {Icon}
      <input {...props} />
    </S.Container>
  );
};
