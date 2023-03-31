import React from 'react'
import  './Header.css'
const Header = () => {
  return (
            <div className='header'>
                    <div className='heading'>
                       seo setting 
                    </div>
                    <div className='file'>
                       <div className='subject'>name:</div> 
                        <input type="text" placeholder='Type your name' className='box' />
                        <div  className='subject'>email:</div> 
                        <input type="email" placeholder='Enter your email' className='box'/>
                        <div  className='subject'>Password:</div> 
                        <input type="Password" placeholder='Type your Password' className='box'/>
                        <div  className='subject'>Description:</div> 
                        <input type="Description" placeholder='type your Description' className='box'/>
                    </div>
                    <div className='btn'>
                        <button>submit</button>
                    </div>
            </div>
  )
}

export default Header
