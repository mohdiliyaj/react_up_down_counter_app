import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    
    const [count, setCount] = useState(0);
    
    const incrementHandler = ()=>{
        setCount(count+1);
    }
    const decrementHandler = ()=>{
        setCount(count-1);
    }
    const resetHandler = ()=>{
        setCount(0);
    }


    return (
        <div className='main-container d-flex align-items-center justify-content-center vh-100'>
            <div className='card w-25 bg-primary bg-opacity-50 border-none'>
                <div className='card-body text-center'>
                    <div>
                        <h5 className='text-white'>Increment & Decrement</h5>
                    </div>
                    <div className='container w-50'>
                        <div className=' card d-flex flex-row justify-content-around bg-primary bg-opacity-50'>
                            <button className='btn border-none text-white' onClick={decrementHandler}>-</button>
                            <div className='border-start border-end my-1 px-2 pt-1 text-white'>{count}</div>
                            <button className=' btn border-none text-white' onClick={incrementHandler}>+</button>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <button className='btn btn-sm btn-primary' onClick={resetHandler}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;