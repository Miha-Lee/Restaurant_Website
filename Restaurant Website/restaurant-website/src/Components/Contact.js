import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="m-contact">
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="col-md-12">
            <h2 className="section-title">Contact</h2>
          </div>
          <form>
            <div className="col-md-6">
              <input
                type="text"
                id="name"
                placeholder="Name"
                style={{ paddingLeft: "20px" }}
              />
              <input
                type="text"
                id="email"
                placeholder="Email"
                style={{ paddingLeft: "20px" }}
              />
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                style={{ paddingLeft: "20px" }}
              />
            </div>

            <div className="col-md-6">
              <textarea
                id="message"
                placeholder="Message"
                rows="10"
                className="texta-section"
              ></textarea>
            </div>

            <div className="col-md-4 col-md-offset-4">
              <input type="button" id="contact-button" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
