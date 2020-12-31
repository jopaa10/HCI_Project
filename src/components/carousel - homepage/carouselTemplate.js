import React from 'react'

//bootstrap
import {Col} from 'react-bootstrap'

//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Photoinfo = (props) => {


    return(
        <>    
            <Col xs={2}> 
                <FontAwesomeIcon style={{width: '50px', height: '30px'}} icon={props.icon} /> 
            </Col>

            <Col xs={10}>
                <p style={{fontFamily: 'Josefin Sans', fontWeight: '400', lineHeight: '1.5'}}>{props.description}</p>
            </Col>
        </>
    )
}

export default Photoinfo