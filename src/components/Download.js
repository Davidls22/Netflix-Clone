import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Download() {
  return (
    <div className="stream-list-container">
      <div className="row">
      <div className="col-md-5">
          <div className="tv2">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="Phone Downloading"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="streamtitle">Download your <br></br>programmes to watch <br></br>offline.</h2>
          <h4 className="stream-list">Only available on advert-free plans.</h4>
        </div>
      </div>
    </div>
  );
}

export default Download;
