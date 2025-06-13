import type { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface TextLinkProps {
  url: string;
  text: string;
}

const TextLink: FunctionComponent<TextLinkProps> = ({ url, text }) => {
  const isExternal = url.startsWith('http://') || url.startsWith('https://');
  
  if (isExternal) {
    return (
      <a href={url} target='_blank' rel='noopener noreferrer' className='text-link'>
        {text}
      </a>
    );
  } else {
    return (
      <Link to={url} className='text-link'>
        {text}
      </Link>
    );
  }
};

export default TextLink;
