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
            title={'View From The Window At Le Gras'}
            fluid={data.bgImage.childImageSharp.fluid}
            bgColor={'white'}
            textBtnColor={'black'}
            zIndex={'1'}
            desc={'It took a unique combination of ingenuity and curiosity to produce the first known photograph, so it’s fitting that the man who made it was an inventor and not an artist. In the 1820s, Joseph Nicéphore Niépce had become fascinated with the printing method of lithography, in which images drawn on stone could be reproduced using oil-based ink.'}
            description={` Searching for other ways to produce images, Niépce set up a device called a camera obscura, which captured and projected scenes illuminated by sunlight, and trained it on the view outside his studio window in eastern France. The scene was cast on a treated pewter plate that, after many hours, retained a crude copy of the buildings and rooftops outside. The result was the first known permanent photograph.`}
        />

        <AllTimeImages
           
            backgroundColor={'black'}
            color={'white'}
            title={'The Horse In Motion'}
            fluid={data.bgImage1.childImageSharp.fluid}
            bgColor={'white'}
            textBtnColor={'black'}
            desc={'When a horse trots or gallops, does it ever become fully airborne? This was the question photographer Eadweard Muybridge set out to answer in 1878.'}
            description={` Railroad tycoon and former California governor Leland Stanford was convinced the answer was yes and commissioned Muybridge to provide proof. Muybridge developed a way to take photos with an exposure lasting a fraction of a second and, with reporters as witnesses, arranged 12 cameras along a track on Stanford’s estate.`}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,160C384,171,480,181,576,165.3C672,149,768,107,864,101.3C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        
        <AllTimeImages2
           
            backgroundColor={'white'}
            color={'black'}
            title={'Lunch Atop A Skyscraper'}
            fluid={data.bgImage2.childImageSharp.fluid}
            bgColor={'black'}
            textBtnColor={'white'}
            zIndex={'2'}
            desc={'It’s the most perilous yet playful lunch break ever captured: 11 men casually eating, chatting and sneaking a smoke as if they weren’t 840 feet above Manhattan with nothing but a thin beam keeping them aloft.'}
            description={` That comfort is real; the men are among the construction workers who helped build Rockefeller Center. But the picture, taken on the 69th floor of the flagship RCA Building (now the GE Building), was staged as part of a promotional campaign for the massive skyscraper complex.`}
        />
        

        <AllTimeImages2
            
            backgroundColor={'white'}
            color={'black'}
            title={'Couple In Raccoon Coats'}
            fluid={data.bgImage3.childImageSharp.fluid}
            bgColor={'black'}
            textBtnColor={'white'}
            zIndex={'2'}
            desc={'To many white Americans in the 1930s, black people were little more than domestics or sharecroppers. They were ignored, invisible, forgotten. But that was not what James VanDerZee saw when he gazed through his camera lens.'}
            description={` Seeking to counter the degrading and widely disseminated caricatures of ­African Americans in popular culture, VanDerZee not only photographed Harlem weddings, funerals, clubs and families but also chronicled the likes of black nationalist Marcus Garvey, dancer Bill “Bojangles” Robinson and the poet Countee ­Cullen—the leaders, artists, writers, movers and strivers of the Harlem Renaissance.`}
        />

        <AllTimeImages2
            
            backgroundColor={'white'}
            color={'black'}
            title={'Gandhi And The Spinning Wheel'}
            fluid={data.bgImage4.childImageSharp.fluid}
            bgColor={'black'}
            textBtnColor={'white'}
            desc={'When the British held Mohandas Gandhi prisoner at Yeravda prison in Pune, India, from 1932 to 1933, the nationalist leader made his own thread with a charkha, a portable spinning wheel.'}
            description={` The practice evolved from a source of personal comfort during captivity into a touchstone of the campaign for independence, with Gandhi encouraging his countrymen to make their own homespun cloth instead of buying British goods. By the time Margaret Bourke-White came to Gandhi’s compound for a life article on India’s leaders, spinning was so bound up with Gandhi’s identity that his secretary, Pyarelal Nayyar, told Bourke-White that she had to learn the craft before photographing the leader. Bourke-White’s picture of ­Gandhi reading the news alongside his charkha never appeared in the article for which it was taken, but less than two years later life featured the photo prominently in a tribute published after ­Gandhi’s assassination. It soon became an indelible image, the slain civil-­disobedience crusader with his most potent symbol, and helped solidify the perception of Gandhi outside the subcontinent as a saintly man of peace.`}
        />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,160C384,171,480,181,576,165.3C672,149,768,107,864,101.3C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <AllTimeImages
            
            backgroundColor={'black'}
            color={'white'}
            title={'Dalí Atomicus'}
            fluid={data.bgImage5.childImageSharp.fluid}
            bgColor={'white'}
            textBtnColor={'black'}
            zIndex={'1'}
            desc={'Capturing the essence of those he photographed was Philippe Halsman’s life’s work. So when Halsman set out to shoot his friend and longtime collaborator the Surrealist painter Salvador Dalí, he knew a simple seated portrait would not suffice.'}
            description={` Inspired by Dalí’s painting Leda Atomica, Halsman created an elaborate scene to surround the artist that included the original work, a floating chair and an in-progress easel suspended by thin wires. Assistants, including Halsman’s wife and young daughter Irene, stood out of the frame and, on the photographer’s count, threw three cats and a bucket of water into the air while Dalí leaped up. It took the assembled cast 26 takes to capture a composition that satisfied Halsman. And no wonder. The final result, published in LIFE, evokes Dalí’s own work. The artist even painted an image directly onto the print before publication.`}
        />

        
        <AllTimeImages
            
            backgroundColor={'black'}
            color={'white'}
            title={'The Pillow Fight'}
            fluid={data.bgImage8.childImageSharp.fluid}
            bgColor={'white'}
            textBtnColor={'black'}
            desc={'Harry Benson didn’t want to meet the Beatles. The Glasgow-born photographer had plans to cover a news story in Africa when he was assigned to photograph the musicians in Paris. “I took myself for a serious journalist and I didn’t want to cover a rock ’n’ roll story,” he scoffed. But once he met the boys from Liverpool and heard them play, Benson had no desire to leave. “I thought, ‘God, I’m on the right story.’ ” '}
            description={` The Beatles were on the cusp of greatness, and Benson was in the middle of it. His pillow-fight photo, taken in the swanky George V Hotel the night the band found out “I Want to Hold Your Hand” hit No. 1 in the U.S., freezes John, Paul, George and Ringo in an exuberant cascade of boyish talent—and perhaps their last moment of unbridled innocence.`}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,160C384,171,480,181,576,165.3C672,149,768,107,864,101.3C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        
        <AllTimeImages2
            
            backgroundColor={'white'}
            color={'black'}
            title={'A Man On The Moon'}
            fluid={data.bgImage10.childImageSharp.fluid}
            bgColor={'black'}
            textBtnColor={'white'}
            desc={'Somewhere in the Sea of Tranquillity, the little depression in which Buzz Aldrin stood on the evening of July 20, 1969, is still there—one of billions of pits and craters and pockmarks on the moon’s ancient surface.'}
            description={` He’s just standing in place, a small, fragile man on a distant world—a world that would be happy to kill him if he removed so much as a single article of his exceedingly complex clothing. His arm is bent awkwardly—perhaps, he has speculated, because he was glancing at the checklist on his wrist. And Armstrong, looking even smaller and more spectral, is reflected in his visor.`}
        />
        
        <AllTimeImages2
            
            backgroundColor={'white'}
            color={'black'}
            title={'Michael Jordan'}
            fluid={data.bgImage11.childImageSharp.fluid}
            bgColor={'black'}
            textBtnColor={'white'}
            desc={'It may be the most famous silhouette ever photographed. Shooting Michael Jordan for LIFE in 1984, Jacobus “Co” Rentmeester captured the basketball star soaring through the air for a dunk, legs split like a ballet dancer’s and left arm stretched to the stars.'}
            description={` A beautiful image, but one unlikely to have endured had Nike not devised a logo for its young star that bore a striking resemblance to the photo. Seeking design inspiration for its first Air Jordan sneakers, Nike paid Rentmeester $150 for temporary use of his slides from the life shoot. Soon, “Jumpman” was etched onto shoes, clothing and bedroom walls around the world, eventually becoming one of the most popular commercial icons of all time.`}
        />
        
        <AllTimeImages2
            
            backgroundColor={'white'}
            color={'black'}
            title={'Oscars Selfie'}
            fluid={data.bgImage14.childImageSharp.fluid}
            bgColor={'black'}
            textBtnColor={'white'}
            desc={'It was a moment made for the celebrity-saturated Internet age. In the middle of the 2014 Oscars, host Ellen DeGeneres waded into the crowd and corralled some of the world’s biggest stars to squeeze in for a selfie.'}
            description={` As Bradley Cooper held the phone, Meryl Streep, Brad Pitt, Jennifer Lawrence and Kevin Spacey, among others, pressed their faces together and mugged. But it was what DeGeneres did next that turned a bit of Hollywood levity into a transformational image. After Cooper took the picture, De­Generes immediately posted it on Twitter, where it was retweeted over 3 million times, more than any other photo in history.`}
        />
        
        </>
    )
}

export default PhotoHistory