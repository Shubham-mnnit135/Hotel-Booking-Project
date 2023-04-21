import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <div className="mailContainer">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default MailList;