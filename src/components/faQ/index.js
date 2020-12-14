import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

//react bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//page to show text
import ShowText from './templateQuestions'

//gatsby image
import BackgroundImage from 'gatsby-background-image'

//animation
import { Fade } from "react-awesome-reveal"

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
                                            title={'Što je fotografija?'}
                                            content={'Lorem ipsum lorem lorem'}
                                        />
                                    
                                        <ShowText 
                                            title={'Što je fotografija?'}
                                            content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled'}
                                        />
                                    
                                        <ShowText 
                                            title={'Što je fotografija?'}
                                            content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}
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