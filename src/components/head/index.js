import React from 'react'

import  { Helmet } from 'react-helmet'

const Head = (props) => {

    return (
        <Helmet>
            {/* Setting the language of your page does not get more difficult than this! */}
            <html lang="en" />

            <title>{`Photo-book | ${props.title}`}</title>
            
            {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* The rest we set dynamically with props */}
            <meta name="description" content={props.description} />
            
            {/* We pass an array of keywords, and then we use the Array.join method to convert them to a string where each keyword is separated by a comma */}
            <meta name="keywords" content={props.keywords.join(',')} />
        </Helmet>
    )
    
}

export default Head
