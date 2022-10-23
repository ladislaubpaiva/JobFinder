import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Companies } from '../../components/Companies';
import { Categories } from '../../components/Categories';
import { CreateProfile } from '../../components/CreateProfile';
import { HowItWorks } from '../../components/HowItWorks';
import { Form } from '../../components/Fom';

export const Home = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Companies />
      <Categories />
      <CreateProfile />
      <HowItWorks />
      <Form />
    </main>
  </>
);
