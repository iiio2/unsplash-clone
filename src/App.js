import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Index from './components/index';
import Image from './components/image';
import CollectionImage from './components/collectionImage';

const App = () => {
  return (
    <div className='container pt-2'>
      <BrowserRouter>
        <div className='app-title'>
          <Link to='/' className='title'>
            <h1 className='text-center'>Unsplash Clone</h1>{' '}
          </Link>
        </div>

        <Switch>
          <Route
            path='/collection/image/:collection_id'
            component={CollectionImage}
          />
          <Route path='/image/:id' component={Image} />
          <Route exact path='/' component={Index} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
