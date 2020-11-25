import React from 'react';
import NextHead from 'next/head';

const Head = ({ title, description }) => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>{ title || '' }</title>
            <meta name="description" content={ description || '' } />
            <meat name="viewport" content="width=device-width, initial=scale=1" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </NextHead>
    );
};

export default Head;