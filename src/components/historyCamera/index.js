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
                                    title={'Single-lens reflex cameras (SLR)'}
                                    image={data.GamaCam.childImageSharp.fluid}
                                    width={'150px'}
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