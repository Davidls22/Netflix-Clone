import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TV from "./components/TV";
import Everywhere from "./components/Everywhere";
import Children from "./components/children";
import Download from "./components/Download";
import PricingPlan from "./components/PricingPlan";
import FAQ from "./components/FAQ";

function App() {
  // State variables to keep track of user sign-in and selected plan
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [chosenPlan, setChosenPlan] = useState("");

  // Event handler for user sign-in
  const handleSignInClick = () => {
    setIsSignedIn(true);
  };

  // Event handler for user sign-out
  const handleSignOutClick = () => {
    setIsSignedIn(false);
    setChosenPlan("");
  };

  // Event handler for plan selection
  const handleChoosePlanClick = (plan) => {
    setChosenPlan(plan);
  };

  // Render function
  return (
    <div className="App">
      {/* Navbar component */}
      <Navbar
        onSignInClick={handleSignInClick}
        onSignOutClick={handleSignOutClick}
        isSignedIn={isSignedIn}
      />

      {/* PricingPlan component only shown if user is signed in */}
      {isSignedIn && <PricingPlan onChoosePlanClick={handleChoosePlanClick} />}

      {/* Display chosen plan if one has been selected */}
      {chosenPlan && <h4>You have chosen the {chosenPlan} plan.</h4>}

      {/* Other components */}
      <Hero />
      <TV />
      <Everywhere />
      <Children />
      <Download />
      <FAQ />
      <a className = "link"href="https://www.netflix.com/gb/">https://www.netflix.com/gb/</a>
    </div>
  );
}

export default App;


/* Added pricing plan component which is part of the main netflix page but not the 
british landing page. The landing page does not feature maybe components i could use to 
pass props, so took the plan element and added it to this page to complete the task.

Also took the sign in/out event handles from previous task which are not part of this
actual netflix landing page, but again wanted it for task. */


/*resources for this -
 https://reactjs.org/docs/hooks-state.html
 https://beta.reactjs.org/reference/react/useState
 https://beta.reactjs.org/learn/responding-to-events
 https://blog.logrocket.com/react-onclick-event-handlers-guide/
 https://upmostly.com/tutorials/react-onclick-event-handling-with-examples
 https://hygraph.com/blog/usestate-react#using-multiple-state-variables
 - Mentor help
 - Road to React book
 */