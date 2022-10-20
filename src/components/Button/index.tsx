import * as S from './styles';

import { AnchorHTMLAttributes } from 'react';

type ButtonProps = S.BtnProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = ({ href, ...props }: ButtonProps) => (
  <S.Button href={href || '#'} {...props}></S.Button>
);
