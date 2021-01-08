import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

//title
import Title from '../title'

//react bootstrap
import {Container} from 'react-bootstrap' 

//all time images
import AllTimeImages from './photoTemplate'

import AllTimeImages2 from './photoTmpWhiteBg'

const PhotoHistory = () =>{

    const data = useStaticQuery(graphql`
        query{
                bgImage: file(relativePath: {eq: "firstPhotoEver.jpg"}){
                    childImageSharp{
                        fluid(quality: 100){
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }

                bgImage1: file(relativePath: {eq: "secondImage.jpg"}){
                    childImageSharp{
                        fluid(quality: 100){
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }

                bgImage2: file(relativePath: {eq: "menPhoto.jpg"}){
                    childImageSharp{
                        fluid(quality: 100){
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }
                
                bgImage3: file(relativePath: {eq: "carPhoto.jpg"}){
                    childImageSharp{
                        fluid(quality: 100){
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }

                bgImage4: file(relativePath: {eq: "gandhiPhoto.jpg"}){
                    childImageSharp{
                        fluid(quality: 100){
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }

                bgImage5: file(relativePath: {eq: "daliPhoto.jpg"}){
                    childImageSharp{
                        fluid(quality: 100){
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }

                bgImage8: file(relativePath: {eq: "pillowFight.jpg"}){
                    childImageSharp{
                        fluid(quality: 100){
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }

                bgImage10: file(relativePath: {eq: "firstPhotoOfMoon.jpg"}){
                    childImageSharp{
                        fluid(quality: 100){
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }

                bgImage11: file(relativePath: {eq: "jordanPhoto.jpg"}){
                    childImageSharp{
                        fluid(quality: 100){
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }
               

                bgImage14: file(relativePath: {eq: "firstSelfie.jpg"}){
                    childImageSharp{
                        fluid(quality: 100){
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }
            }
        `)

    return(
        <>
        <section className="banner" style={{backgroundColor: 'white', paddingBottom: '0px'}}>
            <Container>
                <Title 
                    title={'Top 10 of the most influential photos of all time'}
                />
            </Container>
            
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,160C384,171,480,181,576,165.3C672,149,768,107,864,101.3C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <AllTimeImages
            backgroundColor={'black'}
            color={'white'}
            title={'First image ever'}
            fluid={data.bgImage.childImageSharp.fluid}
            bgColor={'white'}
            textBtnColor={'black'}
            zIndex={'1'}
            description={`There are no artifacts or descriptions 
            that indicate any attempt to capture images with light sensitive materials prior to the 18th century 
            (with the arguable exception of a possibly photographic process used to create the mysterious shroud of Turin).`}
        />

        <AllTimeImages
           
            backgroundColor={'black'}
            color={'white'}
            title={'Second image'}
            fluid={data.bgImage1.childImageSharp.fluid}
            bgColor={'white'}
            textBtnColor={'black'}
            description={`There are no artifacts or descriptions 
            that indicate any attempt to capture images with light sensitive materials prior to the 18th century 
            (with the arguable exception of a possibly photographic process used to create the mysterious shroud of Turin).`}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,160C384,171,480,181,576,165.3C672,149,768,107,864,101.3C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        
        <AllTimeImages2
           
            backgroundColor={'white'}
            color={'black'}
            title={'Lorem ipsum'}
            fluid={data.bgImage2.childImageSharp.fluid}
            bgColor={'black'}
            textBtnColor={'white'}
            zIndex={'2'}
            description={`There are no artifacts or descriptions 
            that indicate any attempt to capture images with light sensitive materials prior to the 18th century 
            (with the arguable exception of a possibly photographic process used to create the mysterious shroud of Turin).`}
        />
        

        <AllTimeImages2
            
            backgroundColor={'white'}
            color={'black'}
            title={'Lorem ipsum'}
            fluid={data.bgImage3.childImageSharp.fluid}
            bgColor={'black'}
            textBtnColor={'white'}
            zIndex={'2'}
            description={`There are no artifacts or descriptions 
            that indicate any attempt to capture images with light sensitive materials prior to the 18th century 
            (with the arguable exception of a possibly photographic process used to create the mysterious shroud of Turin).`}
        />

        <AllTimeImages2
            
            backgroundColor={'white'}
            color={'black'}
            title={'Lorem ipsum'}
            fluid={data.bgImage4.childImageSharp.fluid}
            bgColor={'black'}
            textBtnColor={'white'}
            description={`There are no artifacts or descriptions 
            that indicate any attempt to capture images with light sensitive materials prior to the 18th century 
            (with the arguable exception of a possibly photographic process used to create the mysterious shroud of Turin).`}
        />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,160C384,171,480,181,576,165.3C672,149,768,107,864,101.3C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <AllTimeImages
            
            backgroundColor={'black'}
            color={'white'}
            title={'Lorem ipsum'}
            fluid={data.bgImage5.childImageSharp.fluid}
            bgColor={'white'}
            textBtnColor={'black'}
            zIndex={'1'}
            description={`There are no artifacts or descriptions 
            that indicate any attempt to capture images with light sensitive materials prior to the 18th century 
            (with the arguable exception of a possibly photographic process used to create the mysterious shroud of Turin).`}
        />

        
        <AllTimeImages
            
            backgroundColor={'black'}
            color={'white'}
            title={'Lorem ipsum'}
            fluid={data.bgImage8.childImageSharp.fluid}
            bgColor={'white'}
            textBtnColor={'black'}
            description={`There are no artifacts or descriptions 
            that indicate any attempt to capture images with light sensitive materials prior to the 18th century 
            (with the arguable exception of a possibly photographic process used to create the mysterious shroud of Turin).`}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,160C384,171,480,181,576,165.3C672,149,768,107,864,101.3C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        
        <AllTimeImages2
            
            backgroundColor={'white'}
            color={'black'}
            title={'Lorem ipsum'}
            fluid={data.bgImage10.childImageSharp.fluid}
            bgColor={'black'}
            textBtnColor={'white'}
            description={`There are no artifacts or descriptions 
            that indicate any attempt to capture images with light sensitive materials prior to the 18th century 
            (with the arguable exception of a possibly photographic process used to create the mysterious shroud of Turin).`}
        />
        
        <AllTimeImages2
            
            backgroundColor={'white'}
            color={'black'}
            title={'Lorem ipsum'}
            fluid={data.bgImage11.childImageSharp.fluid}
            bgColor={'black'}
            textBtnColor={'white'}
            description={`There are no artifacts or descriptions 
            that indicate any attempt to capture images with light sensitive materials prior to the 18th century 
            (with the arguable exception of a possibly photographic process used to create the mysterious shroud of Turin).`}
        />
        
        <AllTimeImages2
            
            backgroundColor={'white'}
            color={'black'}
            title={'Lorem ipsum'}
            fluid={data.bgImage14.childImageSharp.fluid}
            bgColor={'black'}
            textBtnColor={'white'}
            description={`There are no artifacts or descriptions 
            that indicate any attempt to capture images with light sensitive materials prior to the 18th century 
            (with the arguable exception of a possibly photographic process used to create the mysterious shroud of Turin).`}
        />
        
        </>
    )
}

export default PhotoHistory