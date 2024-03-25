<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>contact-us</title>
  <link rel="stylesheet" href="contact-css.css" />
  <h3>Contact Us</h3>
  <div className="container">
    <form>
      <input type="text" id="name" placeholder="Your Name" required="" />
      <br />
      <br />
      <input type="email" id="email" placeholder=" Your E-Mail" required="" />
      <br />
      <br />
      <input
        type="tel"
        id="telno"
        placeholder="Your Contact Number"
        required=""
      />
      <br />
      <br />
      <textarea
        id="message"
        rows={5}
        placeholder="Your Message"
        required=""
        defaultValue={""}
      />
      <br />
    
      <input type="submit" defaultValue="Send" />
    </form>
  </div>
</>