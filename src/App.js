/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const carrossel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft += carrossel.current.offsetWidth;
  }

  if (!data || !data.length) return null;

  return (
    <div className="container">
      <div className="logo">
        <img src="static/static/images/super-shoes.png" alt="logo Super Shoes" />
        <div className="carrossel" ref = {carrossel}>

          {data.map((item) => {
            const {id, name, price, oldPrice, image} = item;
            return (
              <div className="item" key ={id} >
                <div className="image">
                  <img src= {image} alt= {name} />
                </div>
                <div className="info">
                  <span className='name'>S{name}</span>
                  <span className='oldPrice'>U$ {oldPrice}</span>
                  <span className='price'>U$ {price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className = "buttons">
          <button onClick = {handleLeftClick}>
            <img src ="static/static/images/chevron_icon.png" alt="Left"/>
            </button>
          <button onClick = {handleRightClick}>
            <img src ="static/static/images/chevron_icon.png" alt="Right"/>
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
