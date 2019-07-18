import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { PageHeader, Banner, Section, styles, Title } from "../utils"
import img from "../images/bcg/aboutBcg.jpeg"
export default function about() {
  return (
    <Layout>
      <SEO title="About" />
      <PageHeader img={img}>
        <Banner title="about us" subtitle="a little about us" />
      </PageHeader>
      <Section>
        <Title message="Any questions" title="It's Carrollton" />
        <AboutWrapper>
          <p className="text" align="center">
            Not much to add to what you're probably already thinking.
          </p>
        </AboutWrapper>
      </Section>
    </Layout>
  )
}
const AboutWrapper = styled.div`
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
