import React, { useContext } from 'react'
import {Appcontext} from '../Appcontext'
import { Spinner } from './Spinner';
import { BlogDetails } from './BlogDetails';

const Blogs = () => {
    const {loading,posts}=useContext(Appcontext);
  return (
    <div className='w-11/12 max-w-[630px]'>
        {
            loading ?
            (<Spinner/>):
            (
                posts.length === 0 ?
                ( <div>
                    <p> Posts not found</p>
                </div>):
                (
                    posts.map( post=>( 
                        <BlogDetails key={post.id} post={post} />
                    ))
                )
            )
            
        }
    
    </div>
  )
}

export default Blogs;