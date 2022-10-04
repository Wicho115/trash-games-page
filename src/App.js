import './App.css';

import {BrowserRouter} from 'react-router-dom'
import userRoutes from './routes/user.routes'

function App() {
    return ( 
      <BrowserRouter>
        {userRoutes}
      </BrowserRouter>
    );
}

export default App;