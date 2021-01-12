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
        blog: allMarkdownRemark (filter: {frontmatter: {template: {}}}, limit: 6, , sort: { order: DESC, fields: [frontmatter___date] }){
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

        latestNews: allMarkdownRemark (filter: {frontmatter: {template: {}}}, limit: 2, skip: 6, , sort: { order: DESC, fields: [frontmatter___date] }){
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
    const [filteredLatestPosts, setFilteredLastestPosts] = useState([])
   
    useEffect(() => {
        setFilteredPosts(
            posts.filter((post) =>
              post.frontmatter.title.toLowerCase().includes(search.toLowerCase()) ||
              post.excerpt.toLowerCase().includes(search.toLowerCase())
            )
        )
        setFilteredLastestPosts(
          latestPost.filter((latestPost) =>
            latestPost.frontmatter.title.toLowerCase().includes(search.toLowerCase()) ||
            latestPost.excerpt.toLowerCase().includes(search.toLowerCase())
          )
        )  

      }, [search, posts, latestPost])

    return(
        <>
       
       <section className="banner" style={{backgroundColor: 'transparent', paddingTop: '200px', height: 'auto'}}>
            <Container>
                <Row style={{paddingTop: '30px'}}>
                    <Col xs={12} sm={12} style={{textAlign: 'center'}}><h4 className="newsTitle" style={{fontFamily: 'Josefin Sans', fontWeight: '700', fontSize: '55px', lineHeight: '48px'}}>Latest News</h4></Col>
                </Row>

                <Row className="searchBarMobile" style={{paddingTop: '50px'}}> 
                  <Col md={12} xs={12} sm={12}>  
                    <input type="search" placeholder="Search" className="searchTerm" onChange={e => setSearch(e.target.value)}/>
                    <Button type="submit" className="searchButton" style={{cursor: 'default'}}>
                      <FontAwesomeIcon icon={faSearch}/>
                    </Button> 
                  </Col>
                </Row>

                
                <Row style={{paddingTop: '20px'}}>

                  <Col md={12} xs={12} sm={12} lg={8} className="latestNewsMob">
                    {filteredLatestPosts.map(post => ( 
                        <Row style={{paddingTop: '50px', justifyContent: 'center'}}>
                            
                          <Col md={12} xs={12} sm={12}>
                            <Link to={post.frontmatter.slug} style={{color: 'black'}}>
                                <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} className="latestNews" alt=""/>
                            </Link>
                          </Col>
                            
                          <Col md={12} xs={12} sm={12}>
                            <Link to={post.frontmatter.slug} style={{color: 'black'}}>
                              <Card.Body style={{textAlign: 'center'}}>
                                  <Card.Title>
                                    <Link to={post.frontmatter.slug} style={{color: 'black'}}>
                                      <h4 style={{color: 'black', fontFamily: "josefin sans", fontSize: "1.5em", lineHeight: "1.5"}}>
                                        {post.frontmatter.title}
                                      </h4>
                                    </Link>
                                  </Card.Title>
                                  <Card.Text style={{fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5"}}>
                                      {post.excerpt}
                                  </Card.Text>
                              </Card.Body>
                            </Link>
                          </Col>

                        </Row> 
                      ))}
                    </Col>

                    <Col md={12} xs={12} sm={12} lg={4}>

                      {filteredPosts.map(post => ( 
                        <Row style={{paddingTop: '50px'}} className="newsIcon">

                          <Media>
                            <Link to={post.frontmatter.slug} style={{color: 'black'}}>
                              <Img
                              style={{
                                  width: '155px',
                                  height: '155px'
                              }}
                              fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                              className="newsImg"
                              />
                            </Link>
                            <Link to={post.frontmatter.slug} style={{color: 'black'}}>
                              <Media.Body style={{padding: '0 20px 0 20px'}} className="newsBody">
                                <h4 style={{color: 'black', fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5", marginBottom: '10px'}}>
                                  {post.frontmatter.title}
                                </h4>
                                <h5 style={{fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5", marginBottom: '10px'}}>{post.frontmatter.date}</h5>
                                <p style={{fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5"}}>{post.excerpt}</p>
                              </Media.Body>
                            </Link>
                          </Media>

                        </Row>     
                        ))}
                      </Col>
                    
                  <Col md={12} xs={12} sm={12} lg={8} className="latestNewsDekstop">
                    {filteredLatestPosts.map(post => ( 
                        <Row style={{paddingTop: '50px', justifyContent: 'center'}}>
                            
                          <Col md={12} xs={12} sm={12}>
                            <Link to={post.frontmatter.slug} style={{color: 'black'}}>
                                <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} className="latestNews" alt=""/>
                            </Link>
                          </Col>
                          
                          <Col md={12} xs={12} sm={12}>
                            <Link to={post.frontmatter.slug} style={{color: 'black'}}>
                              <Card.Body style={{textAlign: 'center'}}>
                                  <Card.Title><Link to={post.frontmatter.slug}><h4 style={{color: 'black', fontFamily: "josefin sans", fontSize: "1.5em", lineHeight: "1.5"}}>{post.frontmatter.title}</h4></Link></Card.Title>
                                  <Card.Text style={{fontFamily: "josefin sans", fontSize: "1em", lineHeight: "1.5"}}>
                                      {post.excerpt}
                                  </Card.Text>
                              </Card.Body>
                            </Link>
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



