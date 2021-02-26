import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Body from './components/Body/Body';
import CardList from './components/CardList';
import { setTitle } from './actions';
import { setDescription } from './actions';
import { requestData } from './actions';

const mapStateToProps = state => {
  return{
    title: state.title,
    description: state.description,
    data: state.data,
    result: state.result,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleChange: (event) => dispatch(setTitle(event.target.value)),
    onDescriptionChange:(event) => dispatch(setDescription(event.target.value)),
    onDataChange:(event) => dispatch(requestData(event.target.value)),
    // requestdata: () => dispatch(requestdata())
  } 
}

class App extends Component {
  constructor(){
    super()
    this.state={
      
    }
  }
  render(){
    const { onTitleChange, onDescriptionChange, onDataChange} = this.props;
    return (
      <div className="App">
        <Body TitleChange={onTitleChange} DescriptionChange={onDescriptionChange} DataChange={onDataChange}/>
        <CardList/>
      </div>
    );
  }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(App);
