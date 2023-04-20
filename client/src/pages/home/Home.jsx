import Featured from "../../compnents/featured/Featured"
import FeaturedProperty from "../../compnents/featuredProperty/FeaturedProperty"
import Footer from "../../compnents/footer/Footer"
import Header from "../../compnents/header/Header"
import MailList from "../../compnents/mailList/MailList"
import Navbar from "../../compnents/navbar/Navbar"
import PropertyList from "../../compnents/propertyList/PropertyList"
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
         <Featured/>
         <h1 className="homeTitle">Browe by property type</h1>
         <PropertyList/>
         <h1 className="homeTitle">Home guests love</h1>
         <FeaturedProperty/>
         <MailList/>
         <Footer/> 
      </div>
      {/* <MailList/>
      <Footer/>  */}
    </div>
  )
}

export default Home;
