import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Appcontext } from '../Appcontext';
// import { Header } from '../components/Header';
import Header from '../components/Header';
import { Spinner } from '../components/Spinner';
import { BlogDetails } from '../components/BlogDetails';

export const BlogPage = () => {
    const[blog,setblog]=useState(null);
    const[relatedblog,setrelatedblog]=useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setloading, loading}=useContext(Appcontext);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const blogId=location.pathname.split("/").at(-1);

   

    async function fetchBlogData() {
        setloading(true);

        const url =`${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res=await fetch(url);
            const data = await res.json();
            setblog(data.blog);
            setrelatedblog(data.relatedBlogs);
            
        } catch (error) {
            console.log("error in blog id component");
            setblog(null);
            setrelatedblog([]);
        }

        setloading(false);
        
    }

    useEffect(()=>{
        if(blogId){
            fetchBlogData();
        }
    },[location.pathname])
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <Header/>
        <div className='mr-[590px]'>
            <button className='mx-4 border  rounded-md p-1 shadow-lg' onClick={()=>navigation(-1)}>
                Back
            </button>
        </div>
        {
            loading?(<Spinner/>):
            blog ? (
                <div className='w-11/12 max-w-[630px]'>
                   <BlogDetails post={blog} />
                   <h2 className='mt-[50px] text-3xl font-bold' >Related Blogs :</h2>
                   {
                    relatedblog.map((blog)=>(
                        <div key={blog.id}>
                        <BlogDetails post={blog} />
                        </div>
                    ))
                   }
                </div>
            ) : (<p>no blog</p>)
        }
    </div>
    

  )
}
