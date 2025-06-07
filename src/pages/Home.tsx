import type { FunctionComponent } from 'react';
import WindowCard from '../components/general/WindowCard';
import Carousel from '../components/general/carousel/Carousel';

type HomeProps = object;

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <img src="assets/logo/s-logo.png" alt="S Logo" style={{ height: '200px', width: 'auto' }} />
        <img src="assets/logo/solar-logo-5.png" alt="Solar Logo" style={{ height: '200px', width: 'auto' }} className='logo'/>
        <img src="assets/logo/lar-logo.png" alt="LAR Logo" style={{ height: '200px', width: 'auto' }} />
      </div>
      <div className='page-title'>
        Software Optimisation, Learning and Analytics Research
      </div>
      <WindowCard title='Hello World'>
        <h1>This is Card Content</h1>
      </WindowCard>
      <Carousel />
    </>
  );
};

export default Home;
