import React, { useState } from 'react';

function PricingPlan({ onChoosePlanClick }) {
  // Set up state to track the currently chosen plan
  const [chosenPlan, setChosenPlan] = useState('');

  // Handler function for when a plan is chosen
  const handleChoosePlanClick = (plan) => {
    // Update state to reflect the chosen plan
    setChosenPlan(plan);
    // Call the `onChoosePlanClick` prop with the chosen plan
    onChoosePlanClick(plan);
  };

  return (
    // Render the pricing plan section with options for different plans
    <section className="pricing-plan">
      <h2 className="pricing-plan__title">Choose your plan.</h2>
      {/* If a plan has been chosen, display a message indicating which plan was chosen */}
      {chosenPlan && <h4>You have chosen the {chosenPlan} plan.</h4>}
      <div className="pricing-plan__options">
        <div className="pricing-plan__option">
          <h3 className="pricing-plan__option-title">Basic</h3>
          <p className="pricing-plan__option-description">
            Watch on 1 screen at a time in Standard Definition. Download videos on 1 phone or tablet.
          </p>
          <h4 className="pricing-plan__option-price">$8.99</h4>
          {/* When the "Choose Plan" button is clicked, call the `handleChoosePlanClick` function with the plan name */}
          <button className="pricing-plan__option-button" onClick={() => handleChoosePlanClick('Basic')}>
            Choose Plan
          </button>
        </div>
        {/* Repeat the same structure for the other plan options */}
        <div className="pricing-plan__option">
          <h3 className="pricing-plan__option-title">Standard</h3>
          <p className="pricing-plan__option-description">
            Watch on 2 screens at a time in High Definition. Download videos on 2 phones or tablets.
          </p>
          <h4 className="pricing-plan__option-price">$13.99</h4>
          <button className="pricing-plan__option-button" onClick={() => handleChoosePlanClick('Standard')}>
            Choose Plan
          </button>
        </div>
        <div className="pricing-plan__option">
          <h3 className="pricing-plan__option-title">Premium</h3>
          <p className="pricing-plan__option-description">
            Watch on 4 screens at a time in High Definition or Ultra High Definition. Download videos on 4 phones or tablets.
          </p>
          <h4 className="pricing-plan__option-price">$17.99</h4>
          <button className="pricing-plan__option-button" onClick={() => handleChoosePlanClick('Premium')}>
            Choose Plan
          </button>
        </div>
      </div>
    </section>
  );
}

export default PricingPlan;

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
