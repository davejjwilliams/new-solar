import { type FunctionComponent, useState } from 'react';

type WindowCardProps = {
  children?: React.ReactNode;
  title: string;
};

const WindowCard: FunctionComponent<WindowCardProps> = ({
  children,
  title,
}) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className='window-card'>
      <div className='window-header'>
        <div className='window-controls'>
          <div className='window-button close' />
          <div className='window-button minimize' onClick={handleMinimize} />
          <div className='window-button expand' />
        </div>
        <div className='window-title'>{title}</div>
      </div>
      {!isMinimized && <div className='window-content'>{children}</div>}
    </div>
  );
};

export default WindowCard;
