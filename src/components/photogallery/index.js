import React, {useState, useEffect} from 'react'

//react bootstrap
import {Row, Col, Container, Image} from 'react-bootstrap'

//login/sign up page
import {db, auth, storage} from '../firebase'

//title
import Title from '../title'

//uuid for upload user images to photogallery
import { v4 as uuid } from 'uuid'

//modal for images
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const Gallery = () => {

  const [imageUrl, setImageUrl] = useState([])

  const [user, setUser] = useState([])

  const getUserData = (uid) => {
      db.ref("users/" + uid).once("value", (snap) => {
      console.log(snap.val())
      setUser(snap.val())
      })
  }

  const readImages = async (e) => {
    const file = e.target.files[0]
    const id = uuid()
    const storageRef = storage.ref("images").child(id)
    const imageRef = db.ref("images").child(user.id).child(id)
    await storageRef.put(file)
    storageRef.getDownloadURL().then((url) => {
      imageRef.set(url)
      const newState = [...imageUrl, {id,  url }]
      setImageUrl(newState)
    })
  }

  const getImageUrl = (uid) => {
    const imageRef = db.ref("images").child(uid)

    imageRef.on("value", (snapshot) => {
      const imageUrls = snapshot.val()
      const urls = []
      for (let id in imageUrls) {
        urls.push({id, url: imageUrls[id] })
      }
      const newState = [...imageUrl, ...urls]
      setImageUrl(newState)
    })
  }

  const [modalImgUrl, setUrl] = useState()
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = (url) => {
    setIsOpen(true)
    setUrl(url)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
            getUserData(currentUser.uid)
            getImageUrl(currentUser.uid)
            }
        })
   
  }, [])

    return(
        <section className="banner" style={{backgroundColor: 'transparent', paddingTop: '200px'}}>
            <Container>
                <Title
                    title={`Photogallery`}
                />
                <Row style={{justifyContent: 'center'}}>
               
                    {imageUrl.map(({ id, url }) => (
                        <Col lg={3} md={5} sm={8} xs={8} key={id} onClick={() => openModal(url)} style={{cursor: 'pointer'}}>
                            <Image src={url} alt={'userImage'} />
                        </Col>
                    ))}

                    <Col lg={3} md={5} sm={8} xs={8} >
                        <label for="file" style={{cursor: 'pointer'}}>
                            <FontAwesomeIcon icon={faPlus} style={{display: 'flex', width: '35%', height: '100%', margin: '25px 0 0 80px'}}/>
                            <p style={{fontFamily: "josefin sans", fontSize: "1.1em", lineHeight: "1.5", color: 'black', textAlign: 'center'}}>{'Upload Your work here!'}</p>
                        </label>
                        <input type="file" id="file" accept="image/*" onChange={readImages} style={{display: 'none'}}/>
                    </Col>
                </Row>
                <Modal open={modalIsOpen} onClose={closeModal} center>
                    <Image src={modalImgUrl} alt={'userImage'} />
                </Modal>
                
            </Container>
        </section>
    )
}

export default Gallery
