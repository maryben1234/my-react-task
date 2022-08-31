
export const Cards =({img, backgroundColor})=>{
    return (
      <div>
        <div className="mx-auto" style={{backgroundColor}}>
     <img src={img} className="card-img-top"/>
     <div className="card-body p-3">
    <h5 className="card-title text-center">Card title</h5>
    <p className="card-text  text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   </div>
  </div>
      </div>

    )
}
