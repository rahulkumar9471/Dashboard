import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Setting from './Pages/Setting';
import { useEffect, useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';

function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  const [cookies, setCookie] = useCookies(['theme']); // Ensure you provide the cookie name here

  // Initialize theme state with the value from cookies, or default to 'light'
  const [theme, setTheme] = useState(cookies.theme || 'light');

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  }

  const toggleTheme = () => {
    // Toggle the theme and set the cookie
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setCookie('theme', newTheme, { path: '/' });
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
    <CookiesProvider>
      <div className={theme}>
        <Navbar toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} theme={theme} />
        <div className="flex justify-start w-full">
          <Sidebar isSIdebar={isSidebar} theme={theme} />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/profile/settings' element={<Setting />} />
          </Routes>
        </div>
      </div>
    </CookiesProvider>
  );
}

export default App;
