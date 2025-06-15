import type { FunctionComponent } from 'react';
import WindowCard from '../components/general/WindowCard';
import TextLink from '../components/general/TextLink';

type ResearchProps = object;

const Research: FunctionComponent<ResearchProps> = () => {
  return (
    <div className='content'>
      <div className='page-title'>Research</div>
      <WindowCard title='intro.txt'>
        <p>
          The SOLAR group is based at{' '}
          <TextLink
            url='https://www.ucl.ac.uk/'
            text='University College London'
          />{' '}
          (
          <TextLink
            url='https://www.ucl.ac.uk/computer-science/'
            text='Department of Computer Science'
          />
          , <TextLink url='https://www.ucl.ac.uk/crest/' text='CREST' />) and is
          led by{' '}
          <TextLink
            url='http://www0.cs.ucl.ac.uk/staff/F.Sarro/'
            text='Prof. Federica Sarro'
          />
          .
        </p>
        <p>
          Our research pushes the boundaries of automated approaches in Software
          Engineering, especially in the areas of software development, testing,
          repair, optimisation and analytics.
        </p>
        {/* We carry out cutting-edge research on Machine Learning for Software Engineering and Software Engineering for Machine Learning, with a focus on automatic software testing, repair, and optimisation, software fairness, and predictive analytics for project management and quality assurance.  */}
        <p>
          Our group has strong expertise in empirical software engineering,
          search-based software engineering, software analytics, software
          fairness, genetic improvement of software, software testing and
          repair, project managment, machine learning for software engineering,
          and software engineering for machine learning.
        </p>
        <p>
          We have obtained several international awards and generous{' '}
          <TextLink url='funding.html' text='funding' /> for our research, and
          have also collaborated with both large software companies, including
          Facebook and Google, and start-ups.
        </p>
        <p>
          We promote and embrace open science by sharing whenever possible the{' '}
          <TextLink url='os.html' text='artefacts' /> accompanying our{' '}
          <TextLink url='publications.html' text='research papers' /> and our{' '}
          <TextLink
            url='https://www.youtube.com/channel/UCZjGXjbG8p581_BleLioBFA'
            text='talks'
          />
          .
        </p>
      </WindowCard>
    </div>
  );
};

export default Research;
