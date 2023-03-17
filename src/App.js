import Navbar from './nav';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Editor from './pages/Editor';
import { app, analytics } from './firebase';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="editor" element={<Editor/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
