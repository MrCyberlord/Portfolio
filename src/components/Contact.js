import React from "react";

const Contact = () => {
  const email = "amanjain2691@gmail.com";
  const phoneNumber = "8087491938";

  return (
    <section id="contact">
      <h1>My Contact</h1>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        Phone: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </p>
    </section>
  );
};

export default Contact;
