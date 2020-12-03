import React, { useState } from 'react';
import {Calendar } from 'react-calendar';
import "./app.css";
import Note from "./nottaking.js";


const ReactCalendar=(props)=>{
    const [date , setDate]= useState("");
    const[form,setform]=useState("");

    

    const onChange =(date) =>{
        debugger;
        setDate(new Date(date));
        
        setform(<Note name={date.toString()} />)
        

        
        
    };
    return(
        <div>
            <Calendar className="CALENDER"  onChange={onChange} />
            {form}
        
        </div>    
            
            
        
        
    );
};

export default  ReactCalendar;
