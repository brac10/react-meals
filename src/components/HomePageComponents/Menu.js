import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import Product from "./Product"
import { Link } from "gatsby"
export default function Menu() {
  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <ProductList>
        <StaticQuery
          query={graphql`
            {
              menu: allContentfulMenuItem {
                edges {
                  node {
                    name
                    price
                    id
                    ingredients
                    img {
                      fixed(width: 50, height: 50) {
                        ...GatsbyContentfulFixed_tracedSVG
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            const { edges: sweets } = data.menu
            return sweets.map(menu => {
              return <Product key={menu.node.id} product={menu.node} />
            })
          }}
        />
      </ProductList>
      <Link to="/menu/" style={{ textDecoration: "none" }}>
        <SectionButton style={{ margin: "2rem auto" }}> menu</SectionButton>
      </Link>
    </Section>
  )
}

export const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
