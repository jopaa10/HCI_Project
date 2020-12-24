import React from 'react'

//bootstrap
import {Container, Col, Row} from 'react-bootstrap'

//gatsby image
import BackgroundImage from 'gatsby-background-image'

//react fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'

const Banner = ((props) => {

    return(
        <>
        <BackgroundImage fluid={props.bgImage} className="bgImageRes" style={{height: "600px", paddingTop: '50px', marginTop: '90px'}}>
            <Container fluid className="banner" style={{backgroundColor: 'transparent'}}>
                <Container>
                    <Row className={props.className}>
                        <Col sm={5} xs={7} md={6} lg={4}>
                            <h3 className="bannerTitle" style={{color: props.color, lineHeight: '2', fontFamily: 'josefin sans'}}> {props.title} </h3>
                            <h3 className="bannerTitle" style={{color: props.color, lineHeight: '2', textAlign: 'center', fontFamily: 'josefin sans'}}>{props.author}</h3>
                        </Col>
                        <Col sm={12} xs={12}>
                            
                        </Col>
                    </Row>
                    
                    <Row className="arrowDownIcon" style={{justifyContent: 'center', paddingTop: '100px'}}>
                        <FontAwesomeIcon className="showArrowDouble" icon={faAngleDoubleDown} style={{color: 'white', height: 'max-content', width: '20px'}}/>
                    </Row>
                </Container>
            </Container>
        </BackgroundImage>
    </>
        )
    }   
)

export default Banner