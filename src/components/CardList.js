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
            <div className="note-body">
                <div className="sort-filter">
                    <p>SORT</p>
                    <select onChange = {sortEntries} name='sortState' className="sort">
                        <option>select sort</option>
                        <option name='ascending'>ascending</option>
                        <option name='descending'>descending</option>
                    </select>
                    <p>FILTER</p>
                    <div>
                        <input onChange = {Change} name='week' placeholder="Enter week number" className="filter1"></input><br/>
                        <select onChange={Change} name="month" className="filter2">
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
                        </select><br/>
                        <input onChange = {Change} name="year" placeholder="Enter Year" className="filter3"></input>
                    </div>
                </div>
                <div className="mapping">
                    {result.map((user, i) => (
                            <Card
                                key={i}
                                Title={result[i].title}
                                Date={result[i].date}
                                Description={result[i].description}
                            />
                    ))}
                </div>
            </div> 
        </div> 
    )
}

export default CardList;