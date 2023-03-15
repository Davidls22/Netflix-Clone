import React from 'react';

// Navbar component takes in three props:
// onSignInClick: function to handle sign-in button click
// onSignOutClick: function to handle sign-out button click
// isSignedIn: boolean indicating whether a user is signed in
function Navbar({ onSignInClick, onSignOutClick, isSignedIn }) {
  return (
    <nav>
      <img
        className="logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix Logo"
      />
      <div className="signin-container">
        {/* If user is signed in, show sign-out button and welcome message. */}
        {isSignedIn ? (
          <>
            <button className="signin-button" onClick={onSignOutClick}>
              Sign Out
            </button>
            <h4 className="welcome-back-text">Welcome Back</h4>
          </>
        ) : (
          // If user is not signed in, show sign-in button.
          <button className="signin-button" onClick={onSignInClick}>
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

