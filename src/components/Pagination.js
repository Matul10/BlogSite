import React, { useContext } from 'react'
import { Appcontext } from '../Appcontext'

const Pagination = () => {
  const{page,handlepagechange,totalpages}=useContext(Appcontext);
  return (
    
    <div className='flex flex-row w-full py-2 justify-center items-center  text-center border-2'>


      {console.log(` page is ${page}`)}
      {console.log(` totalpage is ${totalpages}`)}


      
       {
        page>1 ?(<button className='mx-4 border  rounded-md p-1 shadow-lg' onClick={()=>handlepagechange(page-1)}>
        PREVIOUS
      </button>):(<div></div>)
        
       }

       {
        page<totalpages ?(<button className='mx-4 border  rounded-md p-1 shadow-lg' onClick={()=>handlepagechange(page+1)}>
        NEXT
      </button>):(<div></div>)
        
       }
       <p className='mx-4'>
        Page {page} of {totalpages}
       </p>
      


    </div>
  )
}
 
export default Pagination;