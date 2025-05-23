import type { FunctionComponent } from 'react';

interface TextLinkProps {
  url: string;
  text: string;
}

const TextLink: FunctionComponent<TextLinkProps> = ({ url, text }) => {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer' className='text-link'>
      {text}
    </a>
  );
};

export default TextLink;
