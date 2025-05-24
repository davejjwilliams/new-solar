import MemberCard from '../components/members/MemberCard';
import CollapsibleSection from '../components/general/CollapsibleSection';
import type { FunctionComponent } from 'react';
import "../styles/Members.css";
import members from '../members.json';

type MembersProps = object;

const Members: FunctionComponent<MembersProps> = () => {
  // Filter and sort the members by role and name
  const academics = members
    .filter(member => member.role === 'academic');
  const fellows = members
    .filter(member => member.role === 'fellow')
    .sort((a, b) => a.name.localeCompare(b.name));
  const honoraryFellows = members
    .filter(member => member.role === 'honorary-fellow')
    .sort((a, b) => a.name.localeCompare(b.name));
  const phdCandidates = members
    .filter(member => member.role === 'phd')
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className='page-title'>The SOLAR Team</div>
      <CollapsibleSection title='Academics' open={true}>
        <div className='member-grid'>
          {academics.map(member => (
            <MemberCard
              name={member.name}
              title={member.title}
              subtitle={member.subtitle}
              imgUrl={member.imgUrl}
              webUrl={member.webUrl}
            />
          ))}
        </div>
      </CollapsibleSection>
      <CollapsibleSection title='Research Fellows' open={true}>
        <div className='member-grid'>
          {fellows.map(member => (
            <MemberCard
              name={member.name}
              title={member.title}
              subtitle={member.subtitle}
              imgUrl={member.imgUrl}
              webUrl={member.webUrl}
            />
          ))}
        </div>
      </CollapsibleSection>
      <CollapsibleSection title='Honorary Research Fellows' open={true}>
        <div className='member-grid'>
          {honoraryFellows.map(member => (
            <MemberCard
              name={member.name}
              title={member.title}
              subtitle={member.subtitle}
              imgUrl={member.imgUrl}
              webUrl={member.webUrl}
            />
          ))}
        </div>
      </CollapsibleSection>
      <CollapsibleSection title='PhD Candidates' open={true}>
        <div className='member-grid'>
          {phdCandidates.map(member => (
            <MemberCard
              name={member.name}
              title={member.title}
              subtitle={member.subtitle}
              imgUrl={member.imgUrl}
              webUrl={member.webUrl}
            />
          ))}
        </div>
      </CollapsibleSection>
    </>
  );
};

export default Members;
