import type { FunctionComponent } from 'react';
import CollapsibleSection from '../components/general/CollapsibleSection';
import AwardCard from '../components/awards/AwardCard';
import awards from '../awards.json';

type AwardsProps = object;

const Awards: FunctionComponent<AwardsProps> = () => {
  // Group awards by year
  const awardsByYear = awards.reduce<Record<number, typeof awards>>((acc, award) => {
    if (!acc[award.year]) acc[award.year] = [];
    acc[award.year].push(award);
    return acc;
  }, {});

  // Sort years descending
  const sortedYears = Object.keys(awardsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className='smaller-content'>
      <div className='page-title'>Awards</div>
      {sortedYears.map((year) => (
        <CollapsibleSection
          key={year}
          title={year.toString()}
          open={true}
          id={`${year}-awards`}
        >
          {awardsByYear[year].map((award, index) => (
            <AwardCard
              key={index}
              awardName={award.awardName}
              type={award.type}
              venue={award.venue}
              title={award.title}
              recipient={award.recipient}
              paperUrl={award.paperUrl}
              awardUrl={award.awardUrl}
            />
          ))}
        </CollapsibleSection>
      ))}
    </div>
  );
};

export default Awards;
