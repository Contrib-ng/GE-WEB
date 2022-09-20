import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LogInpage from './pages/LogInpage';
import ModalSignUpContextProvider  from './components/homepage/States';

function App() {
  return (
    <div className="App">
    <ModalSignUpContextProvider>
    <BrowserRouter>
      <Routes>
      {/* Not signed in stack */}
        <Route path='/' element={<Homepage />}/>
        <Route path='/log-in' element={<LogInpage/>} />
      </Routes>
    </BrowserRouter>
    </ModalSignUpContextProvider>
    </div>
  );
}

export default App;
