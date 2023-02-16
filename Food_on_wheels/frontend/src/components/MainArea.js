import React, { useState } from 'react'
import '../styles/mainarea.css'
import Header from './Header'
import pizzaboy from '../assests/pizzaboy.png'
import pizzaSilce from '../assests/pizzaSilce.png'
import Product from './products/Product'
import { useSelector } from 'react-redux'
import pizza from '../assests/pizza.jpg'
import burger from '../assests/burger.jpg'
import sandwich from '../assests/sandwich.jpg'
import smoothie from '../assests/smoothie.png'
import drinks from '../assests/drinks.jpg'
import snacks from '../assests/snacks.png'
const MainArea = () => {
    const user = useSelector(state=>state.user)
    const [category,setCategory]=useState('pizza')
    
    return (
        <div className='mainarea'>
            <Header/>
            <div className="banner">
                <div className="img">
                    <img src={pizzaboy} alt="" />
                </div>
                <div className="text">
                <h2>Hello {user?.user?.name}</h2>
                <p>Get Free delivery on <span>500 Rs.</span>  and above</p>
                <button>Order Now!</button>
                <img className='full circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
                <img className='small circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
                <img className='smaller circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
               
                <img className='half circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
               
                
                
                </div>
               
            </div>

         {/* category area */}
         <div className='category-area'>
             <h3>Menu</h3>
            <div className="category">
              <div className={`cat-icon ${category==='pizza'&&'active'} `} onClick={()=>setCategory('pizza')}>
                  <div className="img">

                  <img src={pizza} alt="pizza" />
                  </div>
                  <div className="text">
                   Pizza
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Burger'&&'active'} `} onClick={()=>setCategory('Burger')}>
                  <div className="img">

                  <img src={burger} alt="burger" />
                  </div>
                  <div className="text">
                   Burger
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Sandwich'&&'active'} `} onClick={()=>setCategory('Sandwich')}>
                  <div className="img">

                  <img src={sandwich} alt="sandwich" />
                  </div>
                  <div className="text">
                  Sandwich
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Smoothy'&&'active'} `} onClick={()=>setCategory('Smoothy')}>
                  <div className="img">

                  <img src={smoothie} alt="smoothie" />
                  </div>
                  <div className="text">
                   Smoothie
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Snaks'&&'active'} `} onClick={()=>setCategory('Snaks')}>
                  <div className="img">

                  <img src={snacks} alt="pizza" />
                  </div>
                  <div className="text">
                   Snacks
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Drink'&&'active'} `} onClick={()=>setCategory('Drink')}>
                  <div className="img">

                  <img src={drinks} alt="pizza" />
                  </div>
                  <div className="text">
                   Drinks
                  </div>
                  
              </div>
            </div>
            <div className="all-list">
             <Product category={category}/>
            </div>
         </div>
         

        </div>
    )
}

export default MainArea
