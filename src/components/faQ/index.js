import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

//react bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//page to show text
import ShowText from './templateQuestions'

//gatsby image
import BackgroundImage from 'gatsby-background-image'

const FaQ = () => {

    const data = useStaticQuery(graphql`
        query{
            bgImage: file(relativePath: {eq: "glassesWallpaper.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 2560, maxHeight: 1707, quality: 100){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `)

    return(
        <>
        
    <section>
        
        <BackgroundImage fluid={data.bgImage.childImageSharp.fluid} className="banner bannerBg">
            <Container>
    
                <Row className="questions">

                    <Col sm={8} xs={8}>
                       
                            <Row>
                                <Col xs={12} sm={8} style={{paddingTop: '20px', textAlign: 'center'}}>
                                    <h3 style={{fontFamily: "josefin sans", fontSize: "2em", lineHeight: "1.5"}}>FAQ</h3>
                                </Col> 
                            </Row>
                        
                            <Row>
                                <Col sm={8} xs={12} style={{alignItems: 'center'}}>
                                    <Row>
                                    
                                        <ShowText 
                                            title={'What is an aperture and how is it measured?'}
                                            content={'Aperture is simply the size of the “hole” in the lens that lets light through. The bigger the hole, the more light you are letting in. Aperture is also called the “f-stop”, and is represented by a number.'}
                                        />
                                    
                                        <ShowText 
                                            title={'What is ISO?'}
                                            content={'The ISO on each film roll lets us know how sensitive light is to the film, which is also known as film speed.'}
                                        />
                                    
                                        <ShowText 
                                            title={'How does the exposure triangle work?'}
                                            content={'Shutter speed, aperture, and ISO are part of the Exposure Triangle. The exposure triangle is a common way of associating these three variables that determine the exposure of a photograph'}
                                        />
                                    </Row>
                                </Col>
                            </Row>
                       
                    </Col>
                </Row>
            
            </Container>
                
        </BackgroundImage>
        </section>

        </>
    )
}

export default FaQ