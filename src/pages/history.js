import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

//import header, footer
import Header from '../components/header/'
import Footer from '../components/footer/'

import Banner from '../components/banner/'
import CameraHistory from '../components/historyCamera/index'


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

    return(
        <>

        <main>
            <Header />
            <Banner
                color={'black'}
                title={`"Photographs open doors into the past, but they also allow a look into the future."`}
                author={'Sally Mann'}
                bgImage={data.bgImage.childImageSharp.fluid}
                
            />
            <CameraHistory />
        </main>

            <Footer />
   

        </>
    )
}

export default Timeline