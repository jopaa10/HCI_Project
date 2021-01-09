import React, {useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'

//import header, footer
import Header from '../components/header/'
import Footer from '../components/footer/'

import Banner from '../components/banner/'
import CameraHistory from '../components/historyCamera/index'


//head document
import Head from '../components/head'

const Timeline = () => {

    const data = useStaticQuery(graphql`
        query{
            bgImage: file(relativePath: {eq: "timelineBg.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 2000, quality: 100){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `)

    const [displayBlog] = useState('none')

    return(
        <>

        <Head 
            title = {"History"}
            keywords = { ["camera", "history", "obscura", "nikon", "canon", "timeline", "rolleiflex"]}
            description = { "Cameras through history"}
        />

        <main>
            <Header 
                display={displayBlog}
            />
            <Banner
                color={'black'}
                title={`"Photographs open doors into the past, but they also allow a look into the future."`}
                author={'Sally Mann'}
                bgImage={data.bgImage.childImageSharp.fluid}
                className={'quote'}
                xs={'8'}
            />
            <CameraHistory />
            <Footer />
        </main>
   
        </>
    )
}

export default Timeline