import { useState, Fragment } from 'react';
import axios from 'axios';
import Images from './images';

const Index = () => {
  const [value, setValue] = useState('');
  const [imgs, setImgs] = useState([]);

  const fetchImages = async (e) => {
    e.preventDefault();
    // for searching by button useEffect no necessary.
    const result = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=LlMkaG7ZmU8Gzgu7FBurlpkY6aHQ1SMsHw8iG_iTI8M&query=${value}&per_page=10`
    );
    setValue('');

    setImgs(result.data.results);
    console.log(result.data);
  };

  return (
    <Fragment>
      <form onSubmit={fetchImages}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Search'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ width: '50%' }}
          />
        </div>
        <button
          disabled={value.trim().length === 0}
          className='btn btn-success'
        >
          Search
        </button>
      </form>
      <hr />
      {imgs.length !== 0 && <Images images={imgs} />}
    </Fragment>
  );
};

export default Index;