import React, {useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'

//import header, footer
import Header from '../components/header'
import Footer from '../components/footer'

//page components
import Banner from '../components/banner'
import TipsTricks from '../components/tips - tricks/index'

//head document
import Head from '../components/head'

const Tips = () => {

    const data = useStaticQuery(graphql`
    query{
        bgImage: file(relativePath: {eq: "photograph1.jpeg"}){
            childImageSharp{
                fluid(maxWidth: 3000, maxHeight: 1500, quality: 100){
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
            title = {"Tips and tricks"}
            keywords = { ["camera", "photo", "images", "tips", "photography", "tricks", "shadow", "reflection"]}
            description = { "Tips and trick for taking good photo"}
        />
        
        <main>
            <Header
                display={displayBlog}
            />
            <Banner
                color={'white'} 
                title={'"Life is like photography. You need the negatives to develop"'}
                author={'Ziad K. Abdelnour'}
                bgImage={data.bgImage.childImageSharp.fluid}
                className={'quoteTips'}
                xs={'10'}
            />
            <TipsTricks/>
            <Footer />
        </main>

        </>
    )
}

export default Tips