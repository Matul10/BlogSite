import { createContext, useContext, useState } from "react";
import { baseUrl } from "./baseUrl";
export const Appcontext = createContext();

const AppcontextProvider=({children})=>{
  const[loading,setloading] =useState(false);
  const[page,setpage]=useState(1);
  const[totalpages,settotal] = useState(null);   
  const[posts,setposts]=useState([]);
  
  //fetch data
  async function fetchData(page=1 , tag=null , category){
    setloading(true);
    
    //creating url
    let url=`${baseUrl}?page=${page}`;
    if(tag){
      url+=`&tag=${tag}`;
    }
    if(category){
      url+=`&category=${category}`;
    }

    //call for fetching data
    try{
        const res =await fetch(url);
        const data = await res.json();
        //console.log(data);
        setpage(data.page);
        setposts(data.posts);
        settotal(data.totalPages);
    }catch(e){
        console.log("error in fetching data");
        setpage(1);
        settotal(null);
        setposts([]);
    }

    setloading(false);
    
  }

  //handle change in page number
  function handlepagechange(page){
    setpage(page);
    fetchData(page);
  }
  const value={ loading,setloading,page,setpage,totalpages,settotal,posts,setposts,handlepagechange,fetchData };
  return(<Appcontext.Provider value={value}>
    {children}
   </Appcontext.Provider> )
}

export default AppcontextProvider