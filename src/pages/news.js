import React from 'react'

//import header, footer
import Header from '../components/header/'
import Footer from '../components/footer/'

import NewsItems from '../newsItems/index'

const News = () => {


    return(
        <>

        <main>
            <Header/>
            <NewsItems />
        </main>
            <Footer />
     

        </>
    )
}

export default News