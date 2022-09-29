import './App.css';
import AuthNavigation from './AuthNavigation';
import ModalContextProvider  from './components/homepage/States';

function App() {
  return (
    <div className="App">
    <ModalContextProvider>
    <AuthNavigation />
    </ModalContextProvider>
    </div>
  );
}

export default App;
