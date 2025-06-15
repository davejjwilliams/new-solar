import { type FunctionComponent } from "react";

interface FundingProps {

}

const Funding: FunctionComponent<FundingProps> = () => {
    return (
        <div className="smaller-content">
            <div className="page-title">Funding</div>
            <div className="subtitle">The work of the SOLAR group has been supported by</div>
        </div>
    );
}

export default Funding;