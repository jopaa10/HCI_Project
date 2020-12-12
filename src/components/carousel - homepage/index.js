import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

//gatsby image

import Img from 'gatsby-image'

//bootstrap

import {Col, Row, Container, Carousel} from 'react-bootstrap'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faImage, faMagic} from '@fortawesome/free-solid-svg-icons'

import Title from '../title/index'

const Photoinfo = () => {

    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "cameraBg1.png" }) {
            childImageSharp {
                fluid{
                    ...GatsbyImageSharpFluid
                    }
                }
            }

            cameraImg: file(relativePath: { eq: "camera.png" }) {
                childImageSharp {
                    fluid{
                        ...GatsbyImageSharpFluid
                        }
                    }
                }

           image1: file(relativePath: {eq: "image1Slider.jpg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            image2: file(relativePath: {eq: "image.jpg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            image3: file(relativePath: {eq: "image3Slider.jpg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            bgImg: file(relativePath: {eq: "camera-wall.jpg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return(

        <Container className="banner" style={{backgroundColor: 'white', paddingBottom: '150px'}}>
            <Title
                title={`Welcome to "Photography" page`}
            />
            <Row>
                
            <Col xs={12} sm={6}>
                <Row style={{paddingTop: '100px'}}>
                    <Col xs={2}> 
                        <FontAwesomeIcon style={{width: '50px', height: '30px'}} icon={faImage} /> 
                    </Col>

                    <Col xs={10}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={2}> 
                        <FontAwesomeIcon style={{width: '50px', height: '30px'}} icon={faMagic} /> 
                    </Col>

                    <Col xs={10}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </Col>
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