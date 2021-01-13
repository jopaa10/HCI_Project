import React, {useState, useRef} from 'react'

//image
import Img from 'gatsby-image'

//bootstrap
import {Col, Popover, OverlayTrigger, Tooltip} from 'react-bootstrap'

const PopoverDisplay = (props) => {

    const [changeCursor] = useState('pointer')
    const [displayDetails, setDisplayDetails] = useState(false)
    const target = useRef(null)

    const showMore = () => {

        setDisplayDetails(!displayDetails)
    }
    
    return(
    <>
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" ref={target}>Click for more!</Tooltip>}>  
        <Col sm={12} md={12} xs={10} onClick={showMore} ref={target} style={{display: 'flex', justifyContent: 'flex-start', marginRight: '5em'}}>
        
            <Img 
                style={{width: props.width, cursor: changeCursor}} 
                fluid={props.image} 
                alt="nikonCamera"
                target={target} 
            />

            {displayDetails &&
                <Col xs={8} sm={8}>
                    <Popover placement={props.placement} id="popover-basic" target={target.current} className="popoverWidthR">
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
export default PopoverDisplay