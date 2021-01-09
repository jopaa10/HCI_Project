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
import PhotoInfo from '../carousel - homepage/index'
import CreateAwesomePhotos from "../create - awesomePhotos"
import ImageSlider from '../slider - homepage/index'
import InfoForUsers from "../infoForUsers - homepage"
import FaQ from '../faQ/index'
import Footer from "../footer"

import Head from '../head'

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

      <Head 
        title = {"Home"}
        keywords = { ["camera", "photo", "images", "slider", "photography"]}
        description = { "Create awesome photos"}
      />
      
      <main>
          <Header />
          <Banner
                color={'white'} 
                title={'"Photography is the story I fail to put into words"'}
                author={'Denise Sparks'}
                bgImage={data.bgImage.childImageSharp.fluid}
                className={'quotePhoto'}
                xs={'7'}
          />
          <PhotoInfo />
          <CreateAwesomePhotos />
          <ImageSlider />
          <InfoForUsers />
          <FaQ />
          <Footer />
      </main>
    </>
  )
}

export default Layout
