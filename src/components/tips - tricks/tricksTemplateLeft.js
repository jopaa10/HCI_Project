import React from 'react'

//react bootstrap
import {Col, Row} from 'react-bootstrap'

//gatsby img
import Img from 'gatsby-image'

const TemplateLeft = (props) => {

    return(

        <>
        <Row style={{padding: '0 15px 50px 15px'}}>

            <Col xs={12} sm={12} md={6} lg={6} style={{backgroundColor: '#ededed', height: 'fit-content', borderRadius: '50px', paddingBottom: '50px'}}>
                
                <Row>
                    <Col xs={12} sm={12} md={12} style={{textAlign: 'center', paddingTop: '100px'}}>
                        <h3 className="titleTips">{props.title}</h3>
                    </Col>
                </Row>
                <Row style={{justifyContent: 'center'}}>
                    <Col xs={12} sm={12} md={10} lg={10} style={{paddingTop: '50px'}}>
                        <p style={{textAlign: 'left', padding: '0 20px'}}>{props.description}</p>
                    </Col>
                </Row>
            </Col>

            <Col xs={10} sm={8} md={5} lg={4} className="mobViewLeftTemp" style={{paddingTop: '150px', paddingLeft: '50px', marginLeft: '40px'}}>
                <Img fluid={props.imgFluid} alt="" style={{boxShadow: props.boxShadow, borderRadius: '30px'}} />
            </Col>

        </Row>
        </>
    )
}

export default TemplateLeft