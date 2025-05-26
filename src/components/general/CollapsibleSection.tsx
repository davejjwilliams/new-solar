import React, { useState } from 'react';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi'; // Import icons

interface CollapsibleSectionProps {
  title: string;
  open: boolean;
  id: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  open,
  id,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapsible-section'>
      <div
        className='collapsible-title'
        onClick={toggleSection}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        id={id}
      >
        {isOpen ? <FiChevronDown /> : <FiChevronRight />}{' '}
        {/* Icon changes based on isOpen */}
        {title}
      </div>
      <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default CollapsibleSection;
