import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const contact = () => (
  <Layout>
    <SEO title="Contact" />
    <p>
      I value your interest in my website and my cooking classes so if I’ve
      missed something that you need to know before signing up or have comments
      or suggestions please take a moment to fill in the contact form and send
      it on.
    </p>
    <p>
      I check this page often so do know that I’ll be happy to respond quickly.
      If you’d prefer to receive a phone call please include your number (area
      code+number) and a good time to call and I’ll call you back!
    </p>

    <form
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="bot-field" />
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
  </Layout>
)

export default contact
