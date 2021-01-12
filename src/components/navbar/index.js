//navbar components
import React, {useState, useEffect, useRef} from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'

//bootstrap
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'

//gatsby image
import Img from 'gatsby-image'

//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faBars, faUser} from '@fortawesome/free-solid-svg-icons'

import {auth} from '../firebase'

const navbarStyle = {
    backgroundColor: 'black',
}

 function NavbarMenu(props) {

    
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

    

    const [showNavbar, setShowNavbar] = useState(navbarStyle.backgroundColor)
    const [showColorNavbar, setColorNavbar] = useState("")
    const [changeColorLogo, setColorLogo] = useState(data.logo1.childImageSharp.fixed)
    const [navbarClassname, setNavbarStyle] = useState("navbar")
    const [linkColor, setLinkColor] = useState("white");
    const [loginColor, setLoginColor] = useState("black");
    const [loginBg, setLoginBg] = useState("white");
    const [togglerColor, setTogglerColor] = useState("white")
    const [loginUserBg, setUserBg] = useState("white");

    const changeNavbarStyle = () => {

        if(window.scrollY > 50)
        {
            setShowNavbar('white')
            setColorNavbar('navLinkColor')
            setColorLogo(data.file.childImageSharp.fixed)
            setNavbarStyle('navbarOnScroll')
            setLinkColor('black')
            setLoginColor('white')
            setLoginBg('black')
            setTogglerColor('black')
            setUserBg('black')
        }
        else if(window.scrollY <= 50)
        {
            setShowNavbar('black')
            setColorNavbar('white')
            setColorLogo(data.logo1.childImageSharp.fixed)
            setNavbarStyle('navbar')
            setLinkColor('white')
            setLoginColor('black')
            setLoginBg('white')
            setTogglerColor('white')
            setUserBg('white')
        }
    }

    const target = useRef(null)

    const [loginHover, setLoginHover] = useState(false)

    const enter = () => {

        setLoginHover(true)

        if(window.scrollY > 50)
        {  
            setLoginBg('white')
            setLoginColor('black')
        }

        else if(window.scrollY <= 50){
         
            setLoginBg('black')
            setLoginColor('white')
        }
        
    }

    const leave = () => {

        setLoginHover(false)
       

        if(window.scrollY <= 50)
        {
            setLoginBg('white')
            setLoginColor('black')
            
        }

        else if(window.scrollY > 50){
            setLoginBg('black')
            setLoginColor('white')
        }
   
    }

    const [changeSpanIcon, setSpanIcon] = useState(faBars)
    const [togglerOpen, setTogglerOpen] = useState('navbar-togglerClose')

    const [didMount, setDidMount] = useState(false)
 
    useEffect(() => {
        setDidMount(true);
    },[])


    const changeIcon = () => {

        setSpanIcon(changeSpanIcon === faBars ? faTimes : faBars)
        setTogglerOpen(togglerOpen === 'navbar-togglerClose' ? 'navbar-togglerOpen' : 'navbar-togglerClose')
    }

    const [user, setUser] = useState(null)
    
    //console.log(user)

    useEffect(() => {

    if (!didMount)
        return
    document.addEventListener('scroll', changeNavbarStyle)

    target.current.addEventListener('mouseenter', enter)
    target.current.addEventListener('mouseleave', leave)

    
    auth.onAuthStateChanged((currentUser) => {

        if (currentUser) {
                setUser(true)
            }

        else{   
            setUser(false)
        }
    })
     

    },[target, didMount])

    if (!didMount)
        return null

    return(
        <Navbar fixed="top" expand="lg" className={navbarClassname} style={{backgroundColor: showNavbar}}>
            <Container>
                <Row style={{width: '100%'}}>
                    <Col >
                        <Navbar.Brand>
                            <Link to='/'><Img style={{width: '100px', height: '70px'}} className="navbarLogo" fixed={changeColorLogo} alt="logo" /></Link>
                        </Navbar.Brand>
                    </Col>  
                    
                    {user===false && 
                    <Nav.Link className={showColorNavbar} className="navUserLogin" style={{fontSize: '1.75em', paddingTop: '20px'}}> 
                        <Link to='/login/' style={{color: loginUserBg}}><FontAwesomeIcon icon={faUser}/></Link>
                    </Nav.Link> }
                    {user===true && 
                    <Nav.Link className={showColorNavbar} className="navUserLogin" style={{fontSize: '1.75em', paddingTop: '20px'}}> 
                            <Link to='/about/' style={{color: loginUserBg}}><FontAwesomeIcon icon={faUser}/></Link>
                        </Nav.Link>
                    }
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'transparent', height: 'fit-content', marginTop: '20px', fontSize: '2em'}} onClick={changeIcon}>
                            <FontAwesomeIcon icon={changeSpanIcon} className={togglerOpen} style={{color: togglerColor}} />
                    </Navbar.Toggle>
                    

                    <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: 'flex-end', fontFamily: 'josefin sans'}}>
                        <Nav>
                            <Nav.Link className={showColorNavbar} > <Link to='/' className="nav-link" activeStyle={{color: 'grey'}} style={{color: linkColor}}>Home</Link></Nav.Link>
                            <Nav.Link className={showColorNavbar} style={{display: props.displayNews}}> <Link to='/news/' className="nav-link" activeStyle={{color: 'grey'}} style={{color: linkColor}}>News</Link></Nav.Link>
                            <Nav.Link className={showColorNavbar} style={{display: props.display}}> <Link to={props.to} className="nav-link" activeStyle={{color: 'grey'}} style={{color: linkColor}}>News</Link></Nav.Link>
                            <Nav.Link className={showColorNavbar} > <Link to='/tips/' className="nav-link" activeStyle={{color: 'grey'}} style={{color: linkColor}}>Tips</Link></Nav.Link>
                            {user ? <Nav.Link className={showColorNavbar} > <Link to='/photogallery/' className="userNav-link" activeStyle={{color: 'grey'}} style={{color: linkColor}}>Photogallery </Link></Nav.Link> :
                                        <Nav.Link className={showColorNavbar} > <Link to='/history/' className="userNav-link" activeStyle={{color: 'grey'}} style={{color: linkColor}}> History </Link></Nav.Link>
                                }
                            <Nav.Link className={showColorNavbar} > <Link to='/alltimephotos/' className="nav-link" activeStyle={{color: 'grey'}} style={{color: linkColor}}>All time photos</Link></Nav.Link>
                            {user ?  <Nav.Link className={showColorNavbar} > <Link to='/about/' className="userNav-link" activeStyle={{color: 'grey'}} style={{color: linkColor}} > Profile </Link></Nav.Link> : 
                                        <Nav.Link className={showColorNavbar}  className="nav-linkLogin nav-link"  style={{backgroundColor: loginBg, borderRadius: '5px', width: 'fit-content'}} ref={target}> <Link to='/login/' activeStyle={{color: 'grey'}} className="userNav-link" style={{color: loginColor}} > LogIn </Link></Nav.Link>
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Row>
            </Container>
        </Navbar>
    )
    }
 


export default NavbarMenu