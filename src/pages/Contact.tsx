function Contact() {
  return(
  <section className="contact">
    <div className="contact-header">
      <h2>For more information</h2>
      <h1>CONTACT US</h1>
</div>
      <div className="contact-body">
        <img src="src/images/contact.jpg"></img>
      <form className="contact-form">
        <label>Full Name</label>
        <input type="text" placeholder="Full name"></input>
        <label>Email address</label>
        <input type="text" placeholder="Enter your email"></input>
        <label>Feedback</label>
        <textarea placeholder="Give your feedback"></textarea>
      </form>
    </div>

    



  </section>
  )
}

export default Contact;