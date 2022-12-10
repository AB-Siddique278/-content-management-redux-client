import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Blogs from './Components/Pages/Blogs/Blogs';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Pages/Shared/Navbar';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import AddBlog from './Components/Pages/Blogs/AddBlog';
import BlogList from './Components/Pages/Blogs/BlogList';

function App() {
  return (
    <div className='md:px-20'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        

        <Route path="/dashboard" element={<Dashboard />} >
        <Route index element={<AddBlog></AddBlog>}></Route>
        <Route path='bloglist' element={<BlogList></BlogList>}></Route>
        
          
          
        </Route>
        
        
      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> */}
         
      </Routes>
    </div>
  );
}

export default App;
