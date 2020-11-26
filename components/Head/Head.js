import React from 'react';
import NextHead from 'next/head';

const Head = ({ title, description }) => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>{ title || 'EBSCO' }</title>
            <meta name="description" content={ description || '' } />
            <meat name="viewport" content="width=device-width, initial=scale=1" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </NextHead>
    );
};

export default Head;