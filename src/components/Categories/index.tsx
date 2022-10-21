import {
  CodeSimple,
  CurrencyCircleDollar,
  FolderOpen,
  Handshake,
  MegaphoneSimple,
  Palette,
  PenNibStraight,
  YoutubeLogo,
} from 'phosphor-react';

import { Category } from '../Category';
import { SectionHeader } from '../SectionHeader';

import * as S from './styles';

export const Categories = () => {
  return (
    <section>
      <SectionHeader>
        <p>Choose Categories</p>
        <h2>Choose Categories</h2>
      </SectionHeader>
      <S.Categories>
        <Category
          Icon={
            <MegaphoneSimple
              style={{ scale: '-1 1' }}
              size={56}
              weight="fill"
            />
          }
          title="Marketing & Communication"
          jobs={58}
        />
        <Category
          Icon={<PenNibStraight size={56} weight="fill" />}
          title="UI / UX Design"
          jobs={120}
          primary
        />
        <Category
          Icon={<CurrencyCircleDollar size={56} weight="fill" />}
          title="Finance Management"
          jobs={230}
        />
        <Category
          Icon={<CodeSimple size={56} weight="fill" />}
          title="Web Development"
          jobs={100}
        />
        <Category
          Icon={<FolderOpen size={56} weight="fill" />}
          title="Project Management"
          jobs={87}
        />
        <Category
          Icon={<Handshake size={56} weight="fill" />}
          title="Business & Consulting"
          jobs={23}
        />
        <Category
          Icon={<Palette size={56} weight="fill" />}
          title="Graphic Designer"
          jobs={65}
        />
        <Category
          Icon={<YoutubeLogo size={56} weight="fill" />}
          title="Video Editor"
          jobs={120}
        />
      </S.Categories>
    </section>
  );
};
