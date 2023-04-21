import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="/images/hotel-1.jpg" alt="" className="siImg"/>
      <div className="siDesc">
         <h1 className="siTitle">Tower Street Apartments</h1>
         <span className="siDistance">500m form Center</span>
         <span className="siTaxiOp">Free airport taxi</span>
         <span className="siSubtitle">Studio Apartment with Air conditioning</span>
         <span className="siFeatures">Entire Studio 1 Bathroom 21m<sup>2</sup> 1 Full Bed</span>
         <span className="siCancelOp">Free Cancellation</span>
         <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
         <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
         </div>
         <div className="siDetailTexts">
            <div className="siPrice">$112</div>
            <div className="siTaxOp">Includes taxes and fees</div>
            <button className="siCheckButton">See availability</button>
         </div>
         
      </div>
    </div>
  )
}

export default SearchItem;
