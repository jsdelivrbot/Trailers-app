import React, {Component} from 'react'
import SearchBar from '../components/search-bar'
import VideoDetail from '../components/video-detail'
import Video from '../components/video'
import VideoList from './video-list'

import axios from 'axios'

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?sort_by=popularity.desc&include_adult=false&append_to_response=images";
const SEARCH_URL = "search/movie?include_adult=false";
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
      this.setState({currentMovie:response.data.results[0],movieList:response.data.results.slice(1,6)}, function(){
        this.applyVideoToCurrentMovie();
      });
/*      console.log('',this.state.currentMovie);
      console.log("---");
      console.log('',this.state.movieList);
      console.log("---")*/
    }.bind(this));
  }

  applyVideoToCurrentMovie (){
    axios.get(` ${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function(response){
    const youtubeKey = response.data.videos.results[0].key;
    let newCurrentMovieState = this.state.currentMovie;
    newCurrentMovieState.videoId = youtubeKey;
    this.setState({currentMovie : newCurrentMovieState})
    }.bind(this));
    console.log('',this.state.currentMovie);
  }
  onClickListItem(movie){
    this.setState({currentMovie : movie}, function(){
      this.applyVideoToCurrentMovie();
      this.setRecommendation();
    });
  }

  onClickSearch(searchText){
    if(searchText){
        axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(function(response){
          if(response.data && response.data.results[0]){
            if(response.data.results[0].id != this.state.currentMovie.id){
              this.setState({currentMovie:response.data.results[0]}, function() {
                this.applyVideoToCurrentMovie();
                this.setRecommendation();
              })
            }
          }

      }.bind(this));
    }
  }
    setRecommendation(){
      axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}`).then(function(response){
        this.setState({movieList:response.data.results.slice(0,5)});
      }.bind(this));
    }

  render() {
            const renderVideoList = () => {
              if(this.state.movieList.length>=5){
                return <VideoList movieList={this.state.movieList} callback={this.onClickListItem.bind(this)}/>
              }
            }
            return (
              <div>
                <div className="search-bar">
                  <SearchBar callback={this.onClickSearch.bind(this)}/>
                </div>
                <div className="row">
                  <div className="col-md-7">
                   <Video videoId={this.state.currentMovie.videoId} />
                   <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview} />
                  </div>
                  <div className="col-md-5">
                    {renderVideoList()}
                  </div>
                </div>
              </div>
              )

  }
}

export default App;
