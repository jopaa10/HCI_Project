import React, {useState, useEffect} from 'react'
import {navigate} from 'gatsby'

//footer and header
import Header from '../components/header/'
import Footer from '../components/footer/'

//components in main site
import Gallery from '../components/photogallery/'

//firebase
import {auth} from '../components/firebase'

//head document
import Head from '../components/head'

//react bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//fontawesome 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'

const Photogallery = () => {

    const [user, setUser] = useState(null)
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

    const [displayBlog] = useState('none')

    if (user === false) {
        setTimeout(() => {
            navigate('/')
        }, 4000)

        return (
            <Container>
                <Row style={{justifyContent: 'center', paddingTop: '400px'}}>
                    <FontAwesomeIcon icon={faLock} style={{width: '100px', height: '100px'}}/>
                </Row>
                <Row style={{justifyContent: 'center', paddingTop: '20px'}}>
                    <Col xs={12} style={{textAlign: 'center'}}>
                        <p>
                            You are not logged in! <br className="brElement"/>
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
            title = {"Photogallery"}
            keywords = { ["camera", "photo", "images", "gallery", "photography", "firebase", "user", "create", "new"]}
            description = { "Create Your own gallery"}
        />
  
        <main>
            <Header 
                display={displayBlog}
            />
            <Gallery />
            <Footer />
        </main>

        </>
    )
}

export default Photogallery