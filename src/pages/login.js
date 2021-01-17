import React, {useState, useEffect} from 'react'
import {navigate} from 'gatsby'

//import header, footer
import Header from '../components/header'
import Footer from '../components/footer'

//page components
import LoginLayout from '../components/loginForm'

//head document
import Head from '../components/head'

//firebase
import {auth, db} from '../components/firebase/'

//react bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//fontawesome 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUnlock} from '@fortawesome/free-solid-svg-icons'

const Login = () => {

    const [displayBlog] = useState('none')
    const [user, setUser] = useState()

    const [counter, setCounter] = useState(5)

    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
        
            if (currentUser) {
                setUser(true)
            }
            else{
                setUser(false)
            }
        })

        const timeout = setTimeout(() => {
            setCounter(counter - 1);
          }, 1000)

        return () => {

            clearTimeout(timeout)
        }

    },)

    if (user === true) {
        setTimeout(() => {
            navigate('/')
        }, 4000)

        return (
            <Container>
                <Row style={{justifyContent: 'center', paddingTop: '400px'}}>
                    <FontAwesomeIcon icon={faUnlock} style={{width: '100px', height: '100px'}}/>
                </Row>
                <Row style={{justifyContent: 'center', paddingTop: '20px'}}>
                    <Col xs={12} style={{textAlign: 'center'}}>
                        <p>
                            You are already logged in! <br className="brElement"/>
                            <strong> Redirected in {counter} </strong>
                        </p>
                    </Col>
                </Row>
            </Container>
        )  
    }

    return(
        <> 

        <Head 
            title = {"Login"}
            keywords = { ["camera", "photo", "images", "login", "photography", "sign up", "form"]}
            description = { "Create account"}
        />
          
        <main>
            <Header
                display={displayBlog}
            />
            <LoginLayout />
            <Footer />
        </main>

        </>
    )
}

export default Login