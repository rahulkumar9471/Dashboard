import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './Pages/Dashboard';
import { useEffect, useState } from 'react';
import Setting from './Pages/Setting';

function App() {

  const [isSIdebar, setIsSidebar] = useState(true);

  const toggleSidebar = () => {
    setIsSidebar(!isSIdebar);
  }

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    document.body.className = theme;
  },[theme])

  return (
    <>
      <div className={`${theme}`}>
        <Navbar toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} theme={theme}/>
        <div className="flex justify-start w-full">
          <Sidebar isSIdebar={isSIdebar} theme={theme}/>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/profile/settings' element={<Setting />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
