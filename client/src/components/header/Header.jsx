import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
        faBed, 
        faCalendarDays, 
        faCar, 
        faPerson, 
        faPlane, 
        faTaxi 
       } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format}  from "date-fns";
import { useNavigate } from "react-router-dom";


const Header = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1,
    })
    
    const navigate = useNavigate();

    const handelOption = (name, operation) => {
        setOptions( (prev) => {
            return {
             ...prev,
             [name]: operation ==="i" ? options[name] + 1: options[name] -1,
           };
        });
    };

    const heandleSearch = ()=>{
          navigate("/hotels",{state: {destination, dates, options}});
    }
    return (
        <div className="header">
           <div className={type==="list" ?"headerContainer listMode" : "headerContainer"} >
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                { type !=="list" &&
                <>
                <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                <p className="headerDesc">
                   Get rewarded for your travels – unlock instant savings of 10% or
                   more with a free Lamabooking account
                </p>
                <button className="headerBtn">Sign in/Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                       <FontAwesomeIcon icon={faBed} className="headerIcon" />
                       <input 
                           type="text" 
                           placeholder="where are you going" 
                           className="headerSearchInput"
                           onChange={(e) => setDestination(e.target.value)}
                       />
                    </div>
                    <div className="headerSearchItem">
                       <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                       <span onClick={() => setOpenDate(!openDate) } className="headerSearchText">
                          {`${format(dates[0].startDate, "MM/dd/yyyy")} 
                             to 
                            ${format(dates[0].endDate,"MM/dd/yyyy")}`
                          }
                       </span>
                       {openDate && <DateRange  
                            editableDateInputs={true}
                            onChange={item => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            className="date"
                            minDate={new Date()}
                       />}
                    </div>
                    <div className="headerSearchItem">
                       <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                       <span onClick = {() => setOpenOptions(!openOptions)}className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                         {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button disabled={options.adult<=1} className="optionCounterButton" onClick ={()=> handelOption("adult",'d')}>-</button>
                                    <span className="optionCouterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick ={()=> handelOption("adult",'i')}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children<=0} className="optionCounterButton" onClick ={()=> handelOption("children",'d')}>-</button>
                                    <span className="optionCouterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick ={()=> handelOption("children",'i')}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button disabled={options.room<=1} className="optionCounterButton" onClick ={()=> handelOption("room",'d')}>-</button>
                                    <span className="optionCouterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick ={()=> handelOption("room",'i')}>+</button>
                                </div>
                            </div>
                         </div>}
                    </div>
                    <div className="headerSearchItem">
                       <button className="headerBtn" onClick={heandleSearch}>Search</button>
                    </div>
                </div></>}
           </div>
        </div>
    )
}

export default Header;