import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

//bootstrap

import {Col, Row, Container, Card} from 'react-bootstrap'

//gatsby Bgimage
import BackgroundImage from 'gatsby-background-image'

//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCamera, faEye, faHourglassHalf} from '@fortawesome/free-solid-svg-icons'

//animation
import { Fade } from "react-awesome-reveal"

const CreateAwesomePhotos = () =>{

    const data = useStaticQuery(graphql`
        query{
    
            bgImage: file(relativePath: {eq: "wallpaperKids.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 2000, maxHeight: 3000, quality: 100){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    
    `)


    return(
        <BackgroundImage fluid={data.bgImage.childImageSharp.fluid} className="banner bannerBg" style={{backgroundPositionY: '35%', backgroundAttachment: 'initial'}}>
            <section >
                
                <Container>

                        <Row>
                            <Col xs={12} style={{textAlign: 'center'}}>
                                <h3 style={{fontFamily: "josefin sans", fontSize: "2.5em", lineHeight: "1.5", color: 'white'}}>Create Awesome Pro Photos</h3>
                            </Col>
                        </Row>
                    
                        <Row style={{textAlign: '-webkit-center'}}>
                            <Col md={12} lg={4} style={{paddingBottom: '10px'}}>
                                <Card style={{ width: '14rem', boxShadow: '0 0 45px rgba(0,0,0,.1)' }}>
                                <Card.Body>
                                    <FontAwesomeIcon style={{width: '45px', height: '45px'}} icon={faCamera}/>
                                    <Card.Title style={{fontFamily: 'Josefin Sans', fontWeight: '400', lineHeight: '1.5'}}>Camera</Card.Title>
                                    <Card.Text style={{fontFamily: 'Josefin Sans', fontWeight: '400', lineHeight: '1.5'}}>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col md={12} lg={4} style={{paddingBottom: '10px'}}>
                                <Card style={{ width: '14rem', boxShadow: '0 0 45px rgba(0,0,0,.1)' }}>
                                <Card.Body>
                                    <FontAwesomeIcon style={{width: '45px', height: '45px'}} icon={faEye}/>
                                    <Card.Title style={{fontFamily: 'Josefin Sans', fontWeight: '400', lineHeight: '1.5'}}>Eye for details</Card.Title>
                                    <Card.Text style={{fontFamily: 'Josefin Sans', fontWeight: '400', lineHeight: '1.5'}}>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col md={12} lg={4} style={{paddingBottom: '10px'}}>
                                <Card style={{ width: '14rem', boxShadow: '0 0 45px rgba(0,0,0,.1)' }}>
                                    <Card.Body>
                                        <FontAwesomeIcon style={{width: '45px', height: '45px'}} icon={faHourglassHalf}/>
                                        <Card.Title style={{fontFamily: 'Josefin Sans', fontWeight: '400', lineHeight: '1.5'}}>Time for practice</Card.Title>
                                        <Card.Text style={{fontFamily: 'Josefin Sans', fontWeight: '400', lineHeight: '1.5'}}>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                     

                    </Container>  

                    <Container className="banner" style={{backgroundColor: 'transparent', paddingTop: '0px'}}>

                        
                    </Container>

             </section>

     </BackgroundImage>
    

    )
}

export default CreateAwesomePhotos