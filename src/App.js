import { useState } from 'react';
import axios from 'axios';
import Images from './components/images';

const App = () => {
  const [value, setValue] = useState('');
  const [imgs, setImgs] = useState([]);

  const fetchImages = async (e) => {
    e.preventDefault();
    // for searching by button useEffect no necessary.
    const result = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=LlMkaG7ZmU8Gzgu7FBurlpkY6aHQ1SMsHw8iG_iTI8M&query=${value}&per_page=10`
    );

    setImgs(result.data.results);
    setValue('');
    console.log(result.data);
  };

  return (
    <div className='container py-5'>
      <h3>Unsplash Clone</h3>
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
        <button className='btn btn-success'>Search</button>
      </form>
      <hr />
      <Images images={imgs} />
    </div>
  );
};

export default App;
