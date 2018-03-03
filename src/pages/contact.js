import React from 'react';

const ContactForm = () => (
  <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              Contact Me
            </h2>
            <p style={{ marginBottom: '16px' }}>
              I'm not very active in social media and I value my privacy too,
              but no worries! I check my inbox everyday, so it's an easy and
              direct way to connect with me. Send me an email using the form
              below so that I can make pass of spam emails using FormSpree
              (simple and elegant service!).
            </p>
            <form
              method="POST"
              action="https://formspree.io/mail@waiyanyoon.com"
            >
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              <input type="hidden" name="_next" value="//waiyanyoon.com" />

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                  <input
                    className="input"
                    name="_subject"
                    placeholder="Your subject"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    required
                    className="textarea"
                    placeholder="Your message"
                    name="message"
                  />
                </div>
              </div>

              <div className="control">
                <button type="submit" className="button is-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactForm;
