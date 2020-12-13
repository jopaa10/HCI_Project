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
       <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" ref={ref}>Click for more</Tooltip>}> 
            <Col sm={12} md={12} xs={10} onClick={showMore} ref={ref}  style={{display: 'flex', justifyContent: 'flex-end' , marginRight: '5em'}}>
                
                {displayDetails &&
                    
                        <Col xs={8} sm={8} >
                            <Popover placement={props.placement} id="popover-basic" target={ref.current}>
                                <Popover.Title className="cameraHistTitle" as="h3" style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.85)', fontFamily: 'josefin sans'}}>{props.title}</Popover.Title>
                                <Popover.Content style={{color: 'white', fontFamily: 'josefin sans'}}>
                                And here's some <strong>amazing</strong> content. It's very engaging.
                                right?
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
      </>
    )
}
export default PopoverLeft