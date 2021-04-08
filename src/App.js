import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './components/index';
import Image from './components/image';

const App = () => {
  return (
    <div className='container pt-2'>
      <h1 className='text-center mb-4'>Unsplash Clone</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path='/image/:id' component={Image} />
          <Route exact path='/' component={Index} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
