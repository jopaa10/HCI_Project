import React from "react"
import SEO from "../seo"

import {Link, useStaticQuery, graphql} from 'gatsby'

import {Row, Container, Button} from 'react-bootstrap'
import BackgroundImage from "gatsby-background-image"

const NotFoundPage = () => {
  
    const data = useStaticQuery(graphql`
    query{
        bgImage: file(relativePath: {eq: "camera-404(1).png"}){
            childImageSharp{
                fluid(maxHeight: 1500){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`)

    return (
    
        <BackgroundImage fluid={data.bgImage.childImageSharp.fluid} style={{marginTop: '8%'}}> 
            <section className="banner" style={{backgroundColor: 'transparent', height: '700px'}}>
                <Container style={{paddingTop: '120px'}}>
                    <SEO title="404: Not found" />
                    <Row style={{height: '250px'}}></Row>
                    <Row style={{justifyContent: 'center'}}>
                        <Button type="primary" style={{backgroundColor: 'black', borderColor: 'black'}}><Link to='/' style={{color: 'white'}}> Go back to Homepage </Link></Button>
                    </Row>
                </Container>
            </section>
        </BackgroundImage>
    )
}

export default NotFoundPage
