import { Route, Switch } from 'react-router-dom';
import Index from './components/index';
import Image from './components/image';

const App = () => {
  return (
    <div className='container py-5'>
      <h3>Unsplash Clone</h3>
      <Switch>
        <Route path='/image/:id' component={Image} />
        <Route exact path='/' component={Index} />
      </Switch>
    </div>
  );
};

export default App;
