import { useContext } from 'react';
import { ImageContext } from '../context/imageContext';
import { Link } from 'react-router-dom';

import paginate from '../utils/paginate';

const Images = ({ images }) => {
  const { currentPage, perPage } = useContext(ImageContext);

  const paginatedMovies = paginate(images, currentPage, perPage);

  return (
    <div className='images'>
      {paginatedMovies.length === 0 && <p>Sorry</p>}
      <div className='row'>
        {paginatedMovies.map((img) => (
          <div className='col-sm-3 mb-1' key={img.id}>
            <Link to={`/image/${img.id}`}>
              <img src={img.urls.thumb} className='img-fluid' alt='' />
              <h6>{img.alt_description}</h6>
              <i className='bi bi-heart-fill'>{img.likes}</i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
