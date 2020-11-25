import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"

const BlogPost = ({ blok }) => {
    console.log('Blok: ', blok);
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className="single-blog">
                <h1 className="single-blog__title">{blok.title}</h1>
                <div className="single-blog__intro">{blok.intro}</div>
                <div className="single-blog__image">
                    <img src={blok.image} />
                </div>
                <div className="single-blog__description">{render(blok.long_text)}</div>
            </div>
        </SbEditable>
    )
}

export default BlogPost;