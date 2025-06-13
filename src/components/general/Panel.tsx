import { type FunctionComponent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Import arrow right icon

interface PanelProps {
    size: string;
    url?: string;
    children: ReactNode;
}

const Panel: FunctionComponent<PanelProps> = ({
    size,
    url,
    children,
}) => {
    return (
        <div className={`glass panel${size === "small" ? ' panel-small' : size === "large" ? ' panel-large' : ' panel-full-width'}`}>
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