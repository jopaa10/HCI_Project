import React, {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'

//react bootstrap
import {Row, Col, Container, Form, Button, InputGroup} from 'react-bootstrap'

import BackgroundImage from 'gatsby-background-image'

//fontawesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserAlt, faLock, faEnvelope, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

//import login
import Login from '../loginForm'

const SignUp = () => {

 const data = useStaticQuery( graphql`
        query{
            bgImage: file(relativePath: {eq: "loginTemp.jpg"}) {
                        childImageSharp {
                            fluid(quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            `
        )

        const [showLogin, setLogin] = useState(false)

        const showForm = () => {
            setLogin(true)
        }

        if(showLogin === true)
    {
        return <Login />
    }

    else
    {

    return(
        <>
        <BackgroundImage fluid={data.bgImage.childImageSharp.fluid} alt="">
            <section className="banner" style={{backgroundColor: 'transparent', paddingTop: '150px', height: 'fit-content', paddingBottom: '50px'}}>
                <Container>
                    <Row style={{paddingTop: '50px', justifyContent: 'center'}}>
                        <Col xs={12} style={{display: 'flex', justifyContent: 'center', textAlign: 'center', height: 'fit-content'}}>
                            <Row className="mobileSignUp" style={{backgroundColor: 'rgb(196, 196, 196, 0.5)', width: '500px', justifyContent: 'center', borderRadius: '20px 20px 20px 20px', boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.32)'}}>
                                <Form className="signupForm" style={{width: '400px', paddingTop: '30px'}}>
                                    <Row>
                                        <Col xs={12} style={{textAlign: 'center', fontFamily: 'Josefin Sans', fontWeight: '700', lineHeight: '55px', fontSize: '55px'}}>Sign Up</Col>
                                    </Row>
                                    <InputGroup className="inputGroup" style={{marginTop: '25px', paddingLeft: '40px', width: '90%'}}> 
                                        <FontAwesomeIcon icon={faUserAlt} className="fontawesomeIcon" style={{marginTop: '15px', position: 'absolute', left: '50px', zIndex: '1'}}/> 
                                        <Form.Control type="name"  name="name" className={"inputFields"}  placeholder="Enter Your name" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0'}}></Form.Control>
                                    </InputGroup>
                            
                                    <InputGroup className="inputGroup" style={{marginTop: '25px', paddingLeft: '40px', width: '90%'}}> 
                                        <FontAwesomeIcon icon={faUserAlt} className="fontawesomeIcon" style={{marginTop: '15px', position: 'absolute', left: '50px', zIndex: '1'}}/> 
                                        <Form.Control type="surname" name="surname" className="inputFields"  placeholder="Enter Your surname" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0'}}/> 
                                    </InputGroup>
                                   
                                    <InputGroup className="inputGroup" style={{marginTop: '25px', paddingLeft: '40px', width: '90%'}}> 
                                        <FontAwesomeIcon icon={faUserAlt} className="fontawesomeIcon" style={{marginTop: '15px', position: 'absolute', left: '50px', zIndex: '1'}}/> 
                                        <Form.Control type="nickname" name="nickname" className="inputFields" placeholder="Enter Your nickname" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0'}}/> 
                                    </InputGroup>
                                    
                                    <InputGroup className="inputGroup" style={{marginTop: '25px', paddingLeft: '40px', width: '90%'}}> 
                                        <FontAwesomeIcon icon={faEnvelope} className="fontawesomeIcon" style={{marginTop: '15px', position: 'absolute', left: '50px', zIndex: '1'}}/> 
                                        <Form.Control type="email" name="email" className="inputFields" placeholder="Enter email" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0'}}/> 
                                    </InputGroup>
                                   
                                    <InputGroup className="inputGroup" style={{marginTop: '25px', paddingLeft: '40px', width: '90%'}}>
                                        <FontAwesomeIcon icon={faLock} className="fontawesomeIcon" style={{marginTop: '15px', position: 'absolute', left: '50px', zIndex: '1'}}/> 
                                        <Form.Control type="password" name="password" className="inputFields"  placeholder="Password" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0'}}/>
                                    </InputGroup>
                                   
                                    <Button variant="primary" type="submit"  style={{marginTop: '25px', backgroundColor: 'black', borderColor: 'black'}}>
                                       signUp
                                    </Button>
                                    <Row style={{marginTop: '30px'}}>
                                        <Col xs={12} style={{textAlign: 'center', fontFamily: 'Josefin Sans', fontWeight: '400', lineHeight: '24px', fontSize: '24px'}}>Already have an account</Col>
                                    </Row>
                                    <Row style={{marginTop: '20px'}}>
                                        <Col xs={12} style={{textAlign: 'center', fontFamily: 'Josefin Sans', fontWeight: '400', lineHeight: '24px', fontSize: '20px', color: 'blue', cursor: 'pointer'}} onClick={showForm}>Log in now</Col>
                                    </Row>
                                </Form>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        
        </BackgroundImage>
        </>
    )
    }
}

export default SignUp