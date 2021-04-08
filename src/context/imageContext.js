import { useState, createContext } from 'react';
import axios from 'axios';

export const ImageContext = createContext();

const ImageContextProvider = ({ children }) => {
  const [imgs, setImgs] = useState([]);
  const [value, setValue] = useState('');

  const fetchImages = async (e) => {
    e.preventDefault();
    // for searching by button useEffect no necessary.
    const result = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=LlMkaG7ZmU8Gzgu7FBurlpkY6aHQ1SMsHw8iG_iTI8M&query=${value}&per_page=10`
    );
    setValue('');

    setImgs(result.data.results);
    console.log(result.data);
    if (result.data.total === 0) {
      alert('Nothing found.');
    }
  };

  return (
    <ImageContext.Provider value={{ imgs, value, setValue, fetchImages }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
