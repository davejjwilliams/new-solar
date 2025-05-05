import React, { useState } from 'react';

interface CollapsibleSectionProps {
    title: string;
    open: boolean;
    children: React.ReactNode;
}

// TODO: Add icon to the title
// TODO: Add animation to the opening and closing of the section
const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, open, children }) => {
    const [isOpen, setIsOpen] = useState(open);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapsible-section">
            <div className='members-subtitle' onClick={toggleSection} style={{ cursor: 'pointer' }}>
                {title}
            </div>
            {isOpen && <div className="collapsible-content">{children}</div>}
        </div>
    );
};

export default CollapsibleSection;