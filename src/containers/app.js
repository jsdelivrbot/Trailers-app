import React, {Component} from 'react'
import SearchBar from '../components/search-bar'
import VideoDetail from '../components/video-detail'
import VideoList from './video-list'
import axios from 'axios'

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?sort_by=popularity.desc&include_adult=false&append_to_response=images";

const API_KEY = "api_key=741b59d51974b2f81350ac6e7e2f4b79";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {movieList:{}, currentMovie:{}}
  }

  componentWillMount(){
    this.iniMovies();
  }

  iniMovies(){
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
      this.setState({currentMovie:response.data.results[0],movieList:response.data.results.slice(1,6)});
/*      console.log('',this.state.currentMovie);
      console.log("---");
      console.log('',this.state.movieList);
      console.log("---")*/
    }.bind(this));
  }
  render() {
            const renderVideoList = () => {
              if(this.state.movieList.length>=5){
                return <VideoList movieList={this.state.movieList}/>
              }
            }
            return (
              <div>
                <SearchBar />
                <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview} />
                {renderVideoList()}
              </div>
              )

  }
}

export default App;
