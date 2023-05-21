import './App.css';
import AddTTPlayer from './components/AddTTPlayer';
import TTPlayerList from './components/TTPlayerList';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateTTPlayer from './components/UpdateTTPlayer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<TTPlayerList />}></Route>
          <Route path='/' element={<TTPlayerList />}></Route>
          <Route path='/playerList' element={<TTPlayerList />}></Route>
          <Route path='/addPlayer' element={<AddTTPlayer />}></Route>
          <Route path='/updatePlayer/:id' element={<UpdateTTPlayer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
