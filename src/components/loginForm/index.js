import React, {useState, useEffect} from 'react'
import {graphql, useStaticQuery, navigate} from 'gatsby'

//react bootstrap
import {Row, Col, Container, Form, Button, InputGroup, Spinner} from 'react-bootstrap'

import BackgroundImage from 'gatsby-background-image'

//fontawesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserAlt, faLock} from '@fortawesome/free-solid-svg-icons'

//sign up form
import SignUp from '../signupForm'

//firebase
import {auth, db} from '../firebase/'

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
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [borderColor, setBorderColor] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(false)
    const [processing, setProcessing] = useState(false)
    const [user, setUser] = useState([])

    const showForm = () => {
        
        setSignUp(!showSignUp)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const getUserData = (uid) => {
        db.ref("users/" + uid).once("value", (snap) => {
        console.log(snap.val())
        setUser(snap.val())
        })
    }

    const handleLogin = async(e) => {

        e.preventDefault()
        setProcessing(true)
       
        await auth
        .signInWithEmailAndPassword(email, password)
        .then(async () => {
            console.log("success")
            navigate('/')
            setSignUp(false)
            setProcessing(false)
            setError(false)
            setBorderColor({
                email: 'none',
                password: 'none'
            })
        })
        .catch((err) => {

            if(err.code === 'auth/invalid-email')
            {
                setError('The email is not correct')
                setBorderColor({email: 'red'})
            }

            else if(err.code === 'auth/wrong-password')
            {
                setError('The password is not correct')
                setBorderColor({password: 'red'})
            }
            else if(err.code === 'auth/user-not-found')
            {
                setError('User is not found with that email and password. Please try again!')
                setBorderColor({email: 'red', password: 'red'})
            }

            setProcessing(false)
            console.log(err)
        })
        }


    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
            getUserData(currentUser.uid)
            }
        })


    }, [])

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
                                        <Form.Control type="email" name="email" className="inputFieldsLog" value={email} onChange={handleEmail} placeholder="Enter email" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0'}}/> 
                                    </InputGroup>
                                    {(error === 'The email is not correct') && (<Row><Col style={{color: 'red'}}>{error}</Col></Row>)}
                                    <InputGroup style={{marginTop: '40px', paddingLeft: '40px', width: '90%'}}>
                                        <FontAwesomeIcon icon={faLock} style={{marginTop: '15px', position: 'absolute', left: '50px', zIndex: '1'}}/> 
                                        <Form.Control type="password" name="password" className="inputFieldsLog" value={password} onChange={handlePass} placeholder="Password" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0'}}/>
                                    </InputGroup>
                                    {(error ==='The password is not correct') && (<Row><Col style={{color: 'red'}}>{error}</Col></Row>)}
                                    {(error ==='User is not found with that email and password. Please try again!') && (<Row><Col style={{color: 'red'}}>{error}</Col></Row>)}
                                    <Button variant="primary" type="submit" onClick={handleLogin} style={{marginTop: '25px', backgroundColor: 'black', borderColor: 'black'}}>
                                        {processing ? (
                                            <Spinner animation="border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </Spinner>) 
                                            : 
                                        'Login'}
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