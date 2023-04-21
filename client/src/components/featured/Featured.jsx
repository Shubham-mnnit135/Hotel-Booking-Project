import "./featured.css";

const Featured = () => {
  const images = [
    "/images/uttarakhand.jpg",
    "/images/kerela.jpg",
    "/images/goa.jpg",
    "/images/kashmir.jpg",
  ];  
  return (
    <div className="featured">
       <div className="featuredItem">
            <img
              src={images[0]}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>uttarakhand</h1>
              <h2>123 properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src={images[1]}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kerela</h1>
              <h2>323 properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={images[3]}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kashmir</h1>
              <h2>123 properties</h2>
            </div>
          </div>
    </div>
  )
}

export default Featured;
