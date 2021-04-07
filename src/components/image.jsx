import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Image = () => {
  const [image, setImage] = useState('');

  const { id } = useParams();

  const fetchImg = async () => {
    try {
      const result = await axios(
        `https://api.unsplash.com/photos/${id}?client_id=LlMkaG7ZmU8Gzgu7FBurlpkY6aHQ1SMsHw8iG_iTI8M`
      );
      setImage(result.data);

      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImg();
    // eslint-disable-next-line
  }, []);

  if (!image.blur_hash) return <p>Loading...</p>;

  return (
    <div className='row'>
      <div className='col-sm-7'>
        <img
          src={image.urls.full}
          alt={image.alt_description}
          className='img-fluid'
        />
      </div>

      <div className='col-sm-5'>
        <h5>
          {image.description ? image.description : 'No Description Available'}
        </h5>
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
        {image.tags.map((img, index) => (
          <span key={index}>{img.title}</span>
        ))}
      </div>
    </div>
  );
};

export default Image;
