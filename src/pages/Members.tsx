import MemberCard from '../components/members/MemberCard';
import CollapsibleSection from '../components/general/CollapsibleSection';
import type { FunctionComponent } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/Members.css';
import members from '../members.json';

type MembersProps = object;

const getMemberSubset = (role: string, filter: boolean) => {
  let filteredMembers = members.filter((member) => member.role === role);
  if (filter) {
    filteredMembers = filteredMembers.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }
  return filteredMembers || [];
};

const Members: FunctionComponent<MembersProps> = () => {
  const groupList = [
    {
      id: 'academics',
      label: 'Academics',
      members: getMemberSubset('academic', false),
    },
    {
      id: 'fellows',
      label: 'Research Fellows',
      members: getMemberSubset('fellow', true),
    },
    {
      id: 'honorary-fellows',
      label: 'Honorary Research Fellows',
      members: getMemberSubset('honorary-fellow', true),
    },
    {
      id: 'phd-candidates',
      label: 'PhD Candidates',
      members: getMemberSubset('phd', true),
    },
    {
      id: 'former-members',
      label: 'Former Members',
      members: getMemberSubset('former-member', true),
    },
    {
      id: 'research-visitors',
      label: 'Research Visitors',
      members: getMemberSubset('visitor', true),
    },
    {
      id: 'former-research-visitors',
      label: 'Former Research Visitors',
      members: getMemberSubset('former-visitor', true),
    },
    {
      id: 'distinguished-alumni',
      label: 'Distinguished BSc/MSc Alumni',
      members: getMemberSubset('distinguished-alumni', true),
    },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView();
      window.history.replaceState(null, '', `#${id}`);
    }
  };


  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='content'>
      <div className='page-title'>The SOLAR Team</div>
      <div className='members-layout'>
        <div className='members-menu'>
          <ul>
            {groupList.map((group) => (
              <li key={group.id}>
                <a
                  href={`#${group.id}`}
                  onClick={(e) => handleNavClick(e, group.id)}
                >
                  {group.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='members-content'>
          {groupList.map((group) => (
            <CollapsibleSection
              key={group.id}
              title={group.label}
              open={true}
              id={group.id}
            >
              <div className='member-grid'>
                {group.members.map((member) => (
                  <MemberCard
                    key={member.name}
                    name={member.name}
                    title={member.title}
                    subtitle={member.subtitle}
                    imgUrl={member.imgUrl}
                    links={member.links}
                  />
                ))}
              </div>
            </CollapsibleSection>
          ))}
        </div>
      </div>
      <button
        className='scroll-to-top-btn'
        title='Scroll to top'
        onClick={handleScrollTop}
        aria-label='Scroll to top'
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Members;
