import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>

    
    // <>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Layout />}></Route>
    //   </Routes>
    // </BrowserRouter>
    // </>
  );
}

export default App;
