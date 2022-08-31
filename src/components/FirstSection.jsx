import React from 'react'
import "./FirstSection.css"


export const FirstSection= ()=> {
  return (
    <> 
    <h3 class='text-center text-white pt-3'>WELCOME TO NEW APP</h3>
    <hr className='w-25 m-auto bg-white mb-4' />
    <div class='container mt-3'>
    <div className="row justify-center-center ">
        <div className='col-lg-6 col-md-12 col-sm 12 m-auto text-center text-light'>
        <p >
          OUR MOBILE APP TEAM
        </p>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cumque ex et natus nostrum placeat officia repudiandae</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cumque ex et natus nostrum placeat officia repudiandae repellendus, impedit explicabo qui mollitia laudantium ipsa totam dolorem. Placeat accusantium amet commodi!</p>
        
        </div>
        <div className=' col-lg-3 col-md-5 headerimg py-3'>
            <div className='card border-0'>
            <img src="https://www.axessystems.net.sa/images/team-img1.jpg" alt=""/>
            </div>
        </div>
        <div className=' col-lg-3 col-md-5 headerimg py-3'>
            <div className='card border-0'>
            <img src="https://www.axessystems.net.sa/images/team-img2.jpg" alt=""/> 
            </div>
        </div>
 
    </div>
    </div>
    
    
    
    
    
    </>
  )
}

