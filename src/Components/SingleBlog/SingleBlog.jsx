import React from 'react';
import './SingleBlog.css'

const SingleBlog = ({blog}) => {
        console.log(blog)
        return (
                <div className='single container card m-2'>
                      
                        <img className='w-100 mt-2' src={blog.img} alt="" />
        <div className="author-info d-flex justify-content-between align-items-center">
                  <div className="author-name d-flex mt-3">
                         <div><img src={blog.author} alt="" /></div>
                         <div className='ms-2'>
                                <h6>Name:{blog.name}</h6>
                                <p>Release :{blog.release}</p>
                         </div>
                  </div>
                <div className='d-flex'>
                        <small>{blog.readTime} min read</small>
                        <button>book</button>
                </div>
         </div>
                <h4>{blog.title}</h4>
                <br />
                <small>#beginers #programmer</small>
                <a className='mb-3' href="/dom">Mark as read</a>

                        
                </div>
        );
};

export default SingleBlog;