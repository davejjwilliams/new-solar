import type { FunctionComponent } from 'react';
import { FiLink } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';

interface MemberCardProps {
    name: string;
    title: string;
    subtitle: string;
    imgUrl: string;
    links: object;
}

const MemberCard: FunctionComponent<MemberCardProps> = ({ name, title, subtitle, imgUrl, links }) => {
    const [firstName, ...lastNameParts] = name.split(" ");
    const lastName = lastNameParts.join(" ");

    return (
        <div className="member-card">
            <div>
                <img src={"/assets/member-images/" + imgUrl} alt={name} />
            </div>
            <div className="member-links">
                {Object.entries(links).map(([key, value]) => value !== "" && (
                    <a
                        key={key}
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`member-link ${key}`}
                        aria-label={key}
                    >
                        {key === "personal" && <FiLink />}
                        {key === "scholar" && <SiGooglescholar />}
                        {key === "linkedin" && <SiLinkedin />}
                        {key !== "personal" && key !== "scholar" && key !== "linkedin" && (key.charAt(0).toUpperCase() + key.slice(1))}
                    </a>
                ))}
            </div>
            <div className="member-title">{title}</div>
            <div className="member-card-name">
                <span className="member-card-first-name">{firstName}</span>
                <br />
                {lastName}
            </div>
            <div className="member-card-subtitle">
                {subtitle}
            </div>
        </div>
    );
};

export default MemberCard;