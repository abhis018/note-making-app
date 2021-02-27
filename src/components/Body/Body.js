import React from 'react';
import './Body.css';

const Body = ({TitleChange, DescriptionChange, DataChange, DateChange}) => {
    return (
        <div >
            <div className="body">
                <div className="box">
                    <div className="title">
                        <h2>Title</h2><br/>
                        <input onChange={TitleChange} placeholder="Enter Title"/>
                    </div>
                    <h2 className="des">Description</h2>
                    <textarea onChange={DescriptionChange} rows = "10" cols = "100" placeholder="Start writing"></textarea>
                </div>
                <input onChange={DateChange} type="date" className="calendar"/> 
                <button onClick={DataChange} className="submit">Submit</button>  
            </div> 
        </div> 
    )
}

export default Body;