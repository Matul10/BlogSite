// import { Home } from "./Pages/Home";
import Home from './Pages/Home'
import {TagPage} from "./Pages/TagPage";
import {CategoryPage} from "./Pages/CategoryPage";
import {BlogPage} from "./Pages/BlogPage";
import { useContext, useEffect } from "react";
import { Appcontext } from "./Appcontext";
import{Routes,Route, useSearchParams, useLocation}from 'react-router-dom';
import './App.css'

  

export default function App() {
  const[searchParams,setSearchParams] =useSearchParams();
  const location= useLocation();
  const{fetchData} = useContext(Appcontext);
  useEffect(()=>{

    const page= searchParams.get('page') ?? 1;

    if(location.pathname.includes('tags')){
      const tag=location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchData(Number(page), tag);
      console.log('app.js ka tag  data fetcher called')
    }
    else if(location.pathname.includes('categories')){
      const category=location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchData(Number(page),null, category);
      console.log('app.js ka category  data fetcher called')
    }
    else{
      fetchData(Number(page));
      console.log('app.js ka page  data fetcher called')
    }
    
  },[location.pathname,location.search])


  return <div className="w-full h-full flex flex-col items-center justify-center">
    
    {/* <Header />
    <Blogs/>
    <Pagination/> */}
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/blog/:blogId" element={<BlogPage/>}  />
      <Route path="/tags/:tag" element={<TagPage/>}  />
      <Route path="/categories/:category" element={<CategoryPage/>}  />
    </Routes>
  </div>;
}
