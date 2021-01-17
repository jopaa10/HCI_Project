import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

//timeline

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//bootstrap

import {Row, Container} from 'react-bootstrap'

//popover Left/Right
import PopoverLeft from './popoverLeftTemp'
import PopoverRight from './popoverRightTemp'

//title
import Title from '../title'


const CameraTimeline = () => {

    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "cameraObscura.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }

            leicaCam: file(relativePath: { eq: "daguerreotypeCamera.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }

            FirstFilmCam: file(relativePath: { eq: "FirstCameraSutton.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }

            KodakCam: file(relativePath: { eq: "kodakFirstCamera.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }

            KodakBrownieCam: file(relativePath: { eq: "BrownieCam.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }

            LeicaCam: file(relativePath: { eq: "leicaBarnack.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }

            RolleiflexCam: file(relativePath: { eq: "rolleiflex2.png" }) {
                childImageSharp {
                    fluid(maxWidth: 175){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            
            GamaCam: file(relativePath: { eq: "gama.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }

            PolaroidCam: file(relativePath: { eq: "polaroid.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }

            KodakDigitalCam: file(relativePath: { eq: "kodak.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }

            CanonCam: file(relativePath: { eq: "canon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }

            EpsonCam: file(relativePath: { eq: "EpsonCam.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }

            GameChanger: file(relativePath: { eq: "Cameraphones.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                        }
                    }
                }

            bgImage: file(relativePath: { eq: "retroCamWallpaper.jpg" }) {
                childImageSharp {
                    fluid{
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
    `)

    
    return(
        <section className="banner" style={{backgroundColor: 'white'}}>
            <Container>
                <Title 
                    title={'Fascinating History of Cameras'}
                />
                <Row className="banner" style={{backgroundColor: 'white', paddingTop: '0px'}}>
                    <VerticalTimeline animate={false}>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="4th century"
                            iconStyle={{ background: '#C4C4C4', color: '#fff' }}
                        >
                            
                            <Row id="typesOfCamera" >
                                <PopoverLeft
                                    placement='left'
                                    title={'Camera Obscura'}
                                    image={data.file.childImageSharp.fluid}
                                    width={'150px'}
                                    content={'Long before traditional cameras, people employed camera obscuras. Images projected using this natural phenomenon were larger than normal but inverted.'}
                                />
                            </Row>
                        </VerticalTimelineElement>
                        
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1839"
                            iconStyle={{ background: '#A5A5A5', color: '#fff' }}
                            
                        >
                            <Row id="typesOfCamera">
                                <PopoverRight
                                    title={'Daguerreotype'}
                                    placement='right'
                                    image={data.leicaCam.childImageSharp.fluid}
                                    width={'150px'}
                                    content={'Created by Louis Daguerre. To create the image on the plate, the early daguerreotypes had to be exposed to light for up to 15 minutes'}
                                />
                            </Row>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1859"
                            iconStyle={{ background: '#A5A5A5', color: '#fff' }}
                            
                        >
                            
                            <Row id="typesOfCamera"> 
                            <PopoverLeft
                                    placement='left'
                                    title={'First Film Camera'}
                                    image={data.FirstFilmCam.childImageSharp.fluid}
                                    width={'150px'}
                                    content={'In 1859, Sutton developed the earliest panoramic camera with a wide-angle lens. The lens consisted of a glass sphere filled with water, which projected an image onto a curved plate. The camera was capable of capturing an image in a 120 degree arc'}
                                />
                            </Row> 
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1888"
                            iconStyle={{ background: '#A5A5A5', color: '#fff' }}
                            
                        >
                            <Row id="typesOfCamera">
                                <PopoverRight
                                    placement='right'
                                    title={'The “Kodak” by George Eastman'}
                                    image={data.KodakCam.childImageSharp.fluid}
                                    width={'150px'}
                                    content={'George Eastman began selling his Kodak cameras. The film inside could hold up to 100 photos'}
                                />
                            </Row>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="1900"
                            iconStyle={{ background: '#696969', color: '#fff' }}
                            
                        >
                            <Row id="typesOfCamera">
                                <PopoverLeft
                                    placement='left'
                                    title={'First Mass-Market Camera (The Brownie)'}
                                    image={data.KodakBrownieCam.childImageSharp.fluid}
                                    width={'150px'}
                                    content={'George Eastman introduced the Brownie camera, introducing the snapshot to the public.'}
                                />
                            </Row>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="1910"
                            iconStyle={{ background: '#696969', color: '#fff' }}
                            
                        >
                            <Row id="typesOfCamera">
                                <PopoverRight
                                    placement='right'
                                    title={'First 35mm Film Camera'}
                                    image={data.LeicaCam.childImageSharp.fluid}
                                    width={'150px'}
                                    content={'Oskar Barnack, a development engineer for Leitz, first created his compact 35mm.'}
                                />
                            </Row>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="Late 1920s"
                            iconStyle={{ background: '#696969', color: '#fff' }}
                        
                        >
                            <Row id="typesOfCamera">
                                <PopoverLeft
                                    placement='left'
                                    title={'First Single-Lens Reflex Camera (SLR)'}
                                    image={data.RolleiflexCam.childImageSharp.fluid}
                                    width={'150px'}
                                    content={'The first practical reflex camera was the Franke & Heidecke Rolleiflex medium format TLR of 1928.'}
                                />
                            </Row>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="1948"
                            iconStyle={{ background: '#696969', color: '#fff' }}
                        
                        >
                            <Row id="typesOfCamera">
                                <PopoverRight
                                    placement='right'
                                    title={'Gama Duflex - Single-lens reflex cameras (SLR)'}
                                    image={data.GamaCam.childImageSharp.fluid}
                                    width={'150px'}
                                    content={'Very rare and important Hungarian 35mm SLR with viewfinder, first reflex camera to have a metal steel sheet focal plane shutter and eye level view finder, using a special Porro Type image erector.'}
                                />
                                </Row>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="1948"
                            iconStyle={{ background: '#696969', color: '#fff' }}
                        
                        >
                           <Row id="typesOfCamera">
                                <PopoverLeft
                                    placement='left'
                                    title={'First polaroid Camera'}
                                    image={data.PolaroidCam.childImageSharp.fluid}
                                    width={'150px'}
                                    content={'First appeared on the market in 1948. The simple nature and ability to print and view photos within minutes made them popular with families'}
                                />
                            </Row>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="1975"
                            iconStyle={{ background: '#696969', color: '#fff' }}
                        
                        >
                           <Row id="typesOfCamera">
                                <PopoverRight
                                    placement='right'
                                    title={'First Digital Camera System'}
                                    image={data.KodakDigitalCam.childImageSharp.fluid}
                                    width={'150px'}
                                    content={'In 1975, Kodak engineer Steve Sasson created the first-ever digital camera. The camera was about the size of a breadbox and it took 23 seconds to capture a single image'}
                                />
                            </Row>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2000 - Game changer"
                            iconStyle={{ background: '#3A3A3A', color: '#fff' }}
                        
                        >
                           <Row id="typesOfCamera">
                                <PopoverLeft
                                    placement='left'
                                    title={'DSLRs and Smartphones Take Over'}
                                    image={data.GameChanger.childImageSharp.fluid}
                                    width={'150px'}
                                    content={'A camera phone is a mobile phone which is able to capture photographs and often record video using one or more built-in digital cameras. The first cellular mobile camera phone was the Sharp SH04 (Nov 2000).'}
                                />
                            </Row>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2004"
                            iconStyle={{ background: '#3A3A3A', color: '#fff' }}
                        
                        >
                           <Row id="typesOfCamera">
                                <PopoverRight
                                    placement='right'
                                    title={'Mirrorless Cameras'}
                                    image={data.EpsonCam.childImageSharp.fluid}
                                    width={'150px'}
                                    content={'The first digital rangefinder camera commercially marketed was the Epson R-D1 .They were some of the first digital lens-interchangeable cameras without a reflex mirror.'}
                                />
                            </Row>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2005 - now"
                            iconStyle={{ background: '#3A3A3A', color: '#fff' }}
                        
                        >
                           <Row id="typesOfCamera">
                                <PopoverLeft
                                    placement='left'
                                    title={'The first full-frame, consumer-priced DSLR'}
                                    image={data.CanonCam.childImageSharp.fluid}
                                    width={'150px'}
                                    content={'The EOS 5D is a 12.8 megapixel digital single-lens reflex (DSLR) camera body produced by Canon. The camera accepts EF lens mount lenses.'}
                                />
                            </Row>
                        </VerticalTimelineElement>
                        
                    </VerticalTimeline>
                    
                </Row>
            </Container>
        </section>
    )
}
export default CameraTimeline