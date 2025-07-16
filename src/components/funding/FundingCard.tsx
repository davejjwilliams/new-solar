import { type FunctionComponent } from 'react'
import Panel from '../general/Panel';

interface FundingCardProps {
    title: string;
    logoFilename: string;
    description: string;
}

const FundingCard: FunctionComponent<FundingCardProps> = ({ title, logoFilename, description }) => {
    return (<Panel>
        <img src={"/assets/website-images/" + logoFilename} alt="Grant Logo" className='funding-logo' />
        <br />
        <div className='funding-title'>{title}</div>
        <div className='funding-subtitle'>{description}</div>
    </Panel>);
}

export default FundingCard;