import { useState } from 'react';
import Logo from './logo.png';
import './App.css';
import { data } from './data';

function App() {

  const [bags, setBags] = useState(data);

  const removeItem = (id) => {
    let newBags = bags.filter(element => element.id !== id);
    setBags(newBags);
  };

  const [carousel, setCarousel] = useState(0);
  const [datas, setDatas] = useState(data);
  let newArr = [...datas];
  
  const nextPhoto = (e, index) => {
    setDatas(newArr);

      const slider = document.querySelectorAll("#slider");
      newArr[index] = bags[index];
    
      setCarousel ((carousel => {
        carousel ++ ;
        if (carousel > 2 ) {
        carousel = 0;
        }
        return carousel;
      }));

      slider[index].setAttribute('src', newArr[index].image[carousel]);
      return slider;
    };

    const prevPhoto = (e, index) => {
      
        const slider = document.querySelectorAll("#slider");
        newArr[index] = bags[index];
        setDatas(newArr);
        setCarousel ((carousel => {
        carousel -- ;
        if (carousel < 0 ) {
        carousel = 2;
        }
        return carousel;
      }));

      slider[index].setAttribute('src', newArr[index].image[carousel] );
      return slider;
    };



  return (
    <div className='wrapper'>
    <div className="container">
      <img src={Logo} width='120px' alt='logo'/>
      <h2>List of</h2>
      <h1>{bags.length} trend bags</h1>
      <p>by Steve Madden</p>
      <hr />

      {bags.map((element=> {
        const {id, brand, description, price, image} = element;
        const index = bags.indexOf(element);
        return (<div key={id}>
          <div className='div-container'>
            <h4>#{id}</h4>
          </div>

          <div className='div-container'>
              <h3>{description}</h3>
          </div>

          <div className='div-container'>
            <h5>brand: {brand}</h5>
          </div>
          
          <div className='div-container'>
            <p><b><i>Price: {price}</i></b></p>
          </div>

          <div className='div-container'>
            <img id='slider' src={image[1]} width='350px' alt='item'/>
          </div>

          <div className='div-container-hor'>
          <button className='btnSlider' onClick={ (e)=> prevPhoto(e, index)  } id = { id } > 
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
            </button>
            <button className='btnSlider' onClick={ (e)=> nextPhoto(e, index)} id = { id } >  
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16" >
              <path  fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
              </svg> 
            </button>
          </div>
          
          <div className='div-container'>
          <button className='btnDelete' onClick={ ()=> removeItem(id) }>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg>
            </button>
            <hr />
          </div>

          </div>
          )
          }))}

        <div className='div-container'>
            <button className='deleteAll' onClick={()=> setBags([])}>delete all</button>
        </div>
    </div>
    
    </div>
  );
}

export default App;
