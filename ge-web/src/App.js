import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LogInpage from './pages/LogInpage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/log-in' element={<LogInpage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
