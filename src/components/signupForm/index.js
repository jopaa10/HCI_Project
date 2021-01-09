import React, {useState} from 'react'
import {graphql, useStaticQuery, navigate} from 'gatsby'

//react bootstrap
import {Row, Col, Container, Form, Button, InputGroup} from 'react-bootstrap'

import BackgroundImage from 'gatsby-background-image'

//fontawesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserAlt, faLock, faEnvelope, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

//import login
import Login from '../loginForm'

//firebase
import {auth, db} from '../firebase/'

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

    //signu up form

    const [user, setUser] = useState({
        name: "",
        surname: "",
        nickname: "",
        email: "",
        password: ""
      })

    const handleChangeName = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleChangeSurname = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleChangeNickname = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleChangeEmail = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleChangePass = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const [processing, setProccesing] = useState(false)
    const [error, setError] = useState(false)
    const [borderColor, setBorderColor] = useState({
        name: '',
        surname: '',
        nick: '',
        email: '',
        pass: ''
    })

    const handleReg = (e) => {

    e.preventDefault()

    setProccesing(true)

    if(user.name === '')
    {
        setError('Name is not correct or written')
        setBorderColor({name: 'red'})
        setProccesing(false)
    }

    else if(user.surname === '')
    {
        setError('Surname is not correct or written')
        setBorderColor({name: '', surname: 'red'})
        setProccesing(false)
    }

    else if(user.nickname === '')
    {
        setError('Nickname is not correct or written')
        setBorderColor({name: '', surname: '', nick: 'red'})
        setProccesing(false)
    }

    else
    {
        auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((result) => {
            result.user.updateProfile({
            displayName: user.nickname
            })
            db.ref("users/")
            .child(result.user.uid)
            .set({
                id: result.user.uid,
                name: user.name,
                surname: user.surname,
                nickname: user.nickname,
                email: user.email,
                password: user.password
            })

            .finally(() => {
                setUser({ name: user.name, surname: user.surname })
                setError(false)
                setLogin(false)
                navigate('/user/')
                setProccesing(false)
            })
        })

        .catch((err) => {
            console.log(err)
            
            if((err && user.name) === '' )
            {
                setError('Name is not correct or written')
                setBorderColor('red')
            }

            else if(err.code === 'auth/invalid-email')
            {
                setError('The email is not correct')
            }

            else if(err.code === 'auth/weak-password')
            {
                setError('The password must be at least 6 characters')
            }
            else if(err.code === 'auth/user-not-found')
            {
                setError('User is not found with that email and password. Please try again!')
            }

            
                setProccesing(false)
            })
        }
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
                                        <Col xs={12} className="signUpTitle">Sign Up</Col>
                                    </Row>
                                    <InputGroup className="inputGroup" style={{marginTop: '25px', paddingLeft: '40px', width: '90%'}}> 
                                        <FontAwesomeIcon icon={faUserAlt} className="fontawesomeIcon" style={{marginTop: '15px', position: 'absolute', left: '50px', zIndex: '1'}}/> 
                                        <Form.Control type="name"  name="name" className={"inputFields"} value={user.name} onChange={handleChangeName}  placeholder="Enter Your name" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0', borderColor: borderColor.name}}></Form.Control>
                                    </InputGroup>
                                    {(error ==='Name is not correct or written') && (<Row style={{color: 'red'}}><Col>{error}</Col></Row>)}
                                    <InputGroup className="inputGroup" style={{marginTop: '25px', paddingLeft: '40px', width: '90%'}}> 
                                        <FontAwesomeIcon icon={faUserAlt} className="fontawesomeIcon" style={{marginTop: '15px', position: 'absolute', left: '50px', zIndex: '1'}}/> 
                                        <Form.Control type="surname" name="surname" className="inputFields" value={user.surname} onChange={handleChangeSurname}  placeholder="Enter Your surname" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0', borderColor: borderColor.surname}}/> 
                                    </InputGroup>
                                    {(error ==='Surname is not correct or written') && (<Row style={{color: 'red'}}><Col>{error}</Col></Row>)}
                                    <InputGroup className="inputGroup" style={{marginTop: '25px', paddingLeft: '40px', width: '90%'}}> 
                                        <FontAwesomeIcon icon={faUserAlt} className="fontawesomeIcon" style={{marginTop: '15px', position: 'absolute', left: '50px', zIndex: '1'}}/> 
                                        <Form.Control type="nickname" name="nickname" className="inputFields" value={user.nickname} onChange={handleChangeNickname} placeholder="Enter Your nickname" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0', borderColor: borderColor.nick}}/> 
                                    </InputGroup>
                                    {(error ==='Nickname is not correct or written') && (<Row style={{color: 'red'}}><Col>{error}</Col></Row>)}
                                    <InputGroup className="inputGroup" style={{marginTop: '25px', paddingLeft: '40px', width: '90%'}}> 
                                        <FontAwesomeIcon icon={faEnvelope} className="fontawesomeIcon" style={{marginTop: '15px', position: 'absolute', left: '50px', zIndex: '1'}}/> 
                                        <Form.Control type="email" name="email" className="inputFields" value={user.email} onChange={handleChangeEmail} placeholder="Enter email" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0', borderColor: borderColor.email}}/> 
                                    </InputGroup>
                                    {(error ==='The email is not correct') && (<Row style={{color: 'red'}}><Col>{error}</Col></Row>)}
                                    <InputGroup className="inputGroup" style={{marginTop: '25px', paddingLeft: '40px', width: '90%'}}>
                                        <FontAwesomeIcon icon={faLock} className="fontawesomeIcon" style={{marginTop: '15px', position: 'absolute', left: '50px', zIndex: '1'}}/> 
                                        <Form.Control type="password" name="password" className="inputFields" value={user.password} onChange={handleChangePass}  placeholder="Password" style={{paddingLeft: '40px', borderRadius: '5px', zIndex: '0', borderColor: borderColor.pass}}/>
                                    </InputGroup>
                                    {(error === 'The password must be at least 6 characters') && (<Row style={{color: 'red'}}><Col>{error}</Col></Row>)}
                                    <Button variant="primary" className="submitButton" type="submit" onClick={handleReg} style={{marginTop: '25px', backgroundColor: 'black', borderColor: 'black'}}>
                                        {processing ? 'Checking credentials...' : 'Sign Up'}
                                    </Button>
                                    <Row style={{marginTop: '30px'}}>
                                        <Col xs={12} className="signupDesc">Already have an account</Col>
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