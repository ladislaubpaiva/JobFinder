import * as S from './styles';

export const InfoBox = () => {
  const info = [
    {
      title: 'Easy to upload Your Best CV and Portfolio',
      desc: 'You can upload your resume, CV, and portfolio directly to Joobs',
    },
    {
      title: 'You Will Be Notified With All Updates',
      desc: 'Get notified about new job vacancies. scheduled interview and job application',
    },
    {
      title: 'Apply for your dream job from the best company',
      desc: 'We will provide recommendations for your choice companies from all over the world',
    },
  ];

  return (
    <S.Container>
      {info.map(({ title, desc }) => (
        <S.Article>
          <h3>{title}</h3>
          <p>{desc}</p>
        </S.Article>
      ))}
    </S.Container>
  );
};
