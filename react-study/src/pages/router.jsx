import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './main';
import Todos from './todoss';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/todos' element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
