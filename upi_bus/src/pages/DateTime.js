import React from "react";
import './DateTime.css'
var DateTime=()=>{
    var showDate=new Date();
    var displayDate=showDate.getDate()+'/'+showDate.getMonth()+'/'+showDate.getFullYear();
    return(
        <div>
            <input className="boxdt" type="text" value={displayDate} readOnly="true"></input>
        </div>
    )
}

export default DateTime;