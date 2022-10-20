import React, { ForwardedRef, InputHTMLAttributes } from 'react';
import * as S from './styles';

type PropsType = {
  label: string;
  Icon: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef(
  (
    { label, Icon, ...props }: PropsType,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <S.Container>
        <label className="sr-only">{label}</label>
        {Icon}
        <input ref={ref} {...props} />
      </S.Container>
    );
  }
);
