import { useContext, Fragment } from 'react';
import Images from './images';
import { ImageContext } from '../context/imageContext';

const Index = () => {
  const { imgs, value, setValue, fetchImages } = useContext(ImageContext);

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
            style={{ width: '70%' }}
          />
        </div>
        <button
          disabled={value.trim().length === 0}
          className='btn btn-success btn-lg'
        >
          Search
        </button>
      </form>
      <hr />
      {!!imgs.length && <Images images={imgs} />}
    </Fragment>
  );
};

export default Index;
