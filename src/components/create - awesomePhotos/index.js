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
                        ...GatsbyImageSharpFluid_withWebp_noBase64
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
                                        The first piece of equipment you need to start a photography is a good camera. There are plenty of options out there to consider.
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
                                        Its an incredibly important asset to have. An eye for photography is an instinct that tells you the most effective use of your surroundings.
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
                                            If you ask a photographer how to take great photos, you are going to hear, “Practice,practice, practice!”
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