import React, {useState, useEffect} from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'

//react bootstrap
import {Row, Col, Container, Card, Media, Button} from 'react-bootstrap'

import Img from 'gatsby-image'

//fontawesome 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const NewsForm = () => {

    const data = useStaticQuery(graphql`
    {
        blog: allMarkdownRemark (filter: {frontmatter: {template: {}}}, limit: 6){
          posts: nodes {
            frontmatter {
              slug
              title
              date(fromNow: true)
              author
              featuredImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt(pruneLength: 30)
          }
        }

        latestNews: allMarkdownRemark (filter: {frontmatter: {template: {}}}, limit: 2, skip: 6){
            latestPost: nodes {
              frontmatter {
                slug
                title
                date(fromNow: true)
                author
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 655, maxHeight: 500){
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              excerpt(pruneLength: 140)
            }
          }
      }
    `
    )

    const { posts } = data.blog // data.markdownRemark holds your post data
    const { latestPost } = data.latestNews

    const [search, setSearch] = useState("")
    const [filteredPosts, setFilteredPosts] = useState([])
   
    useEffect(() => {
        setFilteredPosts(
          posts.filter((post) =>
            post.frontmatter.title.toLowerCase().includes(search.toLowerCase())
          )
        )
      }, [search, posts])

    return(
        <>
       
       <section className="banner" style={{backgroundColor: 'transparent', paddingTop: '200px', height: 'auto'}}>
            <Container>
                <Row style={{paddingTop: '30px'}}>
                    <Col xs={12} sm={12} style={{textAlign: 'center'}}><h4 style={{fontFamily: 'Josefin Sans', fontWeight: '700', fontSize: '55px', lineHeight: '48px'}}>Latest News</h4></Col>
                </Row>

                <Row className="searchBarMobile" style={{paddingTop: '50px'}}> 
                  <Col md={12} xs={12} sm={12}>  
                    <input type="search" placeholder="Search" className="searchTerm" onChange={e => setSearch(e.target.value)}/>
                    <Button type="submit" className="searchButton">
                      <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                  </Col>
                </Row>

                
                <Row style={{paddingTop: '20px'}}>

                <Col md={12} xs={12} sm={12} lg={8} className="latestNewsMob">
                    {latestPost.map(post => ( 
                        <Row style={{paddingTop: '50px', justifyContent: 'center'}}>
                            
                            <Col md={12} xs={12} sm={12}>
                                <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} className="latestNews" alt=""/>
                            </Col>
                            
                                <Col md={12} xs={12} sm={12}>
                                <Card.Body style={{textAlign: 'center'}}>
                                    <Card.Title><Link to={post.frontmatter.slug}><h4 style={{color: 'black', fontFamily: "josefin sans", fontSize: "1.5em", lineHeight: "1.5"}}>{post.frontmatter.title}</h4></Link></Card.Title>
                                    <Card.Text style={{fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5"}}>
                                        {post.excerpt}
                                    </Card.Text>
                                </Card.Body>
                                </Col>
                        </Row> 
                    ))}
                    </Col>

                    <Col md={12} xs={12} sm={12} lg={4}>

                    {filteredPosts.map(post => ( 
                
                        <Row style={{paddingTop: '50px'}} className="newsIcon">
                        <Media>
                            <Img
                            style={{
                                width: '155px',
                                height: '155px'
                            }}
                            fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                            className="newsImg"
                            />
                            <Media.Body style={{padding: '0 20px 0 20px'}} className="newsBody">
                              <Link to={post.frontmatter.slug}>
                                  <h4 style={{color: 'black', fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5", marginBottom: '10px'}}>{post.frontmatter.title}</h4>
                              </Link>
                              <h5 style={{fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5", marginBottom: '10px'}}>{post.frontmatter.date}</h5>
                              <p style={{fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5"}}>{post.excerpt}</p>
                            </Media.Body>
                            </Media>
                        </Row>     
                        ))}
                        </Col>
                    
                    <Col md={12} xs={12} sm={12} lg={8} className="latestNewsDekstop">
                    {latestPost.map(post => ( 
                        <Row style={{paddingTop: '50px', justifyContent: 'center'}}>
                            
                            <Col md={12} xs={12} sm={12}>
                                <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} className="latestNews" alt=""/>
                            </Col>
                            
                            <Col md={12} xs={12} sm={12}>
                              <Card.Body style={{textAlign: 'center'}}>
                                  <Card.Title><Link to={post.frontmatter.slug}><h4 style={{color: 'black', fontFamily: "josefin sans", fontSize: "1.5em", lineHeight: "1.5"}}>{post.frontmatter.title}</h4></Link></Card.Title>
                                  <Card.Text style={{fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5"}}>
                                      {post.excerpt}
                                  </Card.Text>
                              </Card.Body>
                            </Col>
                        </Row> 
                    ))}
                    </Col> 
                
                </Row>
            </Container>
             
        </section>
    
    </>
    )
}



export default NewsForm



