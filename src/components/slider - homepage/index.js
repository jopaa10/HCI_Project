import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

//react bootstrap
import {Col, Row, Container} from 'react-bootstrap'

//gatsby image
import Img from 'gatsby-image'

//react card carousel
import ReactCardCarousel from 'react-card-carousel'

//animation
import Slide from 'react-reveal'

const ImageSlider = (props) => {

    const data = useStaticQuery(graphql`
        query{
            slideImage1: file(relativePath: {eq: "tibet.jpg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            slideImage2: file(relativePath: {eq: "japan.jpg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            slideImage3: file(relativePath: {eq: "japan2.jpg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            slideImage4: file(relativePath: {eq: "japan.jpg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    let CONTAINER_STYLE = {
        
        position: "relative",
        height: "50vh",
        width: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "middle",
        paddingTop: '150px'
      }

    let CARD_STYLE =  {
        
        display: 'flex',
        height: '500px',
        width: '700px',
        paddingTop: '80px',
        textAlign: 'center',
        background: '#52C0F5',
        color: '#FFF',
        fontSize: '12px',
        textTransform: 'uppercase'
    }

    return(

        <>
        
        <section className="banner" style={{backgroundColor: '#ededed'}}>
            <Container fluid>
            
            <Slide left>
                <Row>
                    <Col xs={12} style={{textAlign: "center"}}>
                        <h3 style={{fontFamily: "josefin sans", fontWeight: "700", fontSize: "3.5em", lineHeight: "1.5", paddingBottom: '50px'}}> Photography - Art of seeing </h3>
                    </Col>
                </Row>
            </Slide>

            <Slide right>
                <Row>
                    <Col xs={12} sm={12} md={12} style={{display: 'flex', justifyContent: 'center'}}>
                        <Row className="container_style" style={ CONTAINER_STYLE }> 
                            <ReactCardCarousel  autoplay={ true } autoplay_speed={ 2500 }>
                                <Row >
                                    <Img className="card_style" style={ CARD_STYLE } fluid={data.slideImage1.childImageSharp.fluid} alt="" />
                                </Row> 
                                <Row >
                                    <Img className="card_style" style={ CARD_STYLE } fluid={data.slideImage2.childImageSharp.fluid} alt="" />
                                </Row> 
                                <Row >
                                    <Img className="card_style" style={ CARD_STYLE } fluid={data.slideImage4.childImageSharp.fluid} alt="" />
                                </Row> 
                                <Row >
                                    <Img className="card_style" style={ CARD_STYLE } fluid={data.slideImage4.childImageSharp.fluid} alt="" />
                                </Row> 
                            </ReactCardCarousel>
                        </Row>
                    </Col>
                </Row>
            </Slide>
            
            </Container>
        
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgb(237, 237, 237)" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,80C384,64,480,64,576,80C672,96,768,128,864,138.7C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        </>
    )
}

export default ImageSlider