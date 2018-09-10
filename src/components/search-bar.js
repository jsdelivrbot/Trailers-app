import React,{Component} from 'react'

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {searchText:"", placeholder:"which movie?"}
  }
  render(){
    return (
      <div className="row">
        <div className="col-md-8">
          <input type="text" className="form-control input-lg" onChange={this.handleChange.bind(this)} placeholder={this.state.placeholder}/>
          <p>{this.state.searchText}</p>
        </div>
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
