import React from 'react'

import {Row, Col} from 'react-bootstrap'

const Title = (props) => {

    return(
        
        <Row>
            <Col style={{textAlign: 'center'}}>
                <h3 style={{fontFamily: "josefin sans", fontSize: "3.5em", lineHeight: "1.5", color: props.color}}>{props.title}</h3>
            </Col>
        </Row>
            
    )
}

export default Title