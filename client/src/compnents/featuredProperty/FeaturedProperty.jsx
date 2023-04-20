import "./featuredProperty.css";


const FeaturedProperty = () => {
   const images = [
    "/images/hotel-1.jpg",
    "/images/hotel-2.jpg",
    "/images/hotel-3.jpg",
    "/images/hotel-4.jpg",
    
  ];  
  return (
    <div className="fp">
      <div className="fpItem" >
         <img
          src={images[0]}
          alt=""
          className="fpImg"
         />
         <span className="fpName">Rajputana Resort</span>
         <span className="fpCity">Dhampur</span>
         <span className="fpPrice">Starting from $120</span>
         <div className="fpRating">
            <button>9.8</button>
            <span>Excellent</span>
         </div>
      </div>
      <div className="fpItem" >
         <img
          src={images[1]}
          alt=""
          className="fpImg"
         />
         <span className="fpName">Rajputana Resort</span>
         <span className="fpCity">Dhampur</span>
         <span className="fpPrice">Starting from $120</span>
         <div className="fpRating">
            <button>9.8</button>
            <span>Excellent</span>
         </div>
      </div>
      <div className="fpItem" >
         <img
          src={images[2]}
          alt=""
          className="fpImg"
         />
         <span className="fpName">Rajputana Resort</span>
         <span className="fpCity">Dhampur</span>
         <span className="fpPrice">Starting from $120</span>
         <div className="fpRating">
            <button>9.8</button>
            <span>Excellent</span>
         </div>
      </div>
      <div className="fpItem" >
         <img
          src={images[3]}
          alt=""
          className="fpImg"
         />
         <span className="fpName">Rajputana Resort</span>
         <span className="fpCity">Dhampur</span>
         <span className="fpPrice">Starting from $120</span>
         <div className="fpRating">
            <button>9.8</button>
            <span>Excellent</span>
         </div>
      </div>
    </div>
  )
}

export default FeaturedProperty
