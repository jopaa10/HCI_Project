import React, {useState, useEffect} from 'react'
import {useStaticQuery, graphql, navigate} from 'gatsby'

//footer and header
import Header from '../components/header/'
import Footer from '../components/footer/'

//components in main site
import Banner from '../components/banner/'
import Template from '../components/about - userProfile/'

//firebase
import {auth, db} from '../components/firebase/'

//head document
import Head from '../components/head'

const About = () => {

    const [user, setUser] = useState([])
    const [userIsLog, setUserLog] = useState(null)

    const data = useStaticQuery(graphql`
    query{
        bgImage: file(relativePath: {eq: "about.jpg"}){
            childImageSharp{
                fluid(maxWidth: 2000, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                }
            } 
        }
    `)


    const getUserData = (uid) => {
        db.ref("users/" + uid).once("value", (snap) => {
        //console.log(snap.val())
        setUser(snap.val())
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
        
            if (currentUser) {
                getUserData(currentUser.uid)
                setUserLog(true)
            }
            else{
                setUserLog(false)
            }
        })

    }, [])

    if (userIsLog === false) {
        setTimeout(() => {
            navigate('/login/')
        }, 3000);
        return <p>You are not logged in!</p>
    }
 

    return(
        <>

            <Head 
                title = {"Profile"}
                keywords = { ["camera", "photo", "images", "about", "photography", "user", "profile"]}
                description = { "User profile page"}
            />
            
            <main>
                <Header />
                <Banner
                    color={'white'} 
                    title={'"Photography is the story I fail to put into words"'}
                    author={'Denise Sparks'}
                    bgImage={data.bgImage.childImageSharp.fluid}
                />
                <Template uid={user.id} url={user.url} name={user.name} birth={user.birth} address={user.address} instagram={user.instagram} email={user.email} quote={user.quote}/>
                <Footer /> 
            </main>

        </>
    )
}

export default About