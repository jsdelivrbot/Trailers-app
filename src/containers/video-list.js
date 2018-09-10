import React from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = ({movieList}) => {
  /*const movies = ["film 1", "film 2", "film 3", "film 4", "film 5"]*/
  return (
    <div>
      <ul>
        {
          movieList.map(movie=>{
            return <VideoListItem key={movie.id} movie={movie} />
          })
        }
      </ul>
    </div>
    )

}

export default VideoList
