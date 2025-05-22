import type { FunctionComponent } from 'react';
import WindowCard from '../components/general/WindowCard';

type HomeProps = object;

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <h1>*TITLE LOGO WILL GO HERE*</h1>
      <div className='page-title'>
        Software Optimisation, Learning and Analytics Research
      </div>
      <WindowCard title='Hello World'>
        <h1>This is Card Content</h1>
      </WindowCard>
    </>
  );
};

export default Home;
