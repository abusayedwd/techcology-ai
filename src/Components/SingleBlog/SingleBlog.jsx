import { faBookmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
 
import './SingleBlog.css'

const SingleBlog = ({blog,handleTime,handleBookmark}) => {
        // console.log(handleTime)
        const handleTimeAdd = handleTime;
        const handleBookmarkAdd = handleBookmark;
         
        
        return (
                <div className='single container  mb-5'>
                            
              
                        <img className='w-100 mt-2' src={blog.img} alt="" />
        <div className="author-info d-flex justify-content-between align-items-center">
                  <div className="author-name d-flex mt-3">
                         <div><img src={blog.author} alt="" /></div>
                         <div className='ms-2'>
                                <h6>Name:{blog.name}</h6>
                                <p>Release :{blog.release}</p>
                         </div>
                  </div>
                <div className='d-flex align-items-center'>
                        <small>{blog.readTime} min read</small>
                 <p onClick={()=> handleBookmarkAdd(blog.title)} className='m-3'><FontAwesomeIcon icon={faBookmark} /></p>
                </div>
         </div>
                <h4>{blog.title}</h4>
               
                <small>#beginers #programmer</small> <br />
                 <p onClick={()=> handleTimeAdd(blog.readTime)} className='text-primary border-bottom'>Mark as read</p>

                        
                </div>
        );
};

export default SingleBlog;