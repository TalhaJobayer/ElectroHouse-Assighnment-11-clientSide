import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';
import About from './Component/About/About';
import LogIn from './Component/LogIn/LogIn';
import SignUp from './Component/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route> 
        <Route path='/about' element={<About></About>}></Route> 
        <Route path='/logIn' element={<LogIn></LogIn>}></Route> 
        <Route path='/signUp' element={<SignUp></SignUp>}></Route> 
       
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
