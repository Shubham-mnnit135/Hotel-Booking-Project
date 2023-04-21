import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const photos = [
    { src: "/images/room-1.jpg" },
    { src: "/images/room-2.jpg" },
    { src: "/images/room-3.jpg" },
    { src: "/images/room-4.jpg" },
    { src: "/images/room-5.jpg" },
    { src: "/images/room-6.jpg" },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 New </span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airpot taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krokow</h1>
              <p className="hotelDesc">
                Welcome to your luxurious hotel room, where comfort and style
                meet to provide you with an unforgettable stay. As you step into
                the room, you'll immediately notice the beautiful furniture,
                carefully selected to blend perfectly with the elegant décor.
                The centerpiece of the room is the comfortable bed, dressed in
                high-quality linens that will ensure a peaceful night's sleep.
                The garden side window allows natural sunlight to illuminate the
                room, creating a serene and relaxing atmosphere. Entertainment
                is never far away, with the LED-TV and a small fridge that
                provides easy access to your favorite snacks and drinks. The
                luxury bathroom is fitted with premium fixtures, including a
                rainfall showerhead and plush towels, creating a spa-like
                experience. This room is perfect for those who demand the best
                of everything, from the exquisite furnishings to the attention
                to detail. Come experience the ultimate in comfort and style,
                and let us make your stay truly unforgettable.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krokow, this property haa an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b>( 9 nights )
              </h2>
              <button>Reserver or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
