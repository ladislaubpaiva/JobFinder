import * as S from './styles';
import { Input } from '../Input';
import { Button } from '../Button';

export const Form = () => {
  return (
    <S.Container>
      <S.Title>
        <h2>
          Never Want to Miss
          <br /> Any Job News?
        </h2>
      </S.Title>
      <S.EmailInput>
        <Input
          label="Enter your email address"
          placeholder="Enter your email address"
        />
        <S.Divisor />
        <Button primary py="xs" px="md">
          Subscribe
        </Button>
      </S.EmailInput>
    </S.Container>
  );
};
