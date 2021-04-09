import { Fragment, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CollectionImage = () => {
  const [images, setImages] = useState('');

  const { collection_id } = useParams();

  const fetchImg = async () => {
    const result = await axios(
      `https://api.unsplash.com/collections/${collection_id}/photos?client_id=LlMkaG7ZmU8Gzgu7FBurlpkY6aHQ1SMsHw8iG_iTI8M`
    );

    console.log(result.data);
    setImages(result.data);
  };

  useEffect(() => {
    fetchImg();
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
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default CollectionImage;
