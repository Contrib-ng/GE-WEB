import React from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LogInpage from './pages/LogInpage';
import ModalContextProvider  from './components/homepage/States';
import { BothSignUppage, ClientSignUppage, ExpertSignUppage } from './pages/SignUppage';
import { ClientAccount, ExpertAccount } from './pages/Accountpage';
import PageNotFound from './pages/PageNotFound';

function SignedOutStack(){
  return (
    <div>
    <ModalContextProvider>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<LogInpage />} />
      <Route path='/client-signup' element={<ClientSignUppage />} />
      <Route path='/expert-signup' element={<ExpertSignUppage />} />
      <Route path='/both-signup' element={<BothSignUppage />} />
      <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </ModalContextProvider>
    </div>
  );
}

function SignedInStack(){
  return (
    <div>
    <ModalContextProvider>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/expert' element={<ExpertAccount />} />
      <Route path='/client' element={<ClientAccount />} />
      <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </ModalContextProvider>
    </div>
  );
}

function RefreshPage(){
  window.location.reload(true)
}

export {SignedOutStack, SignedInStack, RefreshPage };
