import { type FunctionComponent } from "react";
import FundingCard from "../components/funding/FundingCard";
import funding from "../funding.json"

const Funding: FunctionComponent = () => {

    return (
        <div className="smaller-content">
            <div className="page-title">Funding & Grants</div>
            <div className="research-grid">
                {funding.map((item) => (
                    <FundingCard title={item.title} logoFilename={item.logoFilename} description={item.description} />
                ))}
            </div>
        </div>
    );
}

export default Funding;