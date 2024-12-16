import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenerateData from './pages/GenerateData';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='min-h-screen bg-stone-800'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/generate' element={<GenerateData />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
