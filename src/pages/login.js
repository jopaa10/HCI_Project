import React from 'react'

//import header, footer
import Header from '../components/header'
import Footer from '../components/footer'

import LoginLayout from '../components/loginForm'

const Login = () => {


    return(
        <>   
        <main>
            <Header/>
            <LoginLayout />
            <Footer />
        </main>

        </>
    )
}

export default Login