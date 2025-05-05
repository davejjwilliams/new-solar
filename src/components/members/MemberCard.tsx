// Define the props type
interface MemberCardProps {
    name: string;
    imgUrl: string;
    webUrl: string;
}

// Use the props type in the component
const MemberCard: React.FC<MemberCardProps> = ({ name, imgUrl, webUrl }) => {
    return (
        <div className="member-card">
            <div>
                <a href={webUrl} target="_blank" rel="noopener noreferrer">
                    <img src={imgUrl} alt={name} />
                </a>
            </div>
            <div className="member-card-name">
                <a href={webUrl} target="_blank" rel="noopener noreferrer">{name}</a>
            </div>
        </div>
    );
};

export default MemberCard;