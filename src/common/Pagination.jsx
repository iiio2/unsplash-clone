import { useContext } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { ImageContext } from '../context/imageContext';

const Pagination = () => {
  const { getCurrentPage, currentPage, imgs, perPage } = useContext(
    ImageContext
  );

  const totalPages = Math.ceil(imgs.length / perPage);

  const pages = _.range(1, totalPages + 1);
  if (pages.length === 1) {
    return null;
  }

  return (
    <nav aria-label='navigation'>
      <ul className='pagination'>
        {pages.map((page, index) => (
          <li
            className={page === currentPage ? 'page-item active' : 'page-item'}
            key={index}
            onClick={() => getCurrentPage(page)}
          >
            <Link to='/' className='page-link'>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
