import React from 'react';
import './Body.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Body = ({TitleChange, DescriptionChange, DataChange}) => {
    return (
        <div >
            <div className="body">
                <div className="box">
                    <div className="title">
                        <h2>Title :</h2>
                        <input onChange={TitleChange} placeholder="Enter Title"/>
                    </div>
                    <h2 className="des">Description</h2>
                    <textarea onChange={DescriptionChange} rows = "20" cols = "100" placeholder="Start writing"></textarea>
                </div>
                <Calendar className="calendar"/> 
            </div>
            <button onClick={DataChange}>Enter</button>   
        </div> 
    )
}

export default Body;