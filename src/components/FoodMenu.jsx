import React, { useState } from 'react';
import { data } from '../assets/data/data';

function FoodMenu() {
    const [foods,setFoods]=useState(data)
    //filter type
    const Filtertype=(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category === category;
            })
        );
    };
    //filter price
    const filterPrice = (price) => {
        setFoods(
          data.filter((item) => {
            return item.price === price;
          })
        );
      };
  return (
    <div className=' max-w-[1640px] m-auto px-4 py-12'>
        <h1 className=' text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/*filter*/}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/*fiter type*/}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justfiy-between flex-wrap'>
                    <button onClick={()=>setFoods(data)} className='duration-500 m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={()=>Filtertype('burger')} className=' duration-500 m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={()=>Filtertype('pizza')} className= ' duration-500 m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={()=>Filtertype('steak')} className=' duration-500 m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Steaks</button>
                    <button onClick={()=>Filtertype('chicken')} className=' duration-500 m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>

            </div>
            {/*filter price*/}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390] w-full'>
                    <button onClick={()=>filterPrice('$')}  className='duration-500 m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={()=>filterPrice('$$')} className= 'duration-500 m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={()=>filterPrice('$$$')} className='duration-500 m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={()=>filterPrice('$$$$')} className='duration-500 m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>

                </div>
            </div>
        </div>
        {/*display foods */}
        <div className=' grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
            {foods.map((item,index)=>(
                <div key={index} className=' border shadow-lg rounded-lg'>
                    <img src={item.image} alt={item.name} className='w-full  h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className=' bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default FoodMenu
