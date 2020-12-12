/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import {useStaticQuery, graphql} from 'gatsby'

import Header from "../header/index"
import "../layout.css"

//pages
import Banner from '../banner/index'

const Layout = () => {

  const data = useStaticQuery(graphql`
    query{
        bgImage: file(relativePath: {eq: "camera-wall.jpg"}){
            childImageSharp{
                fluid(maxWidth: 2000, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                }
            } 
        }
    `)
  
  return (
    <>
      <Header />
      <Banner
            color={'white'} 
            title={'"Photography is the story I fail to put into words"'}
            author={'Denise Sparks'}
            bgImage={data.bgImage.childImageSharp.fluid}
          />

    </>
  )
}

export default Layout