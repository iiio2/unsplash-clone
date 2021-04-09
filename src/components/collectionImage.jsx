import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { ImageContext } from '../context/imageContext';

const CollectionImage = (props) => {
  const { images, setImages, fetchImgCollection } = useContext(ImageContext);

  useEffect(() => {
    fetchImgCollection();
    return () => {
      setImages('');
    };
    // eslint-disable-next-line
  }, []);

  if (!images) return <p>Loading...</p>;

  return (
    <Fragment>
      <h3 className='text-center'>Collection Images</h3>
      <div className='row'>
        {images.map((image) => (
          <div className='col-sm-4 mb-2' key={image.id}>
            <Link to={`/image/${image.id}`}>
              <img src={image.urls.thumb} alt='' className='img-fluid' />
              <h5>
                {image.alt_description
                  ? image.alt_description
                  : 'Title not found'}
              </h5>
              <i className='bi bi-heart-fill'>{image.likes}</i>
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default CollectionImage;
