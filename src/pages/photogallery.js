import React from 'react'
import {navigate} from 'gatsby'

//footer and header
import Header from '../components/header/'
import Footer from '../components/footer/'

//components in main site
import Gallery from '../components/photogallery/'

//firebase
import {auth, db} from '../components/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'


const Photogallery = (props) => {

    const [user, setUser] = useAuthState(auth)


    if (!user) {
        setTimeout(() => {
            navigate('/')
        }, 3000);
        return <p>You are not logged in!</p>
    }


    return(
        <>
  
        <main>
            <Header name={user.name}/>
            <Gallery />
            <Footer />
        </main>

        </>
    )
}

export default Photogallery