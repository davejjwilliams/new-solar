import { useState, type FunctionComponent } from 'react';
import TextLink from '../general/TextLink';
import '../../styles/PublicationsTable.css';
import publications from '../../publications.json';

type PublicationsTableProps = object;

const PublicationsTable: FunctionComponent<PublicationsTableProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = publications.filter((pub) =>
    Object.values(pub)
      .flatMap((val) =>
        typeof val === 'object'
          ? Array.isArray(val)
            ? val.flatMap((link) =>
                typeof link === 'object' ? Object.values(link) : [link]
              )
            : []
          : [val]
      )
      .some((val) =>
        String(val).toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className='filterable-table-container'>
      <div className='filterable-table-search-row'>
        <input
          className='filterable-table-search'
          type='text'
          placeholder='Search Publications...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery !== '' && (
          <span className='filterable-table-search-results'>
            {filteredData.length} result{filteredData.length === 1 ? '' : 's'}
          </span>
        )}
        <button
          className='filterable-table-clear-btn'
          onClick={() => setSearchQuery('')}
          style={{
            marginLeft: '8px',
            display: searchQuery ? 'inline-block' : 'none',
          }}
          aria-label='Clear search'
        >
          Clear Search
        </button>
      </div>

      {/* Desktop View */}
      <table className='filterable-table desktop-only'>
        <thead>
          <tr>
            <th className='col-author'>Author(s)</th>
            <th className='col-title'>Title</th>
            <th className='col-year'>Year</th>
            <th className='col-venue'>Venue</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((pub, rowIndex) => (
            <tr key={rowIndex}>
              <td className='col-author'>{pub.author}</td>
              <td className='col-title'>
                <div>{pub.title}</div>
                <div className='pub-links'>
                  {pub.links.map((link, idx) => (
                    <div key={idx}>
                      [
                      <TextLink url={link.url} text={link.text} />]
                    </div>
                  ))}
                </div>
              </td>
              <td className='col-year'>{pub.year}</td>
              <td className='col-venue'>{pub.venue}</td>
            </tr>
          ))}
          {filteredData.length === 0 && (
            <tr>
              <td colSpan={4} className='no-results'>
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Mobile View */}
      <div className='mobile-cards mobile-only'>
        {filteredData.map((pub, rowIndex) => (
          <div key={rowIndex} className='publication-card thick-glass'>
            <div className='card-title'>{pub.title}</div>
            <div className='card-author'>{pub.author}</div>
            <div className='card-venue'>{pub.venue}</div>
            <div className='pub-links'>
              {pub.links.map((link, idx) => (
                <span key={idx}>
                  [<TextLink url={link.url} text={link.text} />]
                </span>
              ))}
            </div>
          </div>
        ))}
        {filteredData.length === 0 && (
          <div className='no-results'>No results found.</div>
        )}
      </div>
    </div>
  );
};

export default PublicationsTable;
