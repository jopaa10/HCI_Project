import React, {useRef} from 'react'

//react bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//fontawesome

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

import useVisibilitySensor from "@rooks/use-visibility-sensor"

//button to top
import ButtonToTop from '../buttonToTop/index'

const Footer = () => {

    const footerNode = useRef(null)
    
    const { isVisible, visibilityRect } = useVisibilitySensor(footerNode, {
        intervalCheck: true,
        scrollCheck: false,
        resizeCheck: true,
        partialVisibility: true
    })

    return(
       
        <>
        <footer ref={footerNode}>
            <section className="banner" >
            {isVisible ? <ButtonToTop color={'white'} /> : isVisible === null ? "Null" : <ButtonToTop color={'black'} />}
                <Container>
                    <Row>
                        <Col xs={12} sm={4} style={{color: 'white', textAlign: 'center'}}>
                            <Row style={{justifyContent: 'center'}}>
                                <h4 style={{fontFamily: 'josefin sans', lineHeight: '1.5'}}>About Us</h4>
                            </Row>

                        </Col>
                        <Col xs={12} sm={4} style={{color: 'white', textAlign: 'center'}}>
                            <Row style={{justifyContent: 'center'}}>
                                <h4 style={{fontFamily: 'josefin sans', lineHeight: '1.5'}}>Useful Links</h4>
                            </Row>
                            
                        </Col>
                        <Col xs={12} sm={4} style={{color: 'white', textAlign: 'center'}}>
                            <Row style={{justifyContent: 'center'}}>
                                <h4 style={{fontFamily: 'josefin sans', lineHeight: '1.5'}}>Follow Us</h4>
                            </Row>
                            <Row>
                                <Col style={{alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={faFacebook} style={{marginRight: '20px', width: '30px', height: '30px'}}/>
                                    <FontAwesomeIcon icon={faInstagram} style={{width: '30px', height: '30px'}}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '20px'}}> 
                        <Col xs={12} style={{color: 'white', textAlign: 'center'}}>
                        © {new Date().getFullYear()}, Built with
                                {` `}
                        <a href="https://www.gatsbyjs.com" style={{color: 'white'}}>Gatsby</a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </footer>
        </>
    )
}

export default Footer