import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

import Banner from '../components/banner'
import PhotoHistory from '../components/historyPhoto/index'

//head document
import Head from '../components/head'

const AllTimePhotos = () => {
    
    const data = useStaticQuery(graphql`
        query{
            bgImage: file(relativePath: {eq: "menPhoto.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 2000, maxHeight: 900, quality: 100){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `)

    return(
        <>
            <Head 
                title = {"All time photos"}
                keywords = { ["camera", "photo", "history", "first ever photo", "selfie", "black", "white", "old"]}
                description = { "The most important images through history"}
            />
            <main>
                <Header />
                <Banner
                    color={'black'} 
                    title={'"There is one thing the photograph must contain, the humanity of the moment"'}
                    author={'Robert Frank'}
                    bgImage={data.bgImage.childImageSharp.fluid}
                />
                <PhotoHistory />
                <Footer />
            </main>
            
        </>
    )
}

export default AllTimePhotos