import { type FunctionComponent, useEffect, useState } from 'react';
import Panel from '../components/general/Panel';
import TextLink from '../components/general/TextLink';
import NewsCarousel from '../components/general/carousel/NewsCarousel';
import { FaFileAlt, FaTrophy, FaUsers } from 'react-icons/fa';
import members from '../members.json';
import publications from '../publications.json';
import awards from '../awards.json';

type HomeProps = object;

const Home: FunctionComponent<HomeProps> = () => {
  const totalMembers = members.length;
  const [memberCount, setMemberCount] = useState(1);
  const totalPublications = publications.length;
  const [publicationCount, setPublicationCount] = useState(1);
  const totalAwards = awards.length;
  const [awardCount, setAwardCount] = useState(1);

  useEffect(() => {
    if (memberCount < totalMembers) {
      const remaining = totalMembers - memberCount;
      const duration = Math.max(20, 150 - remaining * remaining);
      const timeout = setTimeout(() => {
        setMemberCount(memberCount + 1);
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [memberCount, totalMembers]);

  useEffect(() => {
    if (publicationCount < totalPublications) {
      const remaining = totalPublications - publicationCount;
      const duration = Math.max(20, 150 - remaining * remaining);
      const timeout = setTimeout(() => {
        setPublicationCount(publicationCount + 1);
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [publicationCount, totalPublications]);

  useEffect(() => {
    if (awardCount < totalAwards) {
      const remaining = totalAwards - awardCount;
      const duration = Math.max(20, 150 - remaining * remaining);
      const timeout = setTimeout(() => {
        setAwardCount(awardCount + 1);
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [awardCount, totalAwards]);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <img src="assets/logo/s-logo.png" alt="S Logo" style={{ height: '200px', width: 'auto' }} />
        <img src="assets/logo/solar-logo-5.png" alt="Solar Logo" style={{ height: '200px', width: 'auto' }} className='logo' />
        <img src="assets/logo/lar-logo.png" alt="LAR Logo" style={{ height: '200px', width: 'auto' }} />
      </div>
      <div className='page-title'>
        Software Optimisation, Learning and Analytics Research
      </div>

      <div className="panel-grid-custom">
        <Panel large url="/research">
          <img src="assets/member-images/FedericaSarro.jpeg" alt="Federica Sarro" className='home-portrait' />
          Led by <TextLink url="http://www0.cs.ucl.ac.uk/staff/F.Sarro/" text="Prof. Federica Sarro" /> at
          <br />
          <TextLink url="https://www.ucl.ac.uk/" text="University College London (UCL)" />
          <br />
          <br />
          Research at the interface of <b>Software Optimisation</b>, <b>Machine/Evolutionary Learning</b> and <b>Analytics</b>.
        </Panel>
        <Panel large={false} url="/members">
          <FaUsers className='panel-icon' /> <b>{memberCount}</b> Members
        </Panel>
        <Panel large={false} url="/publications">
          <FaFileAlt className='panel-icon' /> <b>{publicationCount}</b> Publications
        </Panel>
        <Panel large={false} url="/awards">
          <FaTrophy className='panel-icon' /> <b>{awardCount}</b> Awards
        </Panel>
      </div>
      
      <p>
        Our research work has obtained several international awards and generous funding. We have collaborated with several other researchers world-wide and also software companies, including Facebook and Google.
      </p>
      <p>
        In SOLAR we promote and embrace open science, and thus we strive to share our publications, data, tools, and models inside and outside our group. You can find the presentations of some of our work on our YouTube channel.
      </p>

      <hr className="page-divider" />

      <NewsCarousel />
    </>
  );
};

export default Home;
