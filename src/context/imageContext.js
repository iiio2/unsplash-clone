import { useState, createContext } from 'react';
import axios from 'axios';

export const ImageContext = createContext();

const ImageContextProvider = ({ children }) => {
  const [imgs, setImgs] = useState([]);
  const [value, setValue] = useState('');
  const [id, setId] = useState('');
  const [images, setImages] = useState('');

  const fetchImages = async (e) => {
    e.preventDefault();
    // for searching by button useEffect no necessary.
    const result = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=LlMkaG7ZmU8Gzgu7FBurlpkY6aHQ1SMsHw8iG_iTI8M&query=${value}&per_page=30`
    );
    setValue('');

    setImgs(result.data.results);
    if (result.data.total === 0) {
      alert('Nothing found.');
    }
  };

  const fetchImgCollection = async () => {
    try {
      const result = await axios.get(
        `https://api.unsplash.com/collections/${id}/photos?client_id=LlMkaG7ZmU8Gzgu7FBurlpkY6aHQ1SMsHw8iG_iTI8M`
      );
      setImages(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getId = (colid) => {
    console.log(colid);
    setId(colid);
  };

  return (
    <ImageContext.Provider
      value={{
        imgs,
        value,
        setValue,
        fetchImages,
        setId,
        images,
        setImages,
        fetchImgCollection,
        getId,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
