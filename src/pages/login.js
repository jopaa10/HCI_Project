import React from 'react'

//import header, footer
import Header from '../components/header'
import Footer from '../components/footer'

//page components
import LoginLayout from '../components/loginForm'

//head document
import Head from '../components/head'

const Login = () => {


    return(
        <> 

        <Head 
            title = {"Login"}
            keywords = { ["camera", "photo", "images", "login", "photography", "sign up", "form"]}
            description = { "Create account"}
        />
          
        <main>
            <Header/>
            <LoginLayout />
            <Footer />
        </main>

        </>
    )
}

export default Login