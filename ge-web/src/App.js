import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LogInpage from './pages/LogInpage';
import ModalContextProvider  from './components/homepage/States';
import { BothSignUppage, ClientSignUppage, ExpertSignUppage } from './pages/SignUppage';

function App() {
  return (
    <div className="App">
    <ModalContextProvider>
    <BrowserRouter>
      <Routes>
      {/* Not signed in stack */}
        <Route path='/' element={<Homepage />}/>
        <Route path='/log-in' element={<LogInpage />} />
        <Route path='/client-signup' element={<ClientSignUppage />} />
        <Route path='/expert-signup' element={<ExpertSignUppage />} />
        <Route path='/both-signup' element={<BothSignUppage />} />
      </Routes>
    </BrowserRouter>
    </ModalContextProvider>
    </div>
  );
}

export default App;
