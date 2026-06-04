import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import NavBar from './Components/Common/NavBar';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import BlogDetailPage from './Pages/BlogDetailPage';
import AdminBlogPage from './Pages/AdminBlogPage';
import AdminEditBlogPage from './Pages/AdminEditBlogPage';

function App() {
  const { dark, toggle } = useTheme();

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <div className='dark:bg-zinc-900 dark:text-white min-h-screen'>
        <NavBar dark={dark} toggle={toggle} />
        <main>
          <Routes>
            <Route path='/' element={<PortfolioPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog/:id' element={<BlogDetailPage />} />
            {import.meta.env.DEV && <Route path='/admin' element={<AdminBlogPage />} />}
            {import.meta.env.DEV && <Route path='/admin/edit/:id' element={<AdminEditBlogPage />} />}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
