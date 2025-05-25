import MemberCard from '../components/members/MemberCard';
import CollapsibleSection from '../components/general/CollapsibleSection';
import type { FunctionComponent } from 'react';
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
  return filteredMembers;
};

const Members: FunctionComponent<MembersProps> = () => {
  // Filter and sort the members by role and name
  const academics = getMemberSubset('academic', false) || [];
  const fellows = getMemberSubset('fellow', true) || [];
  const honoraryFellows = getMemberSubset('honorary-fellow', true) || [];
  const phdCandidates = getMemberSubset('phd', true) || [];
  const formerMembers = getMemberSubset('former', true) || [];
  const researchVisitors = getMemberSubset('visitor', true) || [];
  const distinguishedAlumni =
    getMemberSubset('distinguished-alumni', true) || [];

  return (
    <>
      <div className='page-title'>The SOLAR Team</div>
      <CollapsibleSection title='Academics' open={true}>
        <div className='member-grid'>
          {academics.map((member) => (
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
          {fellows.map((member) => (
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
          {honoraryFellows.map((member) => (
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
          {phdCandidates.map((member) => (
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
      <CollapsibleSection title='Former Members' open={true}>
        <div className='member-grid'>
          {formerMembers.map((member) => (
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
      <CollapsibleSection title='Research Visitors' open={true}>
        <div className='member-grid'>
          {researchVisitors.map((member) => (
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
      <CollapsibleSection title='Distinguished BSc/MSc Alumni' open={true}>
        <div className='member-grid'>
          {distinguishedAlumni.map((member) => (
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
