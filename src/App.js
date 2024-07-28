import './App.css';
import Homepages from './Homepage';
import Goodtea from './goodtea';
import Milk from './milk';
import Milktea from './milktea';
import Fresh from './fresh';
import Purchase from './purchase';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-content">
          <Routes>
            <Route path='/' element={<Homepages />} />
            <Route path='/goodtea' element={<Goodtea />} />
            <Route path='/milk' element={<Milk />} />
            <Route path='/milktea' element={<Milktea />} />
            <Route path='/fresh' element={<Fresh />} />
            <Route path='/purchase' element={<Purchase/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
