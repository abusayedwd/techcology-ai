import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import SpenTime from '../SpenTime/SpenTime';

const Blog = () => {
        const [blogs, setBlogs] = useState([])
        useEffect(()=> {
                fetch("Fakedata.json")
                .then(res => res.json())
                .then(data =>  setBlogs(data))
        },[])
        return (
                <div className=''>
                     {
                        blogs.map(blog => 
                            <SingleBlog
                            blog = {blog}
                            key = {blog.id}
                            ></SingleBlog>
                 
                                 
                        )
                     }   
                </div>
        );
};

export default Blog;