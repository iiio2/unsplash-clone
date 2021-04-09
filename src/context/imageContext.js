import { useState, createContext } from 'react';
import axios from 'axios';
import { API } from '../config/api';
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
        `https://api.unsplash.com/search/photos?client_id=${API}&query=${value}&per_page=${total}`
      );

      setValue('');
      setImgs(result.data.results);
      console.log(result.data.results);
      console.log(result.data);
      setCurrentPage(1);
      setTotal(result.data.results.length);
      console.log(result.data.results.length);
      if (result.data.results.length === 0) {
        alert('Nothing found!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchImgCollection = async () => {
    try {
      const result = await axios(
        `https://api.unsplash.com/collections/${id}/photos?client_id=${API}`
      );
      setImages(result.data);
    } catch (error) {
      alert('Error occured');
      console.log(error);
    }
  };

  const getId = (collection_id) => {
    setId(collection_id);
  };

  const getCurrentPage = async (page) => {
    console.log(page);
    setCurrentPage(page);
    window.scrollTo(0, 0);

    if (total) {
      console.log(total);
    }
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
