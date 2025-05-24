import type { FunctionComponent } from 'react';

interface MemberCardProps {
    name: string;
    title: string;
    subtitle: string;
    imgUrl: string;
    webUrl: string;
}

const MemberCard: FunctionComponent<MemberCardProps> = ({ name, title, subtitle, imgUrl, webUrl }) => {
    const [firstName, ...lastNameParts] = name.split(" ");
    const lastName = lastNameParts.join(" ");

    return (
        <div className="member-card">
            <div>
                <a href={webUrl} target="_blank" rel="noopener noreferrer">
                    <img src={"/assets/member-images/" + imgUrl} alt={name} />
                </a>
            </div>
            <div className="member-title">{title}</div>
            <div className="member-card-name">
                <a href={webUrl} target="_blank" rel="noopener noreferrer">
                    {firstName}
                    <br />
                    {lastName}
                </a>
            </div>
            {subtitle !== "" && <div className="member-card-subtitle">
                {subtitle}
            </div>}
        </div>
    );
};

export default MemberCard;