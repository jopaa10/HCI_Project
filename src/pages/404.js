import React, {useState} from "react"

//components
import Footer from "../components/footer/"
import Header from "../components/header/"

//page components
import Layout404 from "../components/404/"

//head document
import Head from '../components/head'

const NotFoundPage = () => {

  const [displayBlog] = useState('none')

  return (
      <>
          <Head 
              title = {"404: Not found"}
              keywords = { ["camera", "photo", "images", "404", "photography", "error", "does not exist"]}
              description = { "404 page: Not found "}
          />
          
          <main>
            <Header 
              display={displayBlog}
            />
            <Layout404 />
            <Footer />
          </main>
      </>
  )
}

export default NotFoundPage
