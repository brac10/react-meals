import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { PageHeader, Banner, Section, styles, Title } from "../utils"
import img from "../images/bcg/contactBcg.jpeg"
export default function about() {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageHeader img={img}>
        <Banner title="contact us" subtitle="let's keep in touch" />
      </PageHeader>
      <Section>
        <Title message="Reservations" title="Join our mailing list" />
        <ContactWrapper>
          <p className="text" align="center">
            Voted #1 best place to stay on Santa Fe Trail, 3 years in a row
          </p>
        </ContactWrapper>
      </Section>
    </Layout>
  )
}
const ContactWrapper = styled.div`
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
