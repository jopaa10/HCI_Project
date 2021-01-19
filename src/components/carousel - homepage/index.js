import React, {useEffect, useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'

//gatsby image

import Img from 'gatsby-image'

//bootstrap
import {Col, Row, Container, Carousel} from 'react-bootstrap'

//fontawesome icons
import {faImage, faMagic} from '@fortawesome/free-solid-svg-icons'

//carousel template
import Template from './carouselTemplate'

//title
import Title from '../title/index'

import {db, auth} from '../firebase'

const Photoinfo = () => {

    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "cameraBg1.png" }) {
            childImageSharp {
                fluid{
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }

            cameraImg: file(relativePath: { eq: "camera.png" }) {
                childImageSharp {
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }

           image1: file(relativePath: {eq: "image1Slider.jpg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }

            image2: file(relativePath: {eq: "image.jpg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }

            image3: file(relativePath: {eq: "image3Slider.jpg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }

            bgImg: file(relativePath: {eq: "camera-wall.jpg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `)

    const [user, setUser] = useState(null)

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
                }
            else
            {
                setUser(null)
            }
        })

    }, [])

    return(

        <Container className="banner" style={{backgroundColor: 'white', paddingBottom: '150px'}}>
        
            {!user ?
                (
                    <Title
                        title={`Welcome to "Photography" page`}
                    />
                )
                :
                (
                    <Title
                        title={`${user.name}, Welcome to "Photography" page`}
                    />
                )
            }
                <Row>
                
                    <Col xs={12} sm={6}>
                        <Row style={{paddingTop: '100px'}}>

                            <Template 
                                icon={faImage}
                                description={`Exposure.
                                            Color.
                                            Story. 
                                            Composition. 
                                            Balance.`}
                            />
                        </Row>
                        <Row style={{padding: '20px 0'}}/>
                        <Row>
                            <Template 
                                icon={faMagic}
                                description={`Photoshop is the professional photographer’s best friend. 
                                            Practically any image can benefit from some touch-ups, 
                                            whether it’s cropping, brightness adjustments, color corrections, or other tweaks.`}
                            />
                        </Row>
                    </Col>                    
                    
                    <Col xs={12} sm={6} style={{display: 'block'}} className="cameraSlider">
                        <Img style={{zIndex: '2'}}  fluid={data.cameraImg.childImageSharp.fluid} alt="cameraWallpaper" />
                    

                    <Carousel fluid style={{
                        position: 'absolute',
                        width: '150px',
                        bottom: '21%',
                        left: '23%',
                    }}>
                            
                        <Carousel.Item>
                            <Img fluid={data.image1.childImageSharp.fluid} alt="image"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Img fluid={data.image2.childImageSharp.fluid} alt="image"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Img  fluid={data.image3.childImageSharp.fluid} alt="image"/>
                        </Carousel.Item>
                    </Carousel>

                        <Img className="cameraSliderBg" fluid={data.file.childImageSharp.fluid} alt="circleGrey" />

                    </Col>

                </Row>

        </Container>

    )
}

export default Photoinfo