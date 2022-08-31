import {LastCard } from './LastCard'
import  './LastSection.css' 

export const LastSection = ()=> {
  return (

    <div class="app-pricing">
        <div class=" lastSection">
            <div class="pricing-card">
            {/* <h2 >APP PRICING</h2> */}
            <h3 className='text-center text-light p-5'> APP PRICING</h3>
            </div>
            <div class="container">
                {/* <div class="row-box gap-2"> */}
           <LastCard />
           {/* <LastCard />
           <LastCard /> */}
                {/* </div> */}
            </div>
        </div>
    </div>



  )
}

