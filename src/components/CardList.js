import React from 'react';
import Card from './Card';
// import store from '../index';
import './Card.css';

const CardList = ({result, searchChange, sortNewChange, sortOldChange, weekChange, yearChange, monthChange, Change, sortEntries}) => {
    return (
        <div className="cardlist">
            <div className="searchoption">
                <input className="input" placeholder="Search for Title" onChange={searchChange}></input>
                <button className="but">Search</button>
            </div>
            <select onChange = {sortEntries} name='sortState'>
                <option>select sort</option>
                <option name='ascending'>ascending</option>
                <option name='descending'>descending</option>
            </select>
            <div>
                <input onChange = {Change} name='week' placeholder="Enter week number"></input>
                <select onChange={Change} name="month">
                    <option>Select Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="Septemper">Septemper</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <input onChange = {Change} name="year" placeholder="Enter Year"></input>
            </div>
            {result.map((user, i) => (
                    <Card
                        key={i}
                        Title={result[i].title}
                        Date={result[i].date}
                        Description={result[i].description}
                    />
            ))} 
        </div> 
    )
}

export default CardList;