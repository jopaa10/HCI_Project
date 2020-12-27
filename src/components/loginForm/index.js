import React, {useState, useEffect} from 'react'
import {graphql, useStaticQuery} from 'gatsby'

//react bootstrap
import {Row, Col, Container, Form, Button, InputGroup, Spinner} from 'react-bootstrap'

import BackgroundImage from 'gatsby-background-image'

//fontawesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserAlt, faLock} from '@fortawesome/free-solid-svg-icons'

//sign up form
import SignUp from '../signupForm'

const LoginForm = () => {

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
        
        const [showSignUp, setSignUp] = useState(false)
        const showForm = () => {
           
            setSignUp(!showSignUp)
        }

    if(showSignUp === true)
    {
        return <SignUp />
    }
    else{

    return(
        <>
        <BackgroundImage fluid={data.bgImage.childImageSharp.fluid} alt="">
            <section className="banner"  style={{backgroundColor: 'transparent', paddingTop: '200px', height: 'fit-content'}}>
                <Container>
                    <Row style={{paddingTop: '50px', justifyContent: 'center'}}>
                        <Col xs={12} style={{display: 'flex', justifyContent: 'center', textAlign: 'center', height: 'fit-content'}}>
                            <Row className="mobLogin" style={{backgroundColor: 'rgb(196, 196, 196, 0.5)', width: '450px', height: '550px', justifyContent: 'center', borderRadius: '25px 25px 25px 25px', boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.32)'}}>
                                <Form className="signupForm" style={{width: '400px' ,paddingTop: '70px'}}>
                                    <Row>
                                        <Col xs={12} style={{textAlign: 'center', fontFamily: 'Josefin Sans', fontWeight: '700', lineHeight: '55px', fontSize: '55px'}}>Log In</Col>
                                    </Row>
                                    <InputGroup style={{marginTop: '40px', paddingLeft: '40px', width: '90%'}}> 
                                        <FontAwesomeIcon icon={faUserAlt} style={{marginTop: '15px', position: 'absolute', left: '50px', zIndex: '1'}}/> 
                                        <Form.Control type="email" name="email" className="inputFieldsLog" placeholder="Enter email" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0'}}/> 
                                    </InputGroup>
                                    <InputGroup style={{marginTop: '40px', paddingLeft: '40px', width: '90%'}}>
                                        <FontAwesomeIcon icon={faLock} style={{marginTop: '15px', position: 'absolute', left: '50px', zIndex: '1'}}/> 
                                        <Form.Control type="password" name="password" className="inputFieldsLog" placeholder="Password" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0'}}/>
                                    </InputGroup>
                                
                                    <Button variant="primary" type="submit"  style={{marginTop: '25px', backgroundColor: 'black', borderColor: 'black'}}>
                                        login
                                    </Button>
                                    <Row style={{marginTop: '30px'}}>
                                        <Col xs={12} style={{textAlign: 'center', fontFamily: 'Josefin Sans', fontWeight: '400', lineHeight: '24px', fontSize: '24px'}}>Don't have an account?</Col>
                                    </Row>
                                    <Row style={{marginTop: '20px'}}>
                                        <Col xs={12} style={{textAlign: 'center', fontFamily: 'Josefin Sans', fontWeight: '400', lineHeight: '24px', fontSize: '20px', color: 'blue', cursor: 'pointer'}} onClick={showForm}>Sign up now</Col>
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

export default LoginForm