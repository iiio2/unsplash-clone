import { Link } from 'react-router-dom';

const Images = ({ images }) => {
  console.log(images);

  return (
    <div className='images'>
      {images.length === 0 && <p>Sorry</p>}
      <div className='row'>
        {images.map((img) => (
          <div className='col-sm-3 mb-1' key={img.id}>
            <Link to={`/image/${img.id}`}>
              <img src={img.urls.thumb} className='img-fluid' alt='img' />
              <h6>{img.alt_description}</h6>
              <p className='lead'>Likes: {img.likes}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
