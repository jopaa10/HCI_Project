import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

//react bootstrap

import {Container, Row, Col} from 'react-bootstrap'

//gatsby image
import Img from "gatsby-image"


const InfoForUsers = () => {


   const data = useStaticQuery(graphql`
        query{
           imageGallery: file(relativePath: {eq: "imageGallery.png"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }

            starRating: file(relativePath: {eq: "profileImg1.png"}){
                childImageSharp{
                    fluid(maxWidth: 330, maxHeight: 380, quality: 100){
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }

            ruleOfThird: file(relativePath: {eq: "soup.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 330, maxHeight: 380, quality: 100){
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }    
        }
    
    `)

    return(
        <>
        <section className="banner" style={{backgroundColor: "white", paddingTop: '0'}}> 

            <Container>
                
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} style={{textAlign: "center"}}>
                            <h3 style={{fontFamily: "josefin sans", fontSize: "3.5em", lineHeight: "1.5"}}> Make Your Photogallery </h3>
                            <h4 style={{fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5"}}>
                                Upload Your photos <br />
                                
                            </h4>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Img fluid={data.imageGallery.childImageSharp.fluid} className="pageInfoImg" alt="exampleOfGallery" />
                        </Col>
                    </Row>
               
                    <Row style={{paddingTop: '100px'}}>
                        <Col xs={12} sm={12} md={6} lg={6} style={{textAlign: "center"}} className="ratingImgAbove">
                            <Img fluid={data.starRating.childImageSharp.fluid} className="pageInfoImg" style={{ boxShadow: "1px 10px 10px -3px rgba(0,0,0,0.29)"}} alt="profilePic" />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} style={{textAlign: "center"}}>
                            <h3 style={{fontFamily: "josefin sans", fontSize: "3.5em", lineHeight: "1.5"}}> Set up Your profile </h3>
                            <h4 style={{fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5"}}> 
                                Sign Up / Login <br />
                                Add profile picture <br />
                                Add favourite quote 
                            </h4>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} style={{textAlign: "center"}} className="ratingImg">
                            <Img fluid={data.starRating.childImageSharp.fluid} className="pageInfoImg" style={{ boxShadow: "1px 10px 10px -3px rgba(0,0,0,0.29)"}} alt="profilePic" />
                        </Col>
                    </Row>
             
                    <Row style={{paddingTop: '100px'}}>
                        <Col xs={12} sm={12} md={6} lg={6} style={{textAlign: "center"}}>
                            <h3 style={{fontFamily: "josefin sans", fontSize: "3.5em", lineHeight: "1.5"}}> {`Learn Tips & Tricks`} </h3>
                            <h4 style={{fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5"}}>
                                Play with reflection <br />
                                Rule of thirds <br />
                                Use gridlines to balance Your shot <br />
                                Find different perspectives
                            </h4>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Img fluid={data.ruleOfThird.childImageSharp.fluid} className="pageInfoImg" alt="exampleOfGallery" />
                        </Col>
                    </Row>
                

            </Container>
        </section>
        </>
    )
}
export default InfoForUsers


