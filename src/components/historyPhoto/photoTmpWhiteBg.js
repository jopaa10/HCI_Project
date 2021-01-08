import React, {useState} from 'react'

//react bootstrap
import {Container, Row, Col} from 'react-bootstrap' 

//gatsby background image
import Img from 'gatsby-image'

//react reveal animation
import Fade from 'react-reveal'

const PhotoTemplate = (props) =>{

    const [isOpen, setOpen] = useState(false)
    const [changeText, setText] = useState('Read more')

    const displayMore = () => {

        setOpen(!isOpen)
        setText(changeText === 'Read more' ? 'Less' : 'Read more')
    }

    return(
        <>
        
            <section className="banner"  style={{backgroundColor: props.backgroundColor, color: props.color, paddingTop: '0', height: 'auto'}}>  
            
                <Container>
                    <Fade left>
                        <Row style={{justifyContent: 'center'}}>
                            <Col sm={10} xs={8} md={6} lg={6} style={{paddingTop: '50px'}}>
                                <Img fluid={props.fluid} alt="historyPhoto" />
                            </Col>
                            <Col sm={10} xs={12} md={6} lg={6} style={{paddingTop: '50px', textAlign: 'center'}}>
                                <Row style={{justifyContent: 'center'}}>
                                    <h3 className="allTimeImagesTitle" style={{color: props.color, fontFamily: "josefin sans", fontSize: "2em", lineHeight: "1.5"}}>{props.title}</h3>
                                </Row>
                                <Row style={{textAlign: 'center'}}>
                                    <p style={{textAlign: 'justify', margin: '10px 60px 20px 60px', fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5"}}>
                                        The history of photography began in remote antiquity
                                        with the discovery of two critical principles: camera obscura image projection and the observation 
                                        that some substances are visibly altered by exposure to light. 
                                        { isOpen && props.description}
                                    </p>
                                </Row>
                                <Row style={{justifyContent: 'center'}}>
                                    <button onClick={displayMore} style={{borderRadius: '5px', height: '50px', width: '30%', backgroundColor: props.bgColor, border: '0', color: props.textBtnColor, fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5"}}> 
                                        {changeText} 
                                    </button>
                                </Row>
                            </Col>
                        </Row>
                    </Fade>
                </Container>
                
            </section>
       
        
        </>
    )
}

export default PhotoTemplate