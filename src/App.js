
import './App.css';
import { Routes,Route } from 'react-router-dom';
import About from './Pages/About';
import Navbar from './componets/navbar/Navbar';
import { Button } from 'react-bootstrap';

const productsArr = [

  {
  
  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
  
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
  
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
  
  title: 'Blue Color',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
  ]
function App() {

  
  return (
    <>   
   <Navbar />
      <Routes>
        <Route path='/about' element={ <About></About>}> </Route> 
        {/* <Route path="/home" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route> */}
       </Routes>

       <ul>
       {productsArr.map((item)=>(
          <li>
            <h1>{item.title}</h1>
            {item.price}
            <img src={item.imageUrl}></img>
            <Button>Add To Cart</Button>
          </li>
       ))}
       </ul>
    </>
  );
 
}

export default App;
