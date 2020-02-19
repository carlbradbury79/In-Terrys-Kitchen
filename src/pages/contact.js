import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "styled-components"

const TextContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-top: 50px;

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
  }
`

const Contact = styled.div`
  box-sizing: border-box;
  padding: 20px;
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }

  form label {
    display: block;
  }

  form p {
    margin: 10px;
    display: block;
  }

  form .full {
    grid-column: 1/3;
  }

  form button,
  form input,
  form textarea {
    width: 90%;
    border: 1px solid var(--terry-four);
    padding: 1rem;
  }

  form button {
    background: var(--terry-five);
    border: 0;
    text-transform: uppercase;
    color: white;
  }

  form button:hover,
  form button:focus {
    background: var(--terry-four);
    transition: background-color 2s ease-out;
  }
`

const contact = () => (
  <Layout>
    <SEO title="Contact" />
    <TextContainer>
      <div>
        <p>
          I value your interest in my website and my cooking classes so if I’ve
          missed something that you need to know before signing up or have
          comments or suggestions please take a moment to fill in the contact
          form and send it on.
        </p>
        <p>
          I check this page often so do know that I’ll be happy to respond
          quickly. If you’d prefer to receive a phone call please include your
          number (area code+number) and a good time to call and I’ll call you
          back!
        </p>
      </div>
      <Contact>
        <form
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
          <p>
            <label>Name</label>
            <input type="text" name="name" id="name" />
          </p>
          <p>
            <label>Email</label>
            <input type="email" name="email" id="email" />
          </p>
          <p>
            <label>Subject</label>
            <input type="text" name="subject" id="subject" />
          </p>
          <p>
            <label className="full">Message</label>
            <textarea name="message" id="message" rows="5" />
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
          {/* <input type="reset" value="Clear" /> */}
        </form>
      </Contact>
    </TextContainer>
  </Layout>
)

export default contact
