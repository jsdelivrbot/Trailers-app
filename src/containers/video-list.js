import React from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = (props) => {
  /*const movies = ["film 1", "film 2", "film 3", "film 4", "film 5"]*/
  const {movieList} = props;
  return (
    <div>
      <ul>
        {
          movieList.map(movie=>{
            return <VideoListItem key={movie.id} movie={movie} callback={receiveCallBack}/>
          })
        }
      </ul>
    </div>
    )

  function receiveCallBack(movie){
    props.callback(movie);
  }

}

export default VideoList
