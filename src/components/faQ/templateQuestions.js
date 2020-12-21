import React, {useState} from 'react'

//react bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//fontawesome 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

const ShowText = (props) => {

    const [showText, setShowText] = useState(false);
    const [changeIcon, setIcon] = useState(faPlus)

    const handleShowText = () => {

        setShowText(showText === true ? false : true)

        if(showText === true)
        {
            setIcon(faPlus);
        }
        else if(showText === false)
        {
            setIcon(faMinus);
        }
    }

    return(
     <>
        <Container fluid="md" onClick={handleShowText} style={{cursor: 'pointer', marginBottom: '20px', width: '300px', backgroundColor: 'white', padding: '10px 20px 0px', border: '1px solid rgba(0, 0, 0, 0.09)', borderRadius: '5px'}}>  
             <h5 style={{fontFamily: 'Josefin Sans', lineHeight: '1.5', paddingTop: '10px'}}><FontAwesomeIcon icon={changeIcon} onClick={handleShowText} cursor='pointer'/>  {props.title}</h5>
                {showText && 
                    <Row> 
                        <Col>
                            <p style={{fontFamily: 'Josefin Sans', fontWeight: '400', lineHeight: '1.5'}}>{props.content}</p>
                        </Col>
                    </Row>
                }
        </Container>
        
    </>
    )
}

export default ShowText