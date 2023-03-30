import React from 'react';
import './Header.css'
const Header = () => {
        return (
                <div className='d-flex align-items-center justify-content-between border-bottom'>
                      <h4 className='fw-bold '>Knowledge Cafe</h4> 
                      <p >
                      <img  src="https://images.unsplash.com/photo-1613323593608-abc90fec84ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                        </p>   
                </div>
        );
};

export default Header;