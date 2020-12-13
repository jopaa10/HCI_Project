import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

//import header, footer
import Header from '../components/header'
import Footer from '../components/footer'

import Banner from '../components/banner'

import TipsTricks from '../components/tips - tricks/index'

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


    return(
        <>

        

        <main>
            <Header/>
            <Banner
                color={'white'} 
                title={'"Life is like photography. You need the negatives to develop"'}
                author={'Ziad K. Abdelnour'}
                bgImage={data.bgImage.childImageSharp.fluid}
            />
            <TipsTricks/>
        </main>

      
            <Footer />

        </>
    )
}

export default Tips