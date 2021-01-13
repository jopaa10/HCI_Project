import React, {useState, useRef} from 'react'

//image
import Img from 'gatsby-image'

//bootstrap
import {Col, Popover, OverlayTrigger, Tooltip} from 'react-bootstrap'


const PopoverLeft = (props) => {

    const [changeCursor] = useState('pointer')
    const [displayDetails, setDisplayDetails] = useState(false)
 
    const ref = useRef(null)

    const showMore = () => {

        setDisplayDetails(!displayDetails)
       
    }


    return(
    <>
       <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" ref={ref} className="popoverDesktop">Click for more</Tooltip>}> 
            <Col sm={12} md={12} xs={10} onClick={showMore} ref={ref} className="camAlign popoverDesktop"  style={{display: 'flex', justifyContent: 'flex-end' , marginRight: '5em'}}>
                
                {displayDetails &&
                    
                        <Col xs={8} sm={8} >
                            <Popover placement={props.placement} id="popover-basic" target={ref.current}>
                                <Popover.Title className="cameraHistTitle" as="h3" style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.85)', fontFamily: 'josefin sans'}}>
                                    {props.title}
                                </Popover.Title>
                                <Popover.Content style={{color: 'white', fontFamily: 'josefin sans'}}>
                                    {props.content}
                                </Popover.Content>
                            </Popover>
                        </Col>
                    }   
                
                    
                    <Img 
                        style={{width: props.width, cursor: changeCursor}} 
                        fluid={props.image} 
                        alt="nikonCamera"
                        target={ref} 
                    /> 
                  
            </Col>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" ref={ref} className="popoverMobile">Click for more!</Tooltip>}>  
            <Col sm={12} md={12} xs={10} onClick={showMore} ref={ref.current} className="popoverMobile" style={{display: 'flex', justifyContent: 'flex-start', marginRight: '5em'}}>
            
                <Img 
                    style={{width: props.width, cursor: changeCursor}} 
                    fluid={props.image} 
                    alt="nikonCamera"
                    target={ref} 
                />

                {displayDetails &&
                    <Col xs={8} sm={8}>
                        <Popover placement={"right"} id="popover-basic" target={ref.current} className="popoverWidthR" style={{width: '250px'}}>
                            <Popover.Title as="h3" className="cameraHistTitle" style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.85)', fontFamily: 'josefin sans'}}>{props.title}</Popover.Title>
                            <Popover.Content style={{color: 'white', fontFamily: 'josefin sans'}}>
                                {props.content}
                            </Popover.Content>
                        </Popover>
                    </Col>
                } 
            </Col>
        </OverlayTrigger>
      </>
    )
}
export default PopoverLeft