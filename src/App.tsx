import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import NavBar from './Components/Common/NavBar';
import GoTopButton from './Components/Common/GoTopButton';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';

function App() {
  const { dark, toggle } = useTheme();

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <div className='dark:bg-zinc-900 dark:text-white min-h-screen'>
        <NavBar dark={dark} toggle={toggle} />
        <main>
          <Routes>
            <Route path='/' element={<Navigate to='/potfolio' replace />} />
            <Route path='/potfolio' element={<PortfolioPage />} />
            <Route path='/blog' element={<BlogPage />} />
          </Routes>
        </main>
        <GoTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
