import React,{useState, useEffect} from 'react'

//react bootstrap
import {Row} from 'react-bootstrap'

//fontawesome icon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons'


const Button = (props) => {

  const [showButton, setButton] = useState(false);
  const [cursor] = useState("pointer");


  const getToTop = () => {

    document.documentElement.scrollTop = 0;

    setButton(!showButton)
  }

  const handleScroll = () => {

    if(window.pageYOffset > 200)
    {
      setButton(true);
      
    }

    else if(window.pageYOffset < 200){
      setButton(false)
    }
    
  }

  useEffect(() => {

    document.addEventListener("scroll", handleScroll);
    
  })

  

  return (
    
        <Row>
            {showButton && <FontAwesomeIcon icon={faArrowCircleUp} onClick={getToTop} 
            style={{
                width: '75px',
                height: '50px',
                position: 'fixed',
                bottom: '50px',
                right: '50px',
                zIndex: props.zIndex,
                cursor: cursor,
                color: props.color
                }}></FontAwesomeIcon> }
        </Row>
    )
  }

export default Button