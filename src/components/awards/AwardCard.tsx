import type { FunctionComponent } from 'react';
import TextLink from '../general/TextLink';
import '../../styles/Awards.css';

interface AwardCardProps {
  awardName: string;
  type: string;
  venue: string;
  title: string;
  recipient: string;
  paperUrl?: string;
  awardUrl?: string;
}

const AwardCard: FunctionComponent<AwardCardProps> = ({
  awardName,
  type,
  venue,
  title,
  recipient,
  paperUrl,
  awardUrl,
}) => {
  return (
    <div className='award-card'>
      <div className='award-card-name'>{awardName}</div>
      <div className='award-card-meta'>
        <span className='award-card-type'>{type}</span> &middot;{' '}
        <span>{venue}</span>
      </div>
      <div className='award-card-title'>{title}</div>
      <div className='award-card-recipient'>Recipient: {recipient}</div>
      <div className='award-card-links'>
        {paperUrl && <TextLink url={paperUrl} text='Paper' />}
        {awardUrl && <TextLink url={awardUrl} text='Details' />}
      </div>
    </div>
  );
};

export default AwardCard;
