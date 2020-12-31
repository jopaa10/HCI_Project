import React from 'react'
import {navigate} from 'gatsby'

//footer and header
import Header from '../components/header/'
import Footer from '../components/footer/'

//components in main site
import Gallery from '../components/photogallery/'

//firebase
import {auth} from '../components/firebase'


const Photogallery = (props) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
             
            if (currentUser) {
                    setUser(true)
                }

            else{
                setUser(false)
            }
         })
 
    }, [])


    if (user === false) {
        setTimeout(() => {
            navigate('/')
        }, 3000);
        return <p>You are not logged in!</p>
    }


    return(
        <>
  
        <main>
            <Header />
            <Gallery />
            <Footer />
        </main>

        </>
    )
}

export default Photogallery