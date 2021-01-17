import React, {useState, useEffect} from 'react'
import {useStaticQuery, graphql, navigate} from 'gatsby'

//footer and header
import Header from '../components/header/'
import Footer from '../components/footer/'

//components in main site
import Banner from '../components/banner/'
import Template from '../components/about - userProfile/'

//firebase
import {auth, db} from '../components/firebase/'

//head document
import Head from '../components/head'

//react bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//fontawesome 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'

const About = () => {

    const [user, setUser] = useState([])
    const [userIsLog, setUserLog] = useState(null)

    const data = useStaticQuery(graphql`
    query{
        bgImage: file(relativePath: {eq: "about.jpg"}){
            childImageSharp{
                fluid(maxWidth: 2000, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                }
            } 
        }
    `)

    const [displayBlog] = useState('none')
    
    const [counter, setCounter] = useState(5)

    const getUserData = (uid) => {
        db.ref("users/" + uid).once("value", (snap) => {
        //console.log(snap.val())
        setUser(snap.val())
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
        
            if (currentUser) {
                getUserData(currentUser.uid)
                setUserLog(true)
            }
            else{
                setUserLog(false)
            }
        })

        const timeout = setTimeout(() => {
            setCounter(counter - 1);
          }, 1000)

        return () => {

            clearTimeout(timeout)
        }

    },)

    if (userIsLog === false) {
        setTimeout(() => {
            navigate('/login/')
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
                title = {"Profile"}
                keywords = { ["camera", "photo", "images", "about", "photography", "user", "profile"]}
                description = { "User profile page"}
            />
            
            <main>
                <Header 
                    display={displayBlog}
                />
                <Banner
                    color={'white'} 
                    title={'"Photography is the story I fail to put into words"'}
                    author={'Denise Sparks'}
                    bgImage={data.bgImage.childImageSharp.fluid}
                    className={'quotePhoto'}
                    xs={'7'}
                />
                <Template uid={user.id} url={user.url} name={user.name} birth={user.birth} address={user.address} instagram={user.instagram} email={user.email} quote={user.quote}/>
                <Footer /> 
            </main>

        </>
    )
}

export default About