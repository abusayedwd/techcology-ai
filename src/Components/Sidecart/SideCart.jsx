import React from 'react';
 
const SideCart = ( props) => {
        //  console.log(props.time)
         
        return (
     <div className='setP'>
                        <div className='card mx-auto mt-2 p-3'>
                                <h5 className='fw-bold'>Spent time on read : {props.time} </h5>
                        </div>
                <div className='bg-info mt-3'>
                       <h4>Bookmarked Blogs : </h4>
                </div>
   </div>
        );
};

export default SideCart;