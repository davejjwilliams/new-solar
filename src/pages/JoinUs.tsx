import type { FunctionComponent } from "react";
import TextLink from "../components/general/TextLink";

type JoinUsProps = object;

const JoinUs: FunctionComponent<JoinUsProps> = () => {
    return (
        <>
            <div className="page-title">Work With Us</div>
            <p>We are looking for talented people who are interested in joining SOLAR as visiting scholars (at all levels), PhD students, Research Assistants and Research Fellows.</p>
            <p> If you are interested, send an e-mail to <TextLink url="mailto:f.sarro@ucl.ac.uk" text="Prof. Federica Sarro"/> and include your CV, a statement of your research interests and experience, ideal starting time (and transcripts if you are a student) in your message.</p>
        </>
    );
}

export default JoinUs;