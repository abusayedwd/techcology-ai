import React, { useEffect, useState } from 'react';
import SideCart from '../Sidecart/SideCart';
import SingleBlog from '../SingleBlog/SingleBlog';
 

const Blog = () => {
        const [blogs, setBlogs] = useState([])
        const [Time, setTime] = useState(0)
        useEffect(()=> {
                fetch("Fakedata.json")
                .then(res => res.json())
                .then(data =>  setBlogs(data))
        },[])
        const handleTime = ( time) => {
                const Timee = Time + time;
              setTime(Timee)
                // console.log(Time)
        }
        return (
                <div className=''>

       <div className="main row row-cols-sm-1 row-cols-md-2">
            <div className="blog-container col-md-8 col-sm-12 ">
   
            {
                        blogs.map(blog => 
                            <SingleBlog
                            blog = {blog}
                            key = {blog.id}
                            handleTime = {handleTime}
                            ></SingleBlog>,
                                 
                        )
                     }  
    
          </div>
   
          <div className="cart-container setP col-md-4 col-sm-12">
     
    <SideCart time = {Time}></SideCart>
        </div>
</div>


                      
                </div>
        );
};

export default Blog;