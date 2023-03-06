import React from 'react';

function Hero() {
  return (
    <section class="hero">
  <div class="hero-wrapper">
      <h1>Unlimited films, TV</h1>
      <h1>programmes and more.</h1>
      <h4>Watch anywhere. Cancel anytime.</h4>
      <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
      <form>
  <input className="emailsection" type="email" id="email" placeholder="Email address" required/>
  <button className="submitbutton" type="submit">Get Started {'>'} </button>
</form>
    </div>
    </section>
  );
}

export default Hero;