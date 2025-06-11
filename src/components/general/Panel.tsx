import { type FunctionComponent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Import arrow right icon

interface PanelProps {
    large: boolean;
    url: string;
    children: ReactNode;
}

const Panel: FunctionComponent<PanelProps> = ({
    large,
    url,
    children,
}) => {
    return (
        <div className={`glass panel${large ? ' panel-large' : ' panel-small'}`}>
            <Link to={url} className="panel-button">
                <FaArrowRight />
            </Link>
            {children}
        </div>
    );
}

export default Panel;