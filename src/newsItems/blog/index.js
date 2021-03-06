/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import {graphql, Link} from 'gatsby'

import Header from "../../components/header"
import Footer from '../../components/footer'

//pages
import {Row, Col, Container} from 'react-bootstrap'

//gatsby image
import Img from 'gatsby-image'

//page components
import Title from '../../components/title'

//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

export default function NewsLayout({
    data, // this prop will be injected by the GraphQL query below.
  }) {


    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    const [displayNews] = useState('none')
  
    return (
        <>
     
          <Header
            displayNews={displayNews}
            to={frontmatter.slug}
          />
            <main>

            <section className='banner' style={{backgroundColor: 'black', paddingBottom: '0'}}>
                <Container>
                    <Row style={{justifyContent: 'center'}}>
                        <Col xs={12} sm={12} md={12} style={{paddingTop: '100px'}}>
                            <Title 
                                title={frontmatter.title} 
                                color={'white'}
                                className="templateNewsTitle"
                            />
                        </Col>
                        <Col xs={12} sm={12} md={12} style={{paddingTop: '50px', maxWidth: '80%'}}>
                            <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} alt="newsPhoto" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#000000" fill-opacity="1" d="M0,32L60,64C120,96,240,160,360,154.7C480,149,600,75,720,64C840,53,960,107,1080,117.3C1200,128,1320,96,1380,80L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

            
                <section className="banner" style={{backgroundColor: 'white', paddingTop: '0'}}>
                    <Container>
                        <Row className="blog-post-container" style={{justifyContent: 'center'}}>
                            <Row className="blog-post" style={{maxWidth: '80%'}}>
                                <Col xs={12} sm={12} md={12}>
                                    <h4 style={{fontFamily: "josefin sans", fontSize: "1.2em", lineHeight: "1.5"}}>{frontmatter.date}</h4>
                                </Col>
                                <Col xs={12} sm={12} md={12} style={{textAlign: 'left'}}>
                                    <p xs={12} sm={12} md={12}
                                    className="blog-post-content"
                                    style={{lineHeight: '1.5', fontFamily: "josefin sans", fontSize: "1.25em"}}
                                    dangerouslySetInnerHTML={{ __html: html }}
                                    />
                                </Col>
                            </Row>
                        </Row>
                        <Row>
                            <p style={{lineHeight: '2', fontFamily: "josefin sans", fontSize: "1.25em", marginLeft: '15px'}}>
                                <Link to='/news/' style={{color: 'black'}} className="returnBackBtn"><FontAwesomeIcon icon={faArrowLeft} />Go back to News</Link>
                            </p>
                        </Row>
                    </Container>
                </section>
           
            </main>
          <Footer />
        </>
      )
  }

  export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
      }
    }
  }
`
