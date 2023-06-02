import React from 'react'
import Header from '../components/Header';
import  Blogs  from '../components/Blogs'
import { useLocation, useNavigate } from 'react-router-dom'
import  Pagination  from '../components/Pagination';

export const CategoryPage = () => {
    const nav=useNavigate();
    const location = useLocation();
    const cat= location.pathname.split('/').at(-1);
    
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <Header/>
        <div >
            <button className='mx-4 border px-4 rounded-md p-1 shadow-lg ' onClick={()=> nav(-1)}  >Back</button>
            <h2 className='mt-[20px] mb-[50px] underline text-3xl font-bold' >Blogs On : <span>{cat}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
    
  )
}
