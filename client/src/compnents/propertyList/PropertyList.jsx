import "./propertyList.css";

const PropertyList = () => {

  const images = [
    "/images/hotel.jpg",
    "/images/apartment.jpg",
    "/images/resort.jpg",
    "/images/villa.jpg",
    "/images/cabin.jpg",
  ];  
  return (
    <div className="pList">
       <div className="pListItem" >
            <img
                src={images[0]}
                alt=""
                className="pListImg"
            />
            <div className="pListTitles">
                <h1>Hotel</h1>
                <h2>123 Hotels</h2>
            </div>
        </div>
        <div className="pListItem" >
            <img
                src={images[1]}
                alt=""
                className="pListImg"
            />
            <div className="pListTitles">
                <h1>Apartment</h1>
                <h2>123 Apartments</h2>
            </div>
        </div>
        <div className="pListItem" >
            <img
                src={images[2]}
                alt=""
                className="pListImg"
            />
            <div className="pListTitles">
                <h1>Resort</h1>
                <h2>123 Resots</h2>
            </div>
        </div>
        <div className="pListItem" >
            <img
                src={images[3]}
                alt=""
                className="pListImg"
            />
            <div className="pListTitles">
                <h1>Villa</h1>
                <h2>123 Villas</h2>
            </div>
        </div>
        <div className="pListItem" >
            <img
                src={images[4]}
                alt=""
                className="pListImg"
            />
            <div className="pListTitles">
                <h1>Cabin</h1>
                <h2>123 Cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList;
