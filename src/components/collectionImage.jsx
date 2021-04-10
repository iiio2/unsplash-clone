import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CollectionImage = (props) => {
  const [images, setImages] = useState([]);

  const fetchImgCollection = async () => {
    try {
      const result = await axios(
        `https://api.unsplash.com/collections/${props.match.params.collection_id}/photos?client_id=${process.env.REACT_APP_MOVIE_API}`
      );
      setImages(result.data);
    } catch (error) {
      alert('Some error occured');
      return;
    }
  };

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
      <div className='row collections-img'>
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
