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
  const [totalPage, setTotalPage] = useState('');
  const [total, setTotal] = useState('');

  const fetchImages = async (e) => {
    e.preventDefault();
    // for searching by button useEffect no necessary.

    try {
      const result = await axios(
        `https://api.unsplash.com/search/photos?client_id=${API}&query=${value}&per_page=20`
      );

      setValue('');
      setImgs(result.data.results);
      console.log(result.data);
      //setTotal(result.data.total);
      setTotalPage(result.data.total_pages);
      setCurrentPage('');
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
      console.log(total, totalPage);
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
        totalPage,
        currentPage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
