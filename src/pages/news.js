import React, {useState} from 'react'

//import header, footer
import Header from '../components/header/'
import Footer from '../components/footer/'

//news template
import NewsItems from '../newsItems/index'

//head document
import Head from '../components/head'

const News = () => {

    const [displayBlog] = useState('none')

    return(
        <>

        <Head 
            title = {"News"}
            keywords = { ["camera", "photo", "images", "news", "blog"]}
            description = { "The most important news about photos and camera"}
        />

        <main>
            <Header
                display={displayBlog}
            />
            <NewsItems />
            <Footer />
        </main>
        
        </>
    )
}

export default News