import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { PageHeader, Banner, Section, styles, Title } from "../utils"
import img from "../images/bcg/menuBcg.jpeg"
export default function about() {
  return (
    <Layout>
      <SEO title="Menu" />
      <PageHeader img={img}>
        <Banner title="our menu" subtitle={`let's dig in`} />
      </PageHeader>
       <Section>
        <Title message="Questions" title="Chef is always in" />
        <MenuWrapper>
          <p className="text" align="center">
            Breakfast: 6am - 12pm * Lunch: 1pm - 4pm  * Dinner: 5pm - 10pm
          </p>
        </MenuWrapper>
      </Section>
    </Layout>
  )
}
const MenuWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2em;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
