import { type FunctionComponent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaExpand } from 'react-icons/fa';

type PanelType = 'small' | 'large' | 'first-full' | 'second-full';
type IconType = 'arrow' | 'expand';

interface PanelProps {
    panelType?: PanelType;
    url?: string;
    icon?: IconType;
    children?: ReactNode;
}

const Panel: FunctionComponent<PanelProps> = ({
    panelType,
    url,
    icon,
    children,
}) => {

    const panelTypes: Record<PanelType, string> = {
        'small': 'panel-small',
        'large': 'panel-large',
        'first-full': 'panel-full-width-1',
        'second-full': 'panel-full-width-2',
    }

    return (
        <div className={`glass panel ${panelType && panelTypes[panelType]}`}>
            {url && (
                <Link to={url} className="panel-button">
                    {icon && (icon === 'arrow' ? <FaArrowRight /> : <FaExpand />)}
                </Link>
            )}
            {children}
        </div>
    );
}

export default Panel;