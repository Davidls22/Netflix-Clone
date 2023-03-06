import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Children() {
  return (
    <div className="movie-list-container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="tvtitle">
            Create profiles for <br></br>children.
          </h2>
          <h4 className="tv-list">
            Send children on adventures with their favourite characters in a
            space made just for them – free with your membership.
          </h4>
        </div>
        <div className="col-md-5">
          <div className="tv">
            <img
              src="https://occ-0-1448-299.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
              alt="Children and a rabbit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Children;
