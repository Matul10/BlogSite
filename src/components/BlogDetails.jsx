import React from 'react'
import { NavLink } from 'react-router-dom'

export const BlogDetails = ({post}) => {
  return (
    <div className='mt-[40px]'>
    <NavLink to={`/blog/${post.id}`} >
        <span className='font-bold text-lg' >{post.title}</span>
    </NavLink>

    <p>
        By {"  "}
        <span className='italic' >{post.author}</span> {" "}
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}  >
        <span className='font-bold underline' >{post.category}</span>
        </NavLink>
    </p>
    <p className='mb-[20px]'>Posted on : {post.date}</p>

    <p className='mb-[20px]' >{post.content}</p>
    <div>
        
        {post.tags.map( (tag,index)=>(
            <NavLink key={index} to={`/tags/${tag.replaceAll(' ','-')}`}>
                <span className='text-blue-700'>{`#${tag}`} </span> 
            </NavLink>
        ))}
    </div>
    </div>
    
  )
}
