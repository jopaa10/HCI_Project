import React from 'react'

//react bootstrap
import {Col, Row} from 'react-bootstrap'

//gatsby img
import Img from 'gatsby-image'

//react reveal
import Fade from 'react-reveal'

const TemplateRight = (props) => {

    return(

        <>
        <Fade right>
            <Row style={{padding: '0 15px 50px 15px'}}>

                <Col xs={10} sm={8} md={5} lg={4} className="desktopViewPhoto" style={{paddingTop: '150px', paddingRight: '50px', marginRight: '30px'}}>
                    <Img fluid={props.imgFluid} alt=""  style={{boxShadow: '34px -31px 9px 3px rgba(192,215,181,1)', borderRadius: '30px'}}/>
                </Col>

                <Col xs={12} sm={12} md={6} lg={7} style={{backgroundColor: '#ededed', height: 'fit-content', borderRadius: '50px', paddingBottom: '50px'}}>
                    
                    <Row>
                        <Col xs={12} sm={12} md={12} style={{textAlign: 'center', paddingTop: '100px'}}>
                            <h3 className="titleTips">{props.title}</h3>
                        </Col>
                    </Row>
                    <Row style={{justifyContent: 'center'}}>
                        <Col xs={12} sm={12} md={10} lg={6} style={{paddingTop: '50px'}}>
                            <p style={{textAlign: 'justify', padding: '0 20px'}}>{props.description}</p>
                        </Col>
                    </Row>
                </Col>

                <Col xs={10} sm={8} md={5} lg={4} className="mobileViewPhoto" style={{paddingTop: '150px', paddingLeft: '60px', marginLeft: '30px'}}>
                    <Img fluid={props.imgFluidLeft} alt=""  style={{boxShadow: '-34px -31px 9px 3px rgba(192,215,181,1)', borderRadius: '30px'}}/>
                </Col>

            </Row>
        </Fade>
        </>
    )
}

export default TemplateRight