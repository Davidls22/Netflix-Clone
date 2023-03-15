import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TV() {
  return (
    <div className="movie-list-container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="tvtitle">Enjoy on your TV.</h2>
          <h4 className="tv-list">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
        </div>
        <div className="col-md-5">
          <div className="tv">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="Tv"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TV;
