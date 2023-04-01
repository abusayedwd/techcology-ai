import React, { useEffect, useState } from 'react';
import Question from '../Questions/Question';
import SideCart from '../Sidecart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleBlog from '../SingleBlog/SingleBlog';
 

const Blog = () => {
        const [blogs, setBlogs] = useState([])
        const [Time, setTime] = useState(0)
        const [ BookMarks, setBookmarks] = useState([])
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
        const handleBookmark = (bookMark) => {
                if(BookMarks.includes(bookMark)){
                        toast("Already bookmarked!!");
                        
                }
                else{
                        
                        const newBookMarks = [...BookMarks, bookMark]
                        setBookmarks(newBookMarks);
                }
                // console.log(BookMarks)
        }
         
        return (
                <div className=''>

       <div className="main row row-cols-sm-1 row-cols-md-2">
            <div className="blog-container col-md-8 col-sm-12 ">
   
            {
                        blogs.map(blog => 
                            <SingleBlog
                            blog = {blog}
                            handleBookmark ={handleBookmark}
                            key = {blog.id}
                            handleTime = {handleTime}
                            ></SingleBlog>,
                                 
                        )
                     }  
    
          </div>
   
          <div className="cart-container h-100 setP col-md-4 col-sm-12">
     
    <SideCart time = {Time}
    blogs = {BookMarks}
    length = {BookMarks.length}
    ></SideCart>
    <ToastContainer
          position="top-right" 
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"/>
        </div>
</div>


           <Question></Question>           
                </div>
        );
};

export default Blog;