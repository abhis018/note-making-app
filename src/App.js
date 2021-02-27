import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Body from './components/Body/Body';
import CardList from './components/CardList';
import {setSort, setTitle } from './actions';
import { setDate } from './actions';
import { setDescription } from './actions';
import { requestData } from './actions';
import {setSearchField } from './actions';
import { filterdata } from './actions'

const mapStateToProps = state => {
  return{
    title: state.title,
    description: state.description,
    data: state.data,
    result: state.result,
    searchField: state.searchField,
    date: state.date,
    week: state.week,
    month: state.month,
    year: state.year,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleChange: (event) => dispatch(setTitle(event.target.value)),
    onDescriptionChange:(event) => dispatch(setDescription(event.target.value)),
    onDataChange:(event) => dispatch(requestData(event.target.value)),
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onDateChange: (event) => dispatch(setDate(event.target.value)),
    filterdata: (filterWeek, filterYear, filterMonth) => dispatch(filterdata(filterWeek, filterYear, filterMonth)),
    setSort: (sortData) => dispatch(setSort(sortData)),
    // requestdata: () => dispatch(requestdata())
  } 
}

class App extends Component {
  constructor(){
    super()
    this.state={
      
    }
  }

onChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  }, () => {
    console.log(this.state.week, this.state.year, this.state.month)
    this.props.filterdata(this.state.week, this.state.year, this.state.month);
    // console.log(event.target.value)
  })
}

sortEntries = (event) => {
  console.log(event);
  this.setState({
    [event.target.name]: event.target.value
  }, () => {
    console.log(this.state.sortState)
    this.props.setSort(this.state.sortState);
    // console.log(event.target.value)
  })
}
  render(){
    const {result, searchField, onTitleChange, onDescriptionChange, onDataChange, onSearchChange, onDateChange, onNewSort, onOldSort} = this.props;
    const onChange = this.onChange;
    const sortEntries = this.sortEntries;
    const filteredData = result.filter(result => {
      return result.title.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className="App">
        <Body TitleChange={onTitleChange} DescriptionChange={onDescriptionChange} DataChange={onDataChange} DateChange={onDateChange}/>
        <CardList 
          result={filteredData}
          searchChange={onSearchChange} 
          Change={onChange}
          sortEntries={sortEntries}
          />
      </div>
    );
  }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(App);
