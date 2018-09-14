import React from 'react'

const BASE_URL="https://www.youtube.com/embed/";

const Video = ({videoId}) => {
  if (!videoId) {
    return  <div className="container">
            <div className="loader">
            <div className="face">
              <div className="circle"></div>
            </div>
            <div className="face">
              <div className="circle"></div>
            </div>
          </div>
          </div>

  }
  const url = `https:www.youtube.com/embed/${videoId}`;
  return(
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`${BASE_URL}${videoId}`}></iframe>;
      </div>
    )

}

export default Video;
