import React,{Component} from 'react'

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {searchText:"", placeholder:"which movie?"}
  }
  render(){
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} placeholder={this.state.placeholder}/>
        <p>{this.state.searchText}</p>
      </div>
    )
  }

  handleChange(event){
    this.setState({searchText:event.target.value});
    console.log('une saisie', event.target.value);
    console.log('---');

  }
}

export default SearchBar;
