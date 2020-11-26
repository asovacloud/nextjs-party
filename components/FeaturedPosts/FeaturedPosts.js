import React from "react";
import SbEditable from "storyblok-react";
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'

const useLike = () => {
    const likePosts = useSelector((state) => state.likePosts)
    const dispatch = useDispatch();
    const like = (newLike) => {
        const checkLike = likePosts.indexOf(newLike);
        const newLikePosts = (checkLike === -1) ? [...likePosts, newLike] : likePosts.filter(l => l !== newLike);

        return dispatch({
            type: 'LIKE',
            payload: newLikePosts
        })
    };
    return { likePosts, like }
};

const FeaturedPosts = ({ blok }) => {
    const { likePosts, like } = useLike();

    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className="featured-posts" key={blok._uid}>
                <h2 className="featured-posts__title">
                    {blok.title}
                </h2>
                <div className="featured-posts__list row">
                    {blok.posts.map(post => {
                        const likeIs = likePosts.indexOf(post.content.title) !== -1;
                        return (
                            <div key={post.content._uid} className="col s12 m4">
                                <div className="card">
                                    <div className="card-image">
                                        <button
                                            className={ `card-item-btn-wishlist ${ likeIs ? 'active' : '' }` }
                                            onClick={ () => like(post.content.title) }
                                        >
                                            <i className={ likeIs ? "fas fa-heart" : "far fa-heart" } />
                                        </button>
                                        {
                                            <img src={post.content.image} className="featured-posts__list__image" />
                                        }
                                    </div>
                                    <div className="card-content">
                                        <h2 className="featured-posts__list__title">
                                            {post.content.title}
                                        </h2>
                                        <p className="featured-posts__list__description">
                                            {post.content.intro}
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