import { useState, createContext } from 'react';
import axios from 'axios';
export const ImageContext = createContext();

const ImageContextProvider = ({ children }) => {
  const [imgs, setImgs] = useState([]);
  const [value, setValue] = useState('');
  const [id, setId] = useState('');
  const [images, setImages] = useState('');
  const [currentPage, setCurrentPage] = useState('');
  const [perPage] = useState(6);
  const [total, setTotal] = useState(30);

  const fetchImages = async (e) => {
    e.preventDefault();
    // for searching by button useEffect no necessary.

    try {
      if (value.trim().length === 0) {
        alert('Please type something.');
        return;
      }
      const result = await axios(
        `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_MOVIE_API}&query=${value}&per_page=${total}`
      );

      setValue('');
      setImgs(result.data.results);
      setCurrentPage(1);
      setTotal(result.data.results.length);
      if (result.data.results.length === 0) {
        alert('Nothing found!');
      }
    } catch (error) {
      alert('Some error occured');
      return;
    }
  };

  const getId = (collection_id) => {
    setId(collection_id);
  };

  const getCurrentPage = async (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
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
        getId,
        getCurrentPage,
        currentPage,
        perPage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
