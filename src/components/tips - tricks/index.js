import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

//react bootstrap
import {Col, Row, Container} from 'react-bootstrap'

//gatsby img
import Img from 'gatsby-image'

//template for tips & tricks left
import TemplateLeft from './tricksTemplateLeft'
import TemplateRight from './tricksTemplateRight'

//react reveal
import Fade from 'react-reveal'

const TipsTricks = () => {

    const data = useStaticQuery(graphql`
        query{
            ruleOfThird: file(relativePath: {eq: "rule-of-thirds.jpg"}){
                childImageSharp{
                    fluid(quality: 100){
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }

            captureReflection: file(relativePath: {eq: "capture-reflections.jpg"}){
                childImageSharp{
                    fluid(quality: 100){
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }

            differentPerspectives: file(relativePath: {eq: "flowerPhoto.png"}){
                childImageSharp{
                    fluid(quality: 100){
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
            }
    `)

    return(

        <>
        
        <section className="banner" style={{backgroundColor: 'white'}}>
            <Container>

                <Row>
                    <Col xs={12} style={{textAlign: "center"}}>
                        <h3 style={{fontFamily: "josefin sans", fontWeight: "700", fontSize: "3.5em", lineHeight: "1.5", paddingBottom: '50px'}}> Creative Photography </h3>
                    </Col>
                </Row>
                <Fade left>
                <TemplateLeft
                    imgFluid={data.ruleOfThird.childImageSharp.fluid}
                    title={'Use gridlines to balance your shot'}
                    description={`
                                    One of the easiest and best ways to improve your mobile photos is to turn on the camera's gridlines.

                                    That superimposes a series of lines on the screen of your smartphone's camera that are based on the "rule of thirds" 

                                    A photographic composition principle that says an image should be broken down into thirds, 
                    
                                    both horizontally and vertically, so you have nine parts in total.
                                `}
                    boxShadow={'-34px -31px 9px 3px rgba(225,223,174,1)'}
                />
                </Fade>

                <Fade right>
                <TemplateRight
                    imgFluid={data.differentPerspectives.childImageSharp.fluid}
                    title={'Find different perspectives'}
                    description={` 
                                    Try taking a photo directly upward and playing with the sky as negative space, like in the first photo below. 

                                    Or, you can try taking it at a slight downward angle.

                                    Pro Tip: If you take a photo and find the perspective is a little askew or tilted, 
                                    use the SKRWT photo editing app to make the lines look clean and square.
                                `}
                    imgFluidLeft={data.differentPerspectives.childImageSharp.fluid}
                />
                </Fade>

                <Fade left>
                <TemplateLeft
                    imgFluid={data.captureReflection.childImageSharp.fluid}
                    title={'Play with reflections'}
                    description={`
                                    There's something so idyllic about seeing the sky reflected in a body of water. There's a reason why we love seeing that

                                    Our eyes are drawn to reflections. So look for opportunities to play with them in photos.

                                    There are plenty of out-of-the-box places to find reflections.
                                `}
                    boxShadow={'-34px -31px 9px 3px rgba(234,209,227,1)'}
                />
                </Fade>
            </Container>
        
        </section>
        </>
    )
}

export default TipsTricks