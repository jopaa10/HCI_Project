import React, {useState} from 'react'

//import header, footer
import Header from '../components/header'
import Footer from '../components/footer'

//page components
import LoginLayout from '../components/loginForm'

//head document
import Head from '../components/head'

const Login = () => {

    const [displayBlog] = useState('none')

    return(
        <> 

        <Head 
            title = {"Login"}
            keywords = { ["camera", "photo", "images", "login", "photography", "sign up", "form"]}
            description = { "Create account"}
        />
          
        <main>
            <Header
                display={displayBlog}
            />
            <LoginLayout />
            <Footer />
        </main>

        </>
    )
}

export default Login