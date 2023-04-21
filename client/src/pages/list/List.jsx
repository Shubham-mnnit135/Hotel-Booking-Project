import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format} from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
const List = () =>{

    const location = useLocation();
   //  console.log(location);
    const [destination,setDestination] = useState(location.state.destination);
    const [dates,setDates] = useState(location.state.dates);
    const [options,setOptions] = useState(location.state.options);
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    return (

        <div> 
           <Navbar/>
           <Header type="list"/>
           <div className="listContainer">
             <div className="listWrapper">
                <div className="listSearch">
                   <h1 className="lsTitle">Search</h1>
                   <div className="lsItem">
                     <label>Destination</label>
                     <input placeholder={destination} type="text" />
                   </div>
                   <div className="lsItem">
                     <label>Check-in Date</label>
                     <span onClick= {()=>setOpenDate(!openDate)}>
                        {`
                           ${format(dates[0].startDate, "MM/dd/yyyy")} 
                             to 
                           ${format(dates[0].endDate,"MM/dd/yyyy")}`
                        }
                    </span>
                    { openDate && <DateRange
                         onChange={(item) => setDates([item.selection])}
                         minDate={new Date()}
                         ranges={dates}
                         className="dates"
                    />}
                   </div>
                   <div className="lsItem"> 
                       <label>Options</label>
                       <div className="lsOptions">
                           <div className="lsOptionItem">
                              <span className="lsOptionText">
                                 Min Price <small>per night</small>
                              </span>
                              <input type="number" className="lsOptionInput"/>
                           </div>
                           <div className="lsOptionItem">
                              <span className="lsOptionText">
                                 Max Price <small>per night</small>
                              </span>
                              <input type="number" className="lsOptionInput"/>
                           </div>
                           <div className="lsOptionItem">
                              <span className="lsOptionText">
                                 Adult <small>per night</small>
                              </span>
                              <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
                           </div>
                           <div className="lsOptionItem">
                              <span className="lsOptionText">
                                 Children <small>per night</small>
                              </span>
                              <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                           </div>
                           <div className="lsOptionItem">
                              <span className="lsOptionText">
                                 Room <small>per night</small>
                              </span>
                              <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
                           </div>
                       </div>
                   </div>
                   <button >Search</button>
                </div>
                <div className="listResult">
                  <SearchItem/>
                  <SearchItem/>
                  <SearchItem/>
                  <SearchItem/>
                  <SearchItem/>
                  <SearchItem/>
                  <SearchItem/>
                  <SearchItem/>
                  <SearchItem/>
                </div>
             </div>
           </div>
        </div>
    )
}

export default List;