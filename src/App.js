import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './Pages/Dashboard';
import { useState } from 'react'; 
import Setting from './Pages/Setting';

function App() {

  const [isSIdebar, setIsSidebar] = useState(true);

  const toggleSidebar = () => {
    setIsSidebar(!isSIdebar);
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex justify-start w-full">
        <Sidebar isSIdebar={isSIdebar} /> 
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile/settings' element={<Setting />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
