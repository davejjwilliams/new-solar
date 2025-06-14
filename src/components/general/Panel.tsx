import { type FunctionComponent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Import arrow right icon

type PanelType = 'small' | 'large' | 'first-full' | 'second-full';

interface PanelProps {
  panelType: PanelType;
  url?: string;
  children?: React.ReactNode;
}

const Panel: FunctionComponent<PanelProps> = ({
    panelType,
    url,
    children,
}) => {

    const panelTypes: Record<PanelType, string> = {
        'small': 'panel-small',
        'large': 'panel-large',
        'first-full': 'panel-full-width-1',
        'second-full': 'panel-full-width-2',
    }

    return (
        <div className={`glass panel ${panelTypes[panelType] || ''}`}>
            {url && (
                <Link to={url} className="panel-button">
                    <FaArrowRight />
                </Link>
            )}
            {children}
        </div>
    );
}

export default Panel;