import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FAQ() {
  return (
    <div className="FAQ-list">
      <div className="row">
        <div className="col-md-12">
          <h1 className="titleFAQ">Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <ul class="faq-list">
            <li class="faq-list-item">
              <button class="faq-question">
                <span>What is Netflix? </span>
              </button>
            </li>
            <li class="faq-list-item">
              <button class="faq-question">
                <span>How much does Netflix cost? </span>
              </button>
            </li>
            <li class="faq-list-item">
              <button class="faq-question">
                <span>What's different on advert-supported plan? </span>
              </button>
            </li>
            <li class="faq-list-item">
              <button class="faq-question">
                <span>Where can i watch? </span>
              </button>
            </li>
            <li class="faq-list-item">
              <button class="faq-question">
                <span>How do i cancel? </span>
              </button>
            </li>
            <li class="faq-list-item">
              <button class="faq-question">
                <span>What can i watch on Netflix? </span>
              </button>
            </li>
            <li class="faq-list-item">
              <button class="faq-question">
                <span>Is Netflix good for children? </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <section class="hero">
        <div class="hero-wrapper">
          <h5>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
          <form>
            <input
              className="emailsection"
              type="email"
              id="email"
              placeholder="Email address"
              required
            />
            <button className="submitbutton" type="submit">
              Get Started {">"}{" "}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
