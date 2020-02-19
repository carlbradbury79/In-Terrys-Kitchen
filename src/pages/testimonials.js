import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "styled-components"

const TextContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;

  p,
  h1,
  h2 {
    padding: 0 20px 0 20px;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.6;
  }
`

const testimonials = () => (
  <Layout>
    <SEO title="Testimonials" />
    <TextContainer>
      <p>
        “Taking a class “In Terry’s Kitchen” is so much fun! Her technical
        expertise, super fresh ingredients and fun personality always make for a
        great time. I especially love the beautiful home setting, gourmet
        kitchen, pizza forno and stunning views. Her menus are inspired by
        extensive international travel and associations with top chefs and many
        dishes have become favorites in my house. If you have a chance to come
        to Terry’s Kitchen, do it! Bring your friends and you will have an
        amazing experience.” – Katie Price, Architect
      </p>
      <p>
        “Terry’s cooking classes are a luscious treat! Her love of cooking and
        teaching combine to create a warm, nurturing and fun atmosphere. Most of
        the time, I’m not an adventurous cook, but in Terry’s kitchen, I’ve
        ventured to make things I would have never considered like grilled heads
        of radicchio studded with Italian sausage, baked cardoons in a creamy
        parmesan sauce, and a fresh almond polenta cake drizzled with rosemary
        scented poached peaches. They were ALL delicious, and I came home ready
        to tackle these new recipes on my own. From Italian cuisine to French
        desserts and more, I highly recommend classes In Terry’s Kitchen.” –
        Louanne Klein, Training and Development Consultant
      </p>
      <p>
        “For my birthday my husband gave the amazing gift of a cooking class
        with Terry for me and seven of my friends. In advance of the class I
        worked with Terry to create the perfect class for my interests and needs
        at the time. I was about to host a French dinner for 20 in my home as a
        school fundraiser, so I wanted some instruction on basic French cooking.
        But, being a busy working mom, I was also interested in good everyday
        ideas for feeding the family. Terry was very accommodating and fun to
        work with. She was a wonder at coming up with an exceptional balanced
        menu, weaving in practical everyday tips and recipes.{" "}
      </p>
      <p>
        From the moment we entered her gorgeous kitchen and garden to the moment
        we left many hours later we were well-fed, enlightened, and, most of
        all, enamored by Terry’s warm and generous personality. Her hospitality
        is unsurpassed and her expertise in finding and working with fresh
        ingredients inspiring. We prepared a myriad of delights, from delicious
        pizzas loaded with fresh veggies in her outdoor pizza oven to a fabulous
        beurre blanc sauce that I have made several times since to many ooohs
        and aaahs. Terry’s classes are such a find. I can’t wait to see what
        else is cooking In Terry’s Kitchen.” – Selena Spain, Tech Writer
      </p>
    </TextContainer>
  </Layout>
)

export default testimonials
