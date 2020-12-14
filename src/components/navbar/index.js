//navbar components
import React, {useState, useEffect} from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'

//bootstrap
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'

//gatsby image
import Img from 'gatsby-image'

//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faBars, faUser} from '@fortawesome/free-solid-svg-icons'


 function NavbarMenu() {

    const data = useStaticQuery(graphql`
        query{
            file(relativePath: {eq: "logoT-shirt.png"}){
                childImageSharp{
                    fixed{
                        ...GatsbyImageSharpFixed
                    }
                }
            }

           logo1: file(relativePath: {eq: "logoT-shirtWhite.png"}){
                childImageSharp{
                    fixed{
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    
    `)

    const [showNavbar, setShowNavbar] = useState("black")
    const [showColorNavbar, setColorNavbar] = useState("white")
    const [loginBg, setLoginBg] = useState("loginButton")
    const [loginColor, setLoginColor] = useState("loginButtonColor")
    const [changeColorLogo, setColorLogo] = useState(data.logo1.childImageSharp.fixed)
    const [navbarClassname, setNavbarStyle] = useState("navbar")
    const [linkColor, setLinkColor] = useState("white")
    const [togglerColor, setTogglerColor] = useState("white")
    const [loginUserBg, setUserBg] = useState("white")

    const changeNavbarStyle = () => {

        if(window.scrollY > 50)
        {
            setShowNavbar('white')
            setLoginColor('loginButtonAfterScrollColor')
            setLoginBg('loginButtonAfterScroll')
            setColorNavbar('black')
            setColorLogo(data.file.childImageSharp.fixed)
            setNavbarStyle('navbarOnScroll')
            setLinkColor('black')
            setTogglerColor('black')
            setUserBg('black')
        }
        else if(window.scrollY <= 50)
        {
            setShowNavbar('black')
            setColorNavbar('white')
            setLoginColor('loginButtonColor')
            setLoginBg('loginButton')
            setColorLogo(data.logo1.childImageSharp.fixed)
            setNavbarStyle('navbar')
            setLinkColor('white')
            setTogglerColor('white')
            setUserBg('white')
        }
    }


    const [changeSpanIcon, setSpanIcon] = useState(faBars)
    const [togglerOpen, setTogglerOpen] = useState('navbar-togglerClose')

    const changeIcon = () => {

        setSpanIcon(changeSpanIcon === faBars ? faTimes : faBars)
        setTogglerOpen(togglerOpen === 'navbar-togglerClose' ? 'navbar-togglerOpen' : 'navbar-togglerClose')
    }

    useEffect(() => {

        document.addEventListener('scroll', changeNavbarStyle)

    },)

    return(
        <Navbar fixed="top" expand="lg" className={navbarClassname} style={{backgroundColor: showNavbar}}>
             <Container>
                <Row style={{width: '100%'}}>
                    <Col >
                        <Navbar.Brand href="#home" >
                            <Img style={{width: '100px', height: '70px'}} className="navbarLogo" fixed={changeColorLogo} alt="logo" />
                        </Navbar.Brand>
                    </Col>  
                    
                    <Nav.Link className={showColorNavbar} className="navUserLogin" style={{fontSize: '1.75em', paddingTop: '20px'}}> 
                        <Link to='/signup/' style={{color: loginUserBg}}><FontAwesomeIcon icon={faUser}/></Link>
                    </Nav.Link>  
                   
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'transparent', height: 'fit-content', marginTop: '20px', fontSize: '2em'}} onClick={changeIcon}>
                            <FontAwesomeIcon icon={changeSpanIcon} className={togglerOpen} style={{color: togglerColor}} />
                    </Navbar.Toggle>
                    

                    <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: 'flex-end', fontFamily: 'josefin sans'}}>
                        <Nav>
                            <Nav.Link className={showColorNavbar} > <Link to='/' className="nav-link" activeStyle={{color: 'grey'}} style={{color: linkColor}}>Home</Link></Nav.Link>
                            <Nav.Link className={showColorNavbar} > <Link to='/news/' className="nav-link" activeStyle={{color: 'grey'}} style={{color: linkColor}}>News</Link></Nav.Link>
                            <Nav.Link className={showColorNavbar} > <Link to='/tips/' className="nav-link" activeStyle={{color: 'grey'}} style={{color: linkColor}}>Tips</Link></Nav.Link>
                            <Nav.Link className={showColorNavbar} > <Link to='/history/' className="nav-link" activeStyle={{color: 'grey'}} style={{color: linkColor}}>History </Link></Nav.Link>
                            <Nav.Link className={showColorNavbar} > <Link to='/alltimephotos/' className="nav-link" activeStyle={{color: 'grey'}} style={{color: linkColor}}>All time photos</Link></Nav.Link>
                            <Nav.Link className={loginBg} id="nav-linkLogin"  style={{width: 'fit-content'}}> <Link className={loginColor}  to='/login/' activeStyle={{color: 'grey'}}>LogIn</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
 
                </Row>
            </Container>
        </Navbar> 
    )
}

export default NavbarMenu