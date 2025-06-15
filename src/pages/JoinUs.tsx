import type { FunctionComponent } from "react";
import { FaLightbulb, FaLocationArrow, FaEnvelope, FaPaperclip } from "react-icons/fa";


type JoinUsProps = object;

const JoinUs: FunctionComponent<JoinUsProps> = () => {
    return (
        <>
            <div className="smaller-content">
                <div className="page-title">Work With Us</div>
                <div className="contact-logo">
                    <a href="mailto:f.sarro@ucl.ac.uk">
                        <img src="/assets/logo/join-us-logo.png" alt="Join Us Logo" className="logo" />
                    </a>
                </div>


                <div className="panel glass">
                    <div className="centred">
                        We are looking for passionate and talented people to join our team at SOLAR!
                    </div>
                </div>

                <div className="columns-container">
                    <div className="column">
                        <div className="panel glass">
                            <div className="panel-title"><FaLightbulb /> Open Positions:</div>
                            <ul>
                                <li>Visiting Scholars (all levels)</li>
                                <li>PhD Students</li>
                                <li>Research Assistants</li>
                                <li>Research Fellows</li>
                            </ul>
                        </div>
                        <a href="mailto:f.sarro@ucl.ac.uk" className="contact-button">Contact Us</a>
                    </div>
                    <div className="column">
                        <div className="panel glass">
                            <div className="panel-title"><FaLocationArrow /> Location:</div>
                            <p>University College London (UCL)</p>

                            <div className="panel-title"><FaEnvelope /> Contact:</div>
                            <p>Prof. Federica Sarro<br />
                                f.sarro@ucl.ac.uk</p>

                            <div className="panel-title"><FaPaperclip /> What to Include:</div>
                            <ul>
                                <li>CV</li>
                                <li>Statement of research interests</li>
                                <li>Experience & ideal starting date</li>
                                <li>Transcript (if you're a student)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JoinUs;