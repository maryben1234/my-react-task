import './Third.css'



export const Third = () =>{
    return( 
        <>
        <div className="container">
            <h1 className='text-center text-light'> APP SCREENSHOST</h1>
            <p className='text-center text-light' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Provident aperiam culpa velit veniam non quisquam ratione! Nobis quasi culpa doloremque </p>
            
        
        <div className="row">
            <div className="col-lg-3 p-3 text-center ">
            <img src='https://www.axessystems.net.sa/images/screenshot-img1.jpg ' alt="image" className='images'/>
            </div>
            <div className="col-lg-3 p-3 text-center ">
            <img src='https://www.axessystems.net.sa/images/screenshot-img2.jpg'alt="image"className='images' />
            </div>
            <div className="col-lg-3 p-3  text-center  ">
                <img src='https://www.axessystems.net.sa/images/screenshot-img3.jpg 'alt="image"className='images'/>
            </div>
            <div className="col-lg-3 p-3  text-center ">
            <img src='https://www.axessystems.net.sa/images/screenshot-img4.jpg'alt="image" className='images'/>
            </div>

        </div>
        </div>
        </>
    )
}