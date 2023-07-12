import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Homepage />}></Route>
        <Route path='/login' element={<Loginpage />}></Route>
        <Route path='/'></Route>
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <div>
      <head></head>
      <body>
        <Routing></Routing>
      </body>
    </div>
  );
}

export default App;
