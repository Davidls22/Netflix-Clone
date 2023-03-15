import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Everywhere() {
  return (
    <div className="stream-list-container">
      <div className="row">
      <div className="col-md-5">
          <div className="tv2">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt="Tv"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="streamtitle">Watch everywhere.</h2>
          <h4 className="stream-list">Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.</h4>
        </div>
      </div>
    </div>
  );
}

export default Everywhere;
