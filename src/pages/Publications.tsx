import type { FunctionComponent } from 'react';
import PublicationsTable from '../components/publications/PublicationsTable';

type PublicationsProps = object;

const Publications: FunctionComponent<PublicationsProps> = () => {
  return (
    <>
      <div className='page-title'>SOLAR Publications</div>
      <PublicationsTable />
    </>
  );
};

export default Publications;
