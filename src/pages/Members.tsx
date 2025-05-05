import MemberCard from "../components/members/MemberCard"
import CollapsibleSection from "../components/general/CollapsibleSection"

const Members = () => {
    return (
        <>
            <div className="page-title">The SOLAR Team</div>
            <CollapsibleSection title="Academics" open={true}>
                <div className="member-grid">
                    <MemberCard name="Dave Williams" imgUrl="/assets/member-images/DaveWilliams.png" webUrl="https://davejjwilliams.github.io/" />
                </div>
            </CollapsibleSection>
            <CollapsibleSection title="Research Fellows" open={true}>
                <div className="member-grid">
                    <MemberCard name="Dave Williams" imgUrl="/assets/member-images/DaveWilliams.png" webUrl="https://davejjwilliams.github.io/" />
                    <MemberCard name="Dave Williams" imgUrl="/assets/member-images/DaveWilliams.png" webUrl="https://davejjwilliams.github.io/" />
                </div>
            </CollapsibleSection>
            <CollapsibleSection title="Honorary Research Fellows" open={true}>
                <div className="member-grid">
                    <MemberCard name="Dave Williams" imgUrl="/assets/member-images/DaveWilliams.png" webUrl="https://davejjwilliams.github.io/" />
                    <MemberCard name="Dave Williams" imgUrl="/assets/member-images/DaveWilliams.png" webUrl="https://davejjwilliams.github.io/" />
                    <MemberCard name="Dave Williams" imgUrl="/assets/member-images/DaveWilliams.png" webUrl="https://davejjwilliams.github.io/" />
                </div>
            </CollapsibleSection>
            <CollapsibleSection title="PhD Candidates" open={true}>
                <div className="member-grid">
                    <MemberCard name="Dave Williams" imgUrl="/assets/member-images/DaveWilliams.png" webUrl="https://davejjwilliams.github.io/" />
                    <MemberCard name="Dave Williams" imgUrl="/assets/member-images/DaveWilliams.png" webUrl="https://davejjwilliams.github.io/" />
                    <MemberCard name="Dave Williams" imgUrl="/assets/member-images/DaveWilliams.png" webUrl="https://davejjwilliams.github.io/" />
                    <MemberCard name="Dave Williams" imgUrl="/assets/member-images/DaveWilliams.png" webUrl="https://davejjwilliams.github.io/" />
                </div>
            </CollapsibleSection>
        </>
    )
}

export default Members