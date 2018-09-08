import React, {Component} from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import axios from 'axios'

const API_KEY = "741b59d51974b2f81350ac6e7e2f4b79";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {movieList:{}, currentMovie:{}}
  }

  componentWillMount(){
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
      console.log("---");
      console.log('',response);
      console.log("---")
      this.setState({movieList:response.data.results.slice(1,6)});
      this.setState({currentMovie:response.data.results[0]});
    }.bind(this));
  }
  render() {
            return (
              <div>
                <SearchBar />
                <VideoList />

              </div>
              )

  }
}

export default App;
