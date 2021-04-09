import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageContext } from '../context/imageContext';
import { API } from '../config/api';
import axios from 'axios';

const Image = () => {
  const [image, setImage] = useState('');

  const { getId } = useContext(ImageContext);

  const { id } = useParams();

  const fetchImg = async () => {
    try {
      const result = await axios.get(
        `https://api.unsplash.com/photos/${id}?client_id=${API}`
      );
      setImage(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImg();
    return () => {
      setImage('');
    };
    // eslint-disable-next-line
  }, []);

  if (!image) return <p>Loading...</p>;

  return (
    <div className='row mb-4 image'>
      <div className='col-sm-6'>
        <img
          src={image.urls.full ? image.urls.full : <p>Loading...</p>}
          alt={image.alt_description}
          className='img-fluid'
        />
      </div>

      <div className='col-sm-6'>
        <h4>
          {image.description ? image.description : 'No Description Available'}
        </h4>
        <p>Downloads: {image.downloads} </p>
        <p>Views: {image.views} </p>
        <p>Created at: {image.created_at} </p>
        <p>Updated at: {image.updated_at}</p>
        <ul>
          <li>City: {image.location.city}</li>
          <li>Country: {image.location.country} </li>
          <li>
            Position - Latitude: {image.location.position.latitude}, Longitude:{' '}
            {image.location.position.longitude}{' '}
          </li>
        </ul>
        <p>Tags</p>
        {image.tags.length === 0 && <p>No tags.</p>}
        {image.tags.slice(0, 6).map((img, index) => (
          <span key={index}>{img.title}</span>
        ))}

        <h4>Related Collections</h4>
        <div className='row collections'>
          {image.related_collections.results.map((img) => (
            <div
              className='col-sm-3 mb-2'
              key={img.id}
              onClick={() => getId(img.id)}
            >
              <Link to={`/collection/image/${img.id}`}>
                <img
                  src={img.cover_photo.urls.thumb}
                  className='img-fluid'
                  width='100%'
                  alt=''
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Image;
