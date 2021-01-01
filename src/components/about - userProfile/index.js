import React, {useState, useEffect} from 'react'
import {navigate} from 'gatsby'

//react bootstrap
import {Row, Col, Container, Button, Modal, Form, Image} from 'react-bootstrap'

//login/sign up page
import {db, auth, storage} from '../firebase'

//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarAlt, faMapMarkedAlt, faQuoteRight, faEnvelope, faEdit} from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

import userPic from '../../images/userProfileTemp.jpg'

//material ui icons
import CircularProgressWithLabel from '@material-ui/core/CircularProgress'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

const AboutTemplate = (props) => {

    const [loginDisplay, setLoginDisplay] = useState(false)
    const [modal, isOpenModal] = useState(false)
   
    const [userAddress, setUserAddress] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [userInsta, setUserInsta] = useState('')

    //user quote
    const [userQuote, setUserQuote] = useState('')

    //update user info and set display on
    const [displayBirth, setBirth] = useState('')
    const [displayAddress, setAddress] = useState('')
    const [displayInsta, setInstagram] = useState('')
    const [displayQuote, setQuote] = useState('')
    
    //display from db user info
    const [birth, showBirth] = useState(true)
    const [address, showAddress] = useState(true)
    const [insta, showInsta] = useState(true)
    const [quote, showQuote] = useState(true)

    const handleSignOut = () => {
      auth.signOut()
      setLoginDisplay(true)
    }

    const openModal = () => {
        isOpenModal(true)
    }

    const closeModal = () => {
        isOpenModal(false)
    }


    const onUpdate = () => {
        //console.log(uid)
        db.ref("users").child(props.uid).update({birth: dateOfBirth, address: userAddress, instagram: userInsta, quote: userQuote})

        if(dateOfBirth !== '' || userAddress !== '' || userInsta !== '' || userQuote !== '')
        {
            //user birth
            setBirth(dateOfBirth || props.birth)
            showBirth(false)

            //user address
            setAddress(userAddress || props.address)
            showAddress(false)

            //user languages
            setInstagram(userInsta || props.instagram)
            showInsta(false)

            //user quote
            setQuote(userQuote || props.quote)
            showQuote(false)
        }

        if(userInsta === '' || userAddress === '' || dateOfBirth === '' || userQuote === '')
        {
            alert('Please, fill all fields!')
            isOpenModal(true)
        }
        else{
            isOpenModal(false)
        }
    }

    const [profileImg, setProfileImg] = useState([])
    const [url, setUrl] = useState('')
    const [image, showImage] = useState(false)
    const [imgTemp, setImgTemp] = useState(true)
    const [progress, setProgress] = useState(0)
    const [displayProgress, setDisplayProgress] = useState(false)

    
   const handleUpload = async(e) => {

    const file = e.target.files[0]

        
        const storageRef = storage.ref("images").child(props.uid).put(file)

        storageRef.on(
            "state_changed",
            snapshot => {

           const progress = Math.round(
                
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100 )
                if(progress < 100)
                {
                    setDisplayProgress(true)
                    showImage(false)
                    setImgTemp(false)
                }
                else{
                    setDisplayProgress(false)
                    setEnabled(false)
                }
                setProgress(progress)
            },
            error => {
                console.log(error)
            },

            () => {
                const imageRef = db.ref("users").child(props.uid)
                storage.ref("images").child(props.uid).getDownloadURL().then((url) => {
                imageRef.update({url: url})

                if(url !== '' )
                {
                    setUrl(url || props.url)
                    setImgTemp(false)
                    showImage(true)
                }
                
                })
            }
        )
        
    }

    const [enabled, setEnabled] = useState(false)
  // using useEffect we can detect if user uploaded any file,
  // so enable submit button
  useEffect(() => {
    
    if(props.url)
    {
        showImage(true)
        setImgTemp(false)
    }

  }, [profileImg, props.url])


    if(loginDisplay === true)
      {
         navigate('/login/')
      }

    return (

        <section className="banner" style={{backgroundColor: 'transparent', paddingTop: '50px'}}>
            <Container>
                <Row>
                    <Col style={{textAlign: 'center'}}>
                        <h2>About me</h2>
                        <h4>Profesional Profile</h4>
                    </Col>
                </Row>
                <Row style={{paddingTop: '50px', justifyContent: 'center'}}>
                    <Col xs={6} sm={6} md={4} lg={4} style={{textAlign: 'center'}}>
                        <h4>Hello {props.name}. Set up Your profile 
                            <label for="icon-button-file" >
                                <PhotoCamera style={{cursor: 'pointer'}} />
                            </label> 
                                                  
                            <input type="file" onChange={handleUpload} aria-label="File browser example" id="icon-button-file" style={{display:'none'}} />
                        </h4>
                        {displayProgress && (<CircularProgressWithLabel value={progress} max="100" style={{margin: '50px 0 50px'}}/>)}
                        {imgTemp && (<Image style={{width: '70%', borderRadius: '10px'}} src={userPic} alt="ProfilePicture" />)}
                        {image && (<Image style={{width: '70%', borderRadius: '10px'}} src={url || props.url} alt={props.name}/>)}
                        
                    </Col>  
                    <Col xs={12} sm={6} md={8} lg={7}>
                        <Row onClick={openModal} style={{cursor: 'pointer'}}>
                            
                            <Col xs={12} sm={12} md={12} lg={12}><p className="aboutEditInfo"><FontAwesomeIcon icon={faEdit} /> Edit information about You </p></Col>
                            <Row style={{margin: '10px', justifyContent: 'center'}} className="aboutInfo">
                                
                                <Col xs={8} sm={12} md={12} lg={6} >
                                    {!quote && (<p> <FontAwesomeIcon icon={faQuoteRight} /> Add/Change Quote: <h4 style={{paddingLeft: '5px', paddingTop: '5px'}}> {displayQuote} </h4></p>) } 
                                    {quote && (<p> <FontAwesomeIcon icon={faQuoteRight} /> Add/Change Quote: <h4 style={{paddingLeft: '5px', paddingTop: '5px'}}> {props.quote}</h4></p>)}  
                                    
                                    {!birth && (<p> <FontAwesomeIcon icon={faCalendarAlt} /> Birth: <h4 style={{paddingLeft: '5px', paddingTop: '5px'}}>{displayBirth} </h4></p>) } 
                                    {birth && (<p> <FontAwesomeIcon icon={faCalendarAlt} /> Birth: <h4 style={{paddingLeft: '5px', paddingTop: '5px'}}>{props.birth} </h4></p> )} 
                                        
                                    {!address && (<p> <FontAwesomeIcon icon={faMapMarkedAlt} /> Address: <h4 style={{paddingLeft: '5px', paddingTop: '5px'}}>{displayAddress} </h4> </p>) } 
                                    {address && (<p> <FontAwesomeIcon icon={faMapMarkedAlt} /> Address: <h4 style={{paddingLeft: '5px', paddingTop: '5px'}}>{props.address} </h4> </p> )}   
                            
                                </Col>
                                <Col xs={8} sm={12} md={12} lg={6}>
                                    <h4> <FontAwesomeIcon icon={faEnvelope} /> Email: {props.email}</h4>
                                    {!insta && ( <p><FontAwesomeIcon icon={faInstagram} /> Instagram: <h4 style={{paddingLeft: '5px', paddingTop: '5px'}}>{displayInsta} </h4> </p>) } 
                                    {insta && ( <p><FontAwesomeIcon icon={faInstagram} /> Instagram: <h4 style={{paddingLeft: '5px', paddingTop: '5px'}}> {props.instagram} </h4> </p> )} 
                                </Col>
                                
                            </Row>
                     </Row>
                    </Col>
     
                    <Modal show={modal} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{'Edit Your information'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row style={{justifyContent: 'center'}}>
                                <Form style={{width: '70%'}}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control type="date" name="date" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" name="address" placeholder="Enter address" value={userAddress} onChange={e => setUserAddress(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect2">
                                        <Form.Label>Instagram nickname</Form.Label>
                                        <Form.Control type="text" name="instagram" placeholder={"Enter Instagram name"} value={userInsta} onChange={e => setUserInsta(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Quote</Form.Label>
                                        <Form.Control as="textarea" placeholder="Write Your quote" rows={3} value={userQuote} onChange={e => setUserQuote(e.target.value)} />
                                    </Form.Group>
                                </Form> 
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeModal}>
                            Close
                            </Button>
                           
                            <Button variant="primary" onClick={onUpdate}>
                            Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button type="primary" className="btnLogOut" onClick={handleSignOut} style={{backgroundColor: 'red', borderColor: 'red'}}> Logout </Button>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default AboutTemplate