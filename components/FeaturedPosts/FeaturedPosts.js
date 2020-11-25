import React from "react";
import SbEditable from "storyblok-react";
import Link from 'next/link';

const FeaturedPosts = ({ blok }) => {
    console.log('Posts: ', blok.posts);
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className="featured-posts" key={blok._uid}>
                <h2 className="featured-posts__title">
                    {blok.title}
                </h2>
                <div className="featured-posts__list row">
                    {blok.posts.map((post) => {

                        return (
                            <div key={post.content._uid} className="col s12 m4">
                                <div className="card">
                                    <div className="card-image">
                                        {
                                            (post && post.content && post.content.image) && (
                                                <img src={post.content.image} className="featured-posts__list__image" />
                                            )
                                        }
                                    </div>
                                    <div className="card-content">
                                        <h2 className="featured-posts__list__title">
                                            {(post && post.content && post.content.title) && post.content.title}
                                        </h2>
                                        <p className="featured-posts__list__description">
                                            {(post && post.content && post.content.intro) && post.content.intro}
                                        </p>
                                    </div>
                                    <div className="card-action">
                                        <Link href={`/posts/${post.slug}`}><a>See More</a></Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </SbEditable>
    );
};

export default FeaturedPosts;